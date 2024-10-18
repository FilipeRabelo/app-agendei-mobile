
import { StyleSheet } from "react-native";
import { FONT_SIZE, COLORs } from "../../constants/theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORs.white,
  },

  banner:{
    backgroundColor: COLORs.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 25,    
  },

  name: {
    fontSize: FONT_SIZE.llg,
    color: COLORs.white,
    fontWeight: 'bold',
    marginTop: 5,
  },

  specialty: {
    fontSize: FONT_SIZE.md,
    color: COLORs.white,
    marginTop: 3,
  },

  flatList: {
    marginTop: 20,
  },

  text: {
    fontSize: 14,
  }

})