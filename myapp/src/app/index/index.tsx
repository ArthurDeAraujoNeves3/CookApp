import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Ingredient } from "@/components/Ingredient/ingredient";
import { styles } from "./styles";

//Com o expo router, usamdos o export default
export default function Index() {

    const[ selected, setSelected ] = useState<string[]>([]);

    function handleToggleSelected(value: string) {

        //Se o valor existe (No caso estaria selecionado) dentro da array, caso sim, ele irá remover.
        if ( selected.includes(value) ) {

            return setSelected((state) => state.filter((item) => item !== value));
        };

        setSelected((state) => [...state, value]); 
    };

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Escolha {"\n"}<Text style={styles.subtitle}>os produtos</Text>
            </Text> 
            <Text style={styles.message}>
                Descubra receitas baseadas nos {"\n"}<Text>produtos que você escolheu</Text>
            </Text>

            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>

                {Array.from({length: 100}).map((item, index) => (

                    <Ingredient name="Tomate" image="" selected={selected.includes(String(index))} onPress={() => {handleToggleSelected(String(index))}} key={index}/>
                ))}
            
            </ScrollView>

        </View>
    )
};
