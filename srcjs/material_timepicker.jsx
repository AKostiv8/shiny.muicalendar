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

function MaterialTimePicker({configuration, value, setValue}) {

  const theme = createTheme({
  palette: {
    primary: {
      main: configuration.primary_color,
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
       <TimePicker
          showTodayButton={configuration.showTodayButton}
          ampm={configuration.ampm}
          {... configuration.variant != "default" ? {variant: configuration.variant } : {}}
          todayLabel={configuration.todayLabel}
          label={configuration.label}
          autoOk={configuration.autoOk}
          minutesStep={configuration.minutesStep}
          views={viewFormat(configuration.views)}
          {... configuration.format != "default" ? {format: configuration.format } : null}
          {... configuration.horizontal_orientation ? {orientation: "landscape" } : {}}
          {... configuration.outlined ? {inputVariant: "outlined" } : null}
          openTo={configuration.openTo}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
  );
}


export default function initTimePicker(){
  return reactShinyInput(
    '.material_timepicker',
    'reactmaterialpkg.material_timepicker',
    MaterialTimePicker
  );
}
