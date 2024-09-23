import { StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const { background } = light

export const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: '30%',
    width: '80%'
  },
  title: {
    fontFamily: 'CrimsonPro-ExtraLight',
    color: 'white',
    fontSize: 30
  }
})