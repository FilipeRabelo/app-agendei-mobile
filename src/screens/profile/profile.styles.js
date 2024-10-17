import { StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORs.gray6,
    paddingHorizontal: 9,
    paddingVertical: 15,
    marginBottom: 11,
  },

  item: {
    borderWidth: 0.5,
    borderColor: COLORs.blueLight,
    borderRadius: 5,
    paddingLeft: 8,
    paddingHorizontal: 9,
    paddingVertical: 15,
    marginVertical: 7,
    marginHorizontal: 9
  },


  textH1: {
    fontSize: FONT_SIZE.llg,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORs.blue,
    marginTop: 9,
    marginLeft: 10,
    marginBottom: 15
  },

  title: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORs.blueLight,
  },

  text: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORs.gray1,
    marginTop: 9
  },

  img:{
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginTop: 20,
    marginBottom: 20
  },

})