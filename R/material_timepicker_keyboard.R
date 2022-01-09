#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_timepicker_keyboardInput <- function(
  inputId,
  value = NULL,
  label = NULL,
  ampm = FALSE,
  autoOk = TRUE,
  variant = c("default", "static", "inline"),
  showTodayButton = TRUE,
  placeholder = NULL,
  todayLabel = "now",
  horizontal_orientation = FALSE,
  minutesStep = 1,
  views = c("hm", "hms", "ms"),
  openTo = c("hours", "minutes", "seconds"),
  outlined = FALSE,
  mask = NULL,
  format = NULL
  ) {

  variant <- match.arg(variant)
  openTo <- match.arg(openTo)
  views <- match.arg(views)

  if (is.null(value)) value <- ""

  reactR::createReactShinyInput(
    inputId,
    "material_timepicker_keyboard",
    htmltools::htmlDependency(
      name = "material_timepicker_keyboard-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.muicalendar",
      script = "material_action_button.js"
    ),
    default = lubridate::ymd_hms(value),
    configuration = list(
      value = lubridate::ymd_hms(value),
      label = label,
      ampm = ampm,
      autoOk = autoOk,
      variant = variant,
      showTodayButton = showTodayButton,
      todayLabel = todayLabel,
      minutesStep = minutesStep,
      openTo = openTo,
      horizontal_orientation = horizontal_orientation,
      views = views,
      outlined = outlined,
      placeholder = placeholder,
      mask = mask,
      format = format
    ),
    htmltools::tags$span
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_timepicker_keyboardInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
