import { StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 19,
    marginBottom: 11,
    borderWidth: 0.5,
    borderRadius: 5,
    borderBlockColor: COLORs.blueLight,
    backgroundColor: COLORs.gray6,
  },

  contentText:{
    flex: 1,
  },

  description:{
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORs.gray1,
    marginTop: 5
  },

  price:{
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORs.blue,
    marginTop: 3
  },

  btn:{
    marginTop: 3
  }

})