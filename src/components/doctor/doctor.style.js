import { StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORs.gray6,
    paddingHorizontal: 9,
    paddingVertical: 15,
    flexDirection: 'row',
    alignContent: 'center',

    borderWidth: 0.5,
    borderColor: COLORs.blueLight,
    borderRadius: 5,
    marginBottom: 11,
  },

  img:{
    width: 50,
    height: 50,

  },

  name:{
    fontWeight: 'bold',
    fontSize: FONT_SIZE.lg,
    color: COLORs.gray1,
    marginLeft: 10
  },

  specialty:{
    fontWeight: 'bold',
    fontSize: FONT_SIZE.md,
    color: COLORs.blueLight,
    marginLeft: 10
  },

  viewText:{
    alignContent: 'center',
    justifyContent: 'center',
  }
})