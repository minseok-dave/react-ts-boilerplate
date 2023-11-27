import { ReactNode, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type TReactPortal = {
  wrapperId?: string
  disableOverflowHidden?: boolean
  children?: ReactNode
}

type TCreateElementAndAppendToBody = (wrapperId: string) => HTMLDivElement
const createElementAndAppendToBody: TCreateElementAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

/**
 * createPortal
 */
export const ReactPortal = ({
  wrapperId = 'react-portal',
  disableOverflowHidden,
  children,
}: TReactPortal) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)

    let systemCreated = false

    if (!element) {
      systemCreated = true
      element = createElementAndAppendToBody(wrapperId)
    }

    if (!disableOverflowHidden) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }

    setWrapperElement(element)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }

      const wrapper = document.getElementById(wrapperId)

      if (!wrapper) {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) {
    return null
  }

  return createPortal(children, wrapperElement)
}
