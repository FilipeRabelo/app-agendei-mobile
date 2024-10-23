
import { Platform, StyleSheet } from "react-native";
import { COLORs, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORs.white,
    paddingHorizontal: 20,
    marginBottom: 27,
    // marginTop: 20
  },

  // theme do picker
  theme: {                                    // formatação vem do arquivo do github
    todayTextColor: COLORs.red,                // Dia de hoje
    selectedDayBackgroundColor: COLORs.blue,   // Dia selecionado
    selectedDayTextColor: COLORs.white,        // Texto do dia selecionado
    arrowColor: COLORs.blue,                   // Cor das setas
    backgroundColor: COLORs.gray6,             // Cor de fundo do picker
    calendarBackground: COLORs.gray6,          // Cor de fundo do calendário
    dayTextColor: COLORs.blue,                 // Dias normais
  },

  viewTextHour: {
    alignItems: 'center',
  },

  textHour: {
    fontSize: FONT_SIZE.llg,
    fontWeight: 'bold',
    color: COLORs.gray1,
    marginTop: 21,
  },

  contentPicker: {
    ...Platform.select({
      android: {
        marginTop: 27,
        borderWidth: 0.5,
        borderColor: COLORs.blueLight,
        backgroundColor: COLORs.gray6,
        borderRadius: 5,
        color: COLORs.blue
      },
      ios: {
        marginTop: 9,
        color: COLORs.blue
      }
    })
  },

  picker: {
    color: '#000000', // Cor do texto no Picker
    fontWeight: 'bold'
  },
})


// formatação vem do arquivo do github

// theme: {            
//   backgroundColor: '#ffffff',
//   calendarBackground: '#ffffff',
//   textSectionTitleColor: '#b6c1cd',
//   selectedDayBackgroundColor: '#00adf5',
//   selectedDayTextColor: '#ffffff',
//   todayTextColor: '#00adf5',
//   dayTextColor: '#2d4150',
//   textDisabledColor: '#dd99ee',
// },