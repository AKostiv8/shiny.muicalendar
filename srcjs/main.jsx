import initActionButton from './material_action_button.jsx';
import initSwitchButton from './material_switch_button.jsx';
import initSlider from './material_slider.jsx';
import initCalendar from './material_calendar.jsx';
import initCalendarKeyboard from './material_calendar_keyboard.jsx';
import initTimePicker from './material_timepicker.jsx';
import initTimePickerKeyboard from './material_timepicker_keyboard.jsx';
import initDateTime from './material_datetimeInput.jsx';
import { reactWidget } from 'reactR';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';


/* const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#031c2b',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#0099f9'
    }
  }
}); */


initActionButton();
initSwitchButton();
initSlider();
initCalendar();
initCalendarKeyboard();
initTimePicker();
initTimePickerKeyboard();
initDateTime();
