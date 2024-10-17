
import { COLORs, FONT_SIZE } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  btn: {
    width: '100%',
    borderRadius: 7,
    padding: 13,
  },

  primary:{
    backgroundColor: COLORs.blue,
  },

  danger:{
    backgroundColor: COLORs.red,
  },

  text: {
    color: '#FFF',
    fontSize: FONT_SIZE.md,
    textAlign: "center",
    fontWeight: 'bold',
  }
})

