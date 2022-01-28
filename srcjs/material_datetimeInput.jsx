import { reactShinyInput } from 'reactR';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker,
  DateTimePicker
} from '@material-ui/pickers';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function MaterialDateTime({configuration, value, setValue}) {

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: configuration.primary_color,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: configuration.secondary_color
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

  const switchValue = (date) => {
    setValue(value = date)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    switchValue(date);
  };


  return(
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <DateTimePicker
            margin="normal"
            {... configuration.variant != "default" ? {variant: configuration.variant } : {}}
            label={configuration.label}
            value={selectedDate}
            {... configuration.minDate != null ? {minDate: new Date(configuration.minDate) } : null}
            {... configuration.maxDate != null ? {maxDate: new Date(configuration.maxDate) } : null}
            autoOk={configuration.autoOk}
            allowKeyboardControl={configuration.keyboardControl}
            {... configuration.outlined ? {inputVariant: "outlined" } : {}}
            ampm={configuration.ampm}
            disableFuture={configuration.disableFuture}
            disablePast={configuration.disablePast}
            helperText={configuration.helperText}
            hideTabs={configuration.hideTabs}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );

}


export default function initDateTime(){
  return reactShinyInput(
    '.material_datetimeInput',
    'reactmaterialpkg.material_datetimeInput',
    MaterialDateTime
  );
}
