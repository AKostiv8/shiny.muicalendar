devtools::document()
devtools::load_all()
library(shiny)
library(shiny.muicalendar)

ui <- div(
  # material_action_buttonInput(inputId = "btn",
  #                             label = "Test button",
  #                             size = "large",
  #                             color = "primary",
  #                             outline = FALSE),
  # material_switch_buttonInput("Test", label = "Test_one", color = "primary", checked = TRUE),
  # material_switch_buttonInput("Test2", color = "secondary", disabled = TRUE),
  # material_sliderInput("Slider_test_id", aria_labelled_by = "discrete-slider",
  #                      value = c(10, 20), step = 1, marks = TRUE, vertical = TRUE,
  #                      min = 0, max = 100),
  material_calendarInput("calendar_test_id",
                         value = NULL,
                         label = 'Label Text', view = "year-month-day",
                         variant = "inline", horizontal_orientation = FALSE,
                         outlined = FALSE, helperText = "Helper text example - optional",
                         disableToolbar = FALSE, minDate = '2021/10/22', maxDate = '2021/11/20'
                        ),
  material_calendar_keyboardInput("calendarkeyboard_test_id",
                         value = NULL,
                         label = 'Label Text', view = "year-day", outlined = TRUE,
                         variant = "inline", helperText = "With keyboard",format = "yyyy/MM/dd",
                         minDate = '2021/10/22', maxDate = '2021/11/20'
  ),
  material_timepickerInput('time_test_id', value = Sys.time(), ampm = FALSE, autoOk = FALSE,
                           label = "24 hours", showTodayButton = FALSE,
                           openTo = "minutes", views = "hms", outlined = TRUE),
  material_timepicker_keyboardInput("timekeyboard_test_id", placeholder = "08:00 AM",
                                    mask="__:__ _M", format = "HH:mm:ss")


)

server <- function(input, output, session) {

  observeEvent(input$Test, {
    print(input$Test)
  })

  observeEvent(input$Slider_test_id, {
    print(input$Slider_test_id)
  })

  observeEvent(input$standardslider, {
    print(input$standardslider)
  })

  observeEvent(input$calendar_test_id, {
    print(input$calendar_test_id)
  })

  observeEvent(input$calendarkeyboard_test_id, {
    print(input$calendarkeyboard_test_id)
  })

  observeEvent(input$time_test_id, {
    print(input$time_test_id)
  })

  observeEvent(input$timekeyboard_test_id, {
    print(input$timekeyboard_test_id)
  })

}

shinyApp(ui, server)


# path <- file.path("~/Documents", "reactmaterialpkg")
# usethis::create_package(path, rstudio = TRUE)
# reactR::scaffoldReactShinyInput(
#   "material_switch_button",
#   list(
#     "@material-ui/core" = "^4.12.3"
#   )
# )

# reactR::scaffoldReactShinyInput(
#   "material_slider",
#   list(
#     "@material-ui/core" = "^4.12.3"
#   )
# )


# reactR::scaffoldReactShinyInput(
#   "material_timepicker_keyboard",
#   list(
#     "@material-ui/core" = "^4.12.3",
#     "@date-io/date-fns" = "^2.11.0"
#   )
# )

# reactR::scaffoldReactWidget("Tabs", list("@material-ui/core" = "^4.12.3"))


# <KeyboardDatePicker
# disableToolbar
# variant="inline"
# format="MM/dd/yyyy"
# margin="normal"
# id="date-picker-inline"
# label="Date picker inline"
# value={selectedDate}
# onChange={handleDateChange}
# KeyboardButtonProps={{
#   'aria-label': 'change date',
# }}
# />


# <KeyboardTimePicker
# margin="normal"
# id="time-picker"
# label="Time picker"
# value={selectedDate}
# onChange={handleDateChange}
# KeyboardButtonProps={{
#   'aria-label': 'change time',
# }}
# />
