import { View, Text } from "react-native";
import { styles } from "./styles";

//Com o expo router, usamdos o export default
export default function Index() {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Escolha os produtos</Text>
            <Text style={styles.subtitle}>Descubra receitas baseadas nos produtos que você escolheu</Text>

        </View>
    )
};
