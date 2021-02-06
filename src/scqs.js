const cqResizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry
    const elWidth = target.offsetWidth

    const minWBreakpoints = JSON.parse(`[${target.dataset?.cqMinW}]`)

    const conditions = minWBreakpoints.forEach((breakpoint) => {
      const attrName = `cq-min-w-${breakpoint}`

      if (elWidth >= breakpoint && !target.hasAttribute(attrName)) {
        target.setAttribute(attrName, "")
      } else if (elWidth < breakpoint) {
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
