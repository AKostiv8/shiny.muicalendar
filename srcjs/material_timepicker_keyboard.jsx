import { reactShinyInput } from 'reactR';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  TimePicker
} from '@material-ui/pickers';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function MaterialTimePickerKeyboard({configuration, value, setValue}) {

  const theme = createTheme({
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
  });

  const evalInputVal = (val) => {
    if(val != null) {
      return(new Date(val))
    } else {
      return(null)
    }
  }

  const [selectedDate, setSelectedDate] = React.useState(evalInputVal(configuration.value));

  const chengeValue = (date) => {
    setValue(value = date)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    chengeValue(date);
  };

  const viewFormat = (view) => {
    if(view === "hm") return(["hours", "minutes"])
    if(view === "hms") return(["hours", "minutes", "seconds"])
    if(view === "ms") return(["minutes", "seconds"])
  }

  return (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
       <KeyboardTimePicker
          showTodayButton={configuration.showTodayButton}
          ampm={configuration.ampm}
          {... configuration.variant != "default" ? {variant: configuration.variant } : {}}
          todayLabel={configuration.todayLabel}
          label={configuration.label}
          placeholder={configuration.placeholder}
          mask={configuration.mask}
          autoOk={configuration.autoOk}
          minutesStep={configuration.minutesStep}
          views={viewFormat(configuration.views)}
          {... configuration.format != "default" ? {format: configuration.format } : null}
          {... configuration.horizontal_orientation ? {orientation: "landscape" } : {}}
          {... configuration.outlined ? {inputVariant: "outlined" } : null}
          openTo={configuration.openTo}
          value={selectedDate}
          onChange={handleDateChange}
          format={configuration.format}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
  );
}


export default function initTimePickerKeyboard(){
  return reactShinyInput(
    '.material_timepicker_keyboard',
    'reactmaterialpkg.material_timepicker_keyboard',
    MaterialTimePickerKeyboard
  );
}
