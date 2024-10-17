import { StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORs.gray6,
    flex: 1,
    backgroundColor: COLORs.gray6,
    paddingHorizontal: 9,
    paddingVertical: 13,
    marginBottom: 11,
  },

  item: {
    borderWidth: 1,
    borderColor: COLORs.blueLight,
    borderRadius: 5,
    paddingLeft: 8,
    paddingVertical: 15,
    marginVertical: 7
    // paddingTop: 15,
    // paddingBottom: 15,
  },

  title: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORs.blueLight,
  },

  text: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 9
  },

  img:{
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginTop: 50,
    marginBottom: 50
  }
})