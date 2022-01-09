#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
material_switch_buttonInput <- function(
  inputId,
  label = NULL,
  size = c("normal", "small"),
  color = c("default", "primary", "secondary"),
  checked = FALSE,
  disabled = FALSE,
  labelPlacement = c("end", "start", "top", "bottom")
  ) {
  color <- match.arg(color)
  size <- match.arg(size)
  labelPlacement <- match.arg(labelPlacement)
  reactR::createReactShinyInput(
    inputId,
    "material_switch_button",
    htmltools::htmlDependency(
      name = "material_switch_button-input",
      version = "1.0.0",
      src = "www/reactmaterialpkg/material_action_button",
      package = "shiny.materialpicker",
      script = "material_action_button.js"
    ),
    default = checked,
    configuration = list(
      label = label,
      color = color,
      size = size,
      checked = checked,
      disabled = disabled,
      labelPlacement = labelPlacement
    ),
    htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateMaterial_switch_buttonInput <- function(session, inputId, value, disabled, checked, configuration = NULL) {
  message <- list(value = value)
  configuration <- list(
    checked = checked,
    disabled = disabled
  )
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
