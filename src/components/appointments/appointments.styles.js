import { StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORs.gray6,
    paddingHorizontal: 9,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderColor: COLORs.blueLight,
    borderRadius: 5,
    marginBottom: 11,
  },

  name: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.lg,
    color: COLORs.gray1,
    marginBottom: 2,
  },

  specialty: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.md,
    color: COLORs.blue,
    marginBottom: 4,
  },

  ////////////////////////////////////////

  content: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 19
  },

  contentData: {
    flex: 1,
    alignContent: 'center',
    left: -3
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 5
  },

  calendar: {
    flexDirection: 'row',
  },

  time: {
    flexDirection: 'row',
  },

  textCalendar: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORs.gray2,
    marginTop: 3.5,
  },

  textTime: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORs.gray2,
    marginTop: 3.5,
  },

  // button

  contentBtn: {
    alignContent: 'center',
    justifyContent: 'center',
  },


})