// wrapper needed to work with SSR
if (typeof window !== "undefined") {
  const cqResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry
      const { offsetWidth: targetWidth, offsetHeight: targetHeight } = target

      // cq = container query
      const { cqMinW, cqMaxW, cqMinH, cqMaxH } = target.dataset

      // Returns false or attribute value parsed as Array
      const minWidth = cqMinW && parseBreakpoints(cqMinW)
      const maxWidth = cqMaxW && parseBreakpoints(cqMaxW)
      const minHeight = cqMinH && parseBreakpoints(cqMinH)
      const maxHeight = cqMaxH && parseBreakpoints(cqMaxH)

      // min-width
      minWidth?.forEach((breakpoint) =>
        toggleAttribute(
          "min-w",
          breakpoint,
          targetWidth >= breakpoint,
          targetWidth < breakpoint,
          target
        )
      )

      // max-width
      maxWidth?.forEach((breakpoint) =>
        toggleAttribute(
          "max-w",
          breakpoint,
          targetWidth <= breakpoint,
          targetWidth > breakpoint,
          target
        )
      )

      // min-height
      minHeight?.forEach((breakpoint) =>
        toggleAttribute(
          "min-h",
          breakpoint,
          targetHeight >= breakpoint,
          targetHeight < breakpoint,
          target
        )
      )

      // max-height
      maxHeight?.forEach((breakpoint) =>
        toggleAttribute(
          "max-h",
          breakpoint,
          targetHeight <= breakpoint,
          targetHeight > breakpoint,
          target
        )
      )
    })
  })

  const parseBreakpoints = (breakpoints) => JSON.parse(`[${breakpoints}]`)

  // Functions
  function toggleAttribute(
    cqType,
    breakpoint,
    condition,
    counterCondition,
    target
  ) {
    const attrName = `cq-${cqType}-${breakpoint}` // e.g. cq-min-w-500

    if (condition && !target.hasAttribute(attrName)) {
      target.setAttribute(attrName, "")
    } else if (counterCondition) {
      target.removeAttribute(attrName)
    }
  }

  // Get all elements
  const cqEls = Array.from(
    document.querySelectorAll(
      "[data-cq-min-w], [data-cq-max-w], [data-cq-min-h], [data-cq-max-h]"
    )
  )

  // Initiate Resizeobserver
  cqEls.forEach((el) => {
    cqResizeObserver.observe(el, { box: "border-box" })
  })
}
