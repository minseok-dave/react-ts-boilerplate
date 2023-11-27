import { HTMLAttributes, forwardRef } from 'react'

import { ReactPortal } from './react-potal'

interface IBackdrop extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default flase
   * Backdrop 렌더링 시 body 태그의 overflow: 'hidden'을 비활성화 시킴
   */
  disableOverflowHidden?: boolean
}

/**
 * 모달의 뒷 배경에 사용하기 위한 용도
 */
export const BackDrop = forwardRef<HTMLDivElement, IBackdrop>(
  ({ disableOverflowHidden = false, ...rest }, ref) => {
    return (
      <ReactPortal disableOverflowHidden={disableOverflowHidden}>
        <div
          ref={ref}
          className="fixed inset-0 z-backdrop flex h-screen w-screen items-center justify-center bg-black/50"
          {...rest}
        />
      </ReactPortal>
    )
  },
)

BackDrop.displayName = 'BackDrop'
