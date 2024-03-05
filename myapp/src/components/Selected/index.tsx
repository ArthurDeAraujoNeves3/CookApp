import Animated from "react-native-reanimated";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";

type Props = {

    quantity: number,
    onClear: () => void,
    onSearch: () => void,
};

export function Selected({quantity, onClear, onSearch}: Props) {

    return(
        
        <Animated.View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>

            </View>

        </Animated.View>
    );
};
