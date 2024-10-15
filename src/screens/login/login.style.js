
import { COLORs, FONT_SIZE } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORs.white,
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',  // para desgrudar as Views
  },

  containerLogo: {
    alignItens: 'center',
    marginHorizontal: 'auto',
  },

  logo: {
    width: 169,
    height: 41,
  },

  input: {
    backgroundColor: COLORs.gray5,
    padding: 13,
    borderRadius: 7,
    borderColor: "#eee",
    borderWidth: 1.5,
    marginBottom: 15,
  },

  footer: {
    flexDirection: 'row',
    alignItens: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    fontSize: 19,
  },

  footerText: {
    fontSize: 19,
  },

  footerLink: {
    color: COLORs.blue,
    fontWeight: 'bold',
    fontSize: 19,
  }
})



// import { COLORs, FONT_SIZE } from '../../constants/theme';
// export const styles = {

//   container: {
//     backgroundColor: COLORs.white,
//     flex: 1,
//     padding: 50,
//     justifyContent: 'space-between',  // para desgrudar as Views
//   },

//   containerLogo: {
//     alignItens: 'center',
//     marginHorizontal: 'auto',
//   },

//   logo: {
//     width: 121,
//     height: 23,
//   },

//   input: {
//     backgroundColor: COLORs.gray5,
//     padding: 13,
//     borderRadius: 7,
//     borderColor: "#bbb",
//     borderWidth: 1.5,
//     marginBottom: 15,
//   },

//   footer: {
//     flexDirection: 'row',
//     alignItens: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 'auto',
//     fontSize: 19,
//   },

//   footerText: {
//     fontSize: 19,
//   },

//   footerLink: {
//     color: COLORs.blue,
//     fontWeight: 'bold',
//     fontSize: 19,
//   }
// }
