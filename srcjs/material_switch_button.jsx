import { reactShinyInput } from 'reactR';
import { Switch, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';


function MaterialSwitch({configuration, value, setValue}) {

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

  const [state, setState] = React.useState({
    statusBtn: configuration.checked
  });

  const switchValue = () => {
    setValue(!value)
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    switchValue();
  };


  return (
   <ThemeProvider theme={theme}>
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            color={configuration.color}
            size={configuration.size}
            checked={state.statusBtn}
            onChange={handleChange}
            disabled={configuration.disabled}
            name="statusBtn"
          />
        }
        label={configuration.label}
        labelPlacement={configuration.labelPlacement}
      />
    </FormGroup>
   </ThemeProvider>
  );
}

export default function initSwitchButton(){
  return reactShinyInput(
    '.material_switch_button',
    'reactmaterialpkg.material_switch_button',
    MaterialSwitch
  );
}
