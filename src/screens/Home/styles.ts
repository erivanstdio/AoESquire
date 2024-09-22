import { Button, Image, StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const {background, white, black} = light
export const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: background,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: 150,
            height: 150,
            position: 'absolute',
            bottom: '55%',
            
        },  
        bottomBox: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            bottom: '12%',
            position: 'absolute',
        },
        upperText: {
            color: white,
            fontFamily: 'Poppins-ExtraLight',
            fontSize: 20,
            lineHeight: 28,
        },
        lowerText: {
            color: white,
            fontFamily: 'Poppins-Regular',
            fontSize: 36,
            lineHeight: 43,
            marginBottom: '10%',
        },
    }
)