#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_action_buttonInput <- function(
  inputId,
  label,
  variant = TRUE,
  outline = TRUE,
  color = c("default", "primary", "secondary"),
  size = c("medium", "small", "large"),
  disabled = FALSE
  ) {
  color <- match.arg(color)
  size <- match.arg(size)

  reactR::createReactShinyInput(
    inputId,
    "material_action_button",
    htmltools::htmlDependency(
      name = "material_action_button-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.muicalendar",
      script = "material_action_button.js"
    ),
    default = NULL,
    configuration = list(
      label = label,
      variant = variant,
      outline = outline,
      color = color,
      disabled = disabled,
      size = size
    ),
    htmltools::tags$span
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_action_buttonInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
