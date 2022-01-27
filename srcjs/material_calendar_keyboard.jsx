import { reactShinyInput } from 'reactR';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';



function MaterialCalendarKeyboard({configuration, value, setValue}) {

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

  const viewFormat = (view) => {
    if(view === "year-month-day") return(["year", "month", "date"])
    if(view === "year-month") return(["year", "month"])
    if(view === "year") return(["year"])
  }

  return (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          disableToolbar={configuration.disableToolbar}
          {... configuration.variant != "default" ? {variant: configuration.variant } : {}}
          id="date-picker-dialog"
          label={configuration.label}
          {... configuration.minDate != null ? {minDate: new Date(configuration.minDate) } : null}
          {... configuration.maxDate != null ? {maxDate: new Date(configuration.maxDate) } : null}
          {... configuration.view != "year-day" ? {views: viewFormat(configuration.view) } : {}}
          {... configuration.format != "default" ? {format: configuration.format } : null}
          {... configuration.openTo != "day" ? {openTo: configuration.openTo } : null}
          autoOk={configuration.autoOk}
          disableFuture={configuration.disableFuture}
          animateYearScrolling={configuration.animateYearScrolling}
          {... configuration.horizontal_orientation ? {orientation: "landscape" } : {}}
          {... configuration.outlined ? {inputVariant: "outlined" } : {}}
          helperText={configuration.helperText}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
  );
}


export default function initCalendarKeyboard(){
  return reactShinyInput(
    '.material_calendar_keyboard',
    'reactmaterialpkg.material_calendar_keyboard',
    MaterialCalendarKeyboard
  );
}
