import { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { router } from "expo-router";
import { Ingredient } from "@/components/Ingredient/ingredient";
import { Selected } from "@/components/Selected/index";
import { styles } from "./styles";
import { services } from "@/services";

//Com o expo router, usamdos o export default
export default function Index() {

    const[ selected, setSelected ] = useState<string[]>([]);
    const[ ingredients, setIngredients ] = useState<IngredientResponse[] | any>([])

    function handleToggleSelected(value: string) {

        //Se o valor existe (No caso estaria selecionado) dentro da array, caso sim, ele irá remover.
        if ( selected.includes(value) ) {

            return setSelected((state) => state.filter((item) => item !== value));
        };

        setSelected((state) => [...state, value]); 
    };
    function handleClearSelected() {

        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Nao", style: "cancel"},
            { text: "Sim", onPress: () => {setSelected([]);}}
        ]);
        
    };
    function handleSearch() {

        router.navigate("/recipes/" + selected);
    };

    useEffect(() => {

        services.ingredientes.findAll().then(setIngredients);
    }, []);

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Escolha {"\n"}<Text style={styles.subtitle}>os produtos</Text>
            </Text> 
            <Text style={styles.message}>
                Descubra receitas baseadas nos {"\n"}<Text>produtos que você escolheu</Text>
            </Text>

            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>

                {ingredients.map((item: any) => (

                    <Ingredient name={item.name} image={`${services.storage.imagePath}/${item.image}`} selected={selected.includes(item.id)} onPress={() => {handleToggleSelected(item.id)}} key={item.id}/>
                ))}
            
            </ScrollView>

            {selected.length > 0 && (<Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch}/>)}

        </View>
    )
};
