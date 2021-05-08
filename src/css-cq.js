if (typeof window !== "undefined") {
  // 👀 OBSERVERS:

  // ResizeObserver on elements with container-queries
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

  // MutationObserver on childList and subtree of the body
  const cqMutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      // Select all elements with container queries
      const cqEls = Array.from(
        document.querySelectorAll(
          "[data-cq-min-w],[data-cq-max-w],[data-cq-min-h],[data-cq-max-h]"
        )
      )

      // Initiate ResizeObserver for each element
      cqEls.forEach((el) => {
        cqResizeObserver.observe(el, { box: "border-box" })
      })
    })
  })

  // 🛠️ FUNCTIONS:

  // Create an array with breakpoints from the value of the data-attribute
  const parseBreakpoints = (breakpoints) => JSON.parse(`[${breakpoints}]`)

  // When triggered, toggle matching cq-attribute
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

  // 🚀  LET THE ACTION BEGIN:

  // Initiate MutationObserver
  cqMutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
