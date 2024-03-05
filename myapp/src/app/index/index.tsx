import { View, Text, ScrollView } from "react-native";
import { Ingredient } from "@/components/Ingredient/ingredient";
import { styles } from "./styles";

//Com o expo router, usamdos o export default
export default function Index() {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Escolha {"\n"}<Text style={styles.subtitle}>os produtos</Text>
            </Text> 
            <Text style={styles.message}>
                Descubra receitas baseadas nos {"\n"}<Text>produtos que você escolheu</Text>
            </Text>

            <ScrollView horizontal contentContainerStyle={styles.ingredients}>

                <Ingredient />
                <Ingredient />
                <Ingredient />
            
            </ScrollView>

        </View>
    )
};
