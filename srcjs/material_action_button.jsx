import { reactShinyInput } from 'reactR';
import { Button } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function MaterialButton({configuration, value, setValue}) {
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

  return (
  <ThemeProvider theme={theme}>
    <Button
      {... configuration.variant ? {variant: configuration.outline ? "contained" : "outlined" } : {}}
      color={configuration.color}
      size={configuration.size}
      disabled={configuration.disabled}
      onClick={() => setValue(value + 1)}
    >
      {configuration.label}
    </Button>
  </ThemeProvider>
  );
}


const TextInput = ({ configuration, value, setValue }) => {
  return <input type='text' value={value} onChange={e => setValue(e.target.value)}/>;
};

export default function initActionButton(){
  return reactShinyInput(
    '.material_action_button',
    'reactmaterialpkg.material_action_button',
    MaterialButton
  );
}
