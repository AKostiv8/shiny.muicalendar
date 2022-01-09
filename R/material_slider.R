#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_sliderInput <- function(
  inputId,
  value,
  default = value,
  step,
  min,
  max,
  track = TRUE,
  disabled = FALSE,
  vertical = FALSE,
  aria_labelled_by = c("continuous-slider", "discrete-slider-small-steps", "discrete-slider", "track-false-range-slider"),
  marks = FALSE
  ) {
  if(!is.numeric(value)) stop("The value must be numeric!")
  if(!is.numeric(step)) stop("The step value must be numeric!")
  if(!is.numeric(min)) stop("The min value must be numeric!")
  if(!is.numeric(max)) stop("The max value must be numeric!")

  aria_labelled_by <- match.arg(aria_labelled_by)

  reactR::createReactShinyInput(
    inputId,
    "material_slider",
    htmltools::htmlDependency(
      name = "material_slider-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.muicalendar",
      script = "material_action_button.js"
    ),
    default,
    configuration = list(
      step = step,
      min = min,
      max = max,
      aria_labelled_by = aria_labelled_by,
      marks = marks,
      disabled = disabled,
      track = track,
      vertical = vertical
    ),
    htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_sliderInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
