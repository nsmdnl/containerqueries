const cqResizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry
    const elWidth = target.offsetWidth

    const minWBreakpoints = JSON.parse(`[${target.dataset?.cqMinW}]`)

    minWBreakpoints.forEach((bp) => {
      const attrName = `cq-min-${bp}`

      if (elWidth >= bp && !target.hasAttribute(attrName)) {
        target.setAttribute(attrName, "")
      } else if (elWidth < bp) {
        target.removeAttribute(attrName)
      }
    })
  })
})

// Get all elements
const cqEls = Array.from(
  document.querySelectorAll(
    "[data-cq-min-w], [data-cq-max-w], [data-cq-min-h], [data-cq-max-h]"
  )
)

// Initiate
cqEls.forEach((el) => {
  cqResizeObserver.observe(el, { box: "border-box" })
})
