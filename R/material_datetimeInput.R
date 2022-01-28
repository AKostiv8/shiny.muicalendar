#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_datetimeInputInput <- function(
  inputId,
  value = NULL,
  label = NULL,
  minDate = NULL,
  maxDate = NULL,
  primary_color = '#353535',
  secondary_color = '#ff9900',
  autoOk = TRUE,
  keyboardControl = FALSE,
  outlined = FALSE,
  ampm = FALSE,
  disableFuture = FALSE,
  disablePast = FALSE,
  helperText = NULL,
  hideTabs = FALSE,
  variant = c("default", "static", "inline")
  ) {

  variant <- match.arg(variant)

  if (is.null(minDate)) minDate <- ""
  if (is.null(maxDate)) maxDate <- ""

  reactR::createReactShinyInput(
    inputId,
    "material_datetimeInput",
    htmltools::htmlDependency(
      name = "material_datetimeInput-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.muicalendar",
      script = "material_datetimeInput.js"
    ),
    default = if(is.null(value)) { NULL } else { lubridate::ymd_hms(value) },
    configuration = list(
      value = if(is.null(value)) { NULL } else { lubridate::ymd_hms(value) },
      label = label,
      variant = variant,
      minDate = lubridate::ymd(minDate),
      maxDate = lubridate::ymd(maxDate),
      autoOk = autoOk,
      keyboardControl = keyboardControl,
      outlined = outlined,
      ampm = ampm,
      disableFuture = disableFuture,
      disablePast = disablePast,
      helperText = helperText,
      hideTabs = hideTabs,
      primary_color = primary_color,
      secondary_color = secondary_color
    ),
    htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_datetimeInputInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
