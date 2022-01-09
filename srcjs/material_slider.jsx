import { reactShinyInput } from 'reactR';
import { Slider } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';


const TextInput = ({ configuration, value, setValue }) => {
  return <input type='text' value={value} onChange={e => setValue(e.target.value)}/>;
};



function MaterialSlider({configuration, value, setValue}) {

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


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     <ThemeProvider theme={theme}>
        <Slider
          marks={configuration.marks}
          defaultValue={value}
          track={configuration.track}
          aria-labelledby={configuration.aria_labelled_by}
          step={configuration.step}
          min={configuration.min}
          max={configuration.max}
          onChangeCommitted={handleChange}
          disabled={configuration.disabled}
          valueLabelDisplay="auto"
          {... configuration.vertical ? {orientation: "vertical" } : null}
        />
     </ThemeProvider>
  );
}


export default function initSlider(){
  return reactShinyInput(
    '.material_slider',
    'reactmaterialpkg.material_slider',
    MaterialSlider
  );
}
