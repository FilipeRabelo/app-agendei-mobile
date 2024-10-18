import { StyleSheet } from "react-native";
import { FONT_SIZE, COLORs } from "../../constants/theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 21,
    backgroundColor: COLORs.white
  },

  text: {
    fontSize: FONT_SIZE.llg,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORs.blue,
    marginTop: 9,
    marginBottom: 15
  },
})