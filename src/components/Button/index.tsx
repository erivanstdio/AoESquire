import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { gradient, light } from '../../themes/colors';
import GradientText from '../MaskedView';

type ButtonProps = {
    onPress: () => void;
    title: string;
}
const { opaqueDarkGold, opaqueDarkAqua } = gradient

export const Button: React.FC<ButtonProps> = ({onPress, title}) => {
    return (
        <LinearGradient
            style={styles.buttonGradient}
            useAngle={true}
            angle={45}
            colors={[opaqueDarkGold, opaqueDarkAqua]}
        >
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <GradientText style={styles.buttonText}>{title}</GradientText>
            </TouchableOpacity>
        </LinearGradient>
    );
} 