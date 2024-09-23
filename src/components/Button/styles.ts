import { StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const { white, black } = light

export const styles = StyleSheet.create({
    buttonGradient: {
        width: '80%',
        borderRadius: 18,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
    },
    buttonText: {
        fontFamily: 'TrajanPro-Bold',
        fontSize: 14,
    },
})