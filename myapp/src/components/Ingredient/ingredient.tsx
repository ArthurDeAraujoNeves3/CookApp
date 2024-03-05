import { Pressable, Text, Image } from "react-native";
import { styles } from "./styles";

export function Ingredient() {

    return(

        <Pressable style={styles.container}>

            <Image source={require("@/assets/Images/tomato.png")} style={styles.image}/>
            <Text style={styles.title}>Maça</Text>
        
        </Pressable>
    );
};
