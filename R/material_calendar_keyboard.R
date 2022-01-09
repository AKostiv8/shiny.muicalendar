#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_calendar_keyboardInput <- function(
  inputId,
  value = NULL,
  label = NULL,
  minDate = NULL,
  maxDate = NULL,
  format = "default",
  disableToolbar = FALSE,
  view = c("year-day", "year-month-day", "year", "year-month"),
  helperText = NULL,
  variant = c("default", "static", "inline"),
  autoOk = TRUE,
  openTo = c("day", "month", "year"),
  animateYearScrolling = TRUE,
  disableFuture = FALSE,
  horizontal_orientation = FALSE,
  outlined = FALSE
  ) {

  variant <- match.arg(variant)
  openTo <- match.arg(openTo)
  view <- match.arg(view)

  if (is.null(value)) value <- ""
  if (is.null(minDate)) minDate <- ""
  if (is.null(maxDate)) maxDate <- ""

  reactR::createReactShinyInput(
    inputId,
    "material_calendar_keyboard",
    htmltools::htmlDependency(
      name = "material_calendar_keyboard-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.materialpicker",
      script = "material_action_button.js"
    ),
    default = lubridate::ymd(value),
    configuration = list(
      value = lubridate::ymd(value),
      label = label,
      minDate = lubridate::ymd(minDate),
      maxDate = lubridate::ymd(maxDate),
      format = format,
      variant = variant,
      autoOk = autoOk,
      disableToolbar = disableToolbar,
      view = view,
      openTo = openTo,
      animateYearScrolling = animateYearScrolling,
      disableFuture = disableFuture,
      horizontal_orientation = horizontal_orientation,
      outlined = outlined,
      helperText = helperText
    ),
    htmltools::tags$span
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_calendar_keyboardInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
