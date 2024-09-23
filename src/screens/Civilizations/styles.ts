import { StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const { background } = light

export const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
)