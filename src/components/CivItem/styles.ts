import { StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const { white } = light

export const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 10
  },
  itemText: {
    color: white,
    fontFamily: 'CrimsonPro-Light',
    marginTop: 12
  },
})