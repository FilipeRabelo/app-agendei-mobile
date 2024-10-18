
import { StyleSheet } from "react-native";
import { COLORs,FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORs.white,
    alignContent: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: FONT_SIZE.llg,
    fontWeight: 'bold',

    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto'
  }
})