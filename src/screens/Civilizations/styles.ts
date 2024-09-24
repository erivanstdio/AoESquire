import { StyleSheet } from "react-native";
import { light } from "../../themes/colors";

const { white, background } = light

export const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: .3,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    width: '80%',
    marginTop: 20
  },
  titleBox: {
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: '30%',
    width: '80%'
  },
  title: {
    fontFamily: 'CrimsonPro-ExtraLight',
    color: white,
    fontSize: 30
  },
  flatList: {
    flex: 1,
    width: '100%',
    padding: 10
  }
})