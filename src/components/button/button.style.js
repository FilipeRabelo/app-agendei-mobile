
import { COLORs, FONT_SIZE } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  btn: {
    width: '100%',
    backgroundColor: COLORs.blue,
    borderRadius: 7,
    padding: 13,
  },

  text: {
    color: '#FFF',
    fontSize: FONT_SIZE.md,
    textAlign: "center",
    fontSize: 21,
    fontWeight: 'bold',
  }
})



// export const styles = {

//   btn: {
//     width: '100%',
//     backgroundColor: COLORs.blue,
//     borderRadius: 7,
//     padding: 13,
//   },

//   text: {
//     color: '#FFF',
//     fontSize: FONT_SIZE.md,
//     textAlign: "center",
//     fontSize: 21,
//     fontWeight: 'bold',
//   }
// }