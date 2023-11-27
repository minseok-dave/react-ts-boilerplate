import { BlocksScale, NinetyRingWithBg } from 'react-svg-spinners'

import { BackDrop } from '..'

type TLoader = {
  type?: 'fetching' | 'fallback'
}

/**
 * 페이지를 이동하거나 비동기 호출을 할 때, 데이터를 불러오는 중이라고 사용자에게 알려주는 용도
 */
export const Loader = ({ type = 'fetching' }: TLoader) => {
  if (type === 'fallback') {
    return (
      <div className="flex h-screen items-center justify-center">
        <BlocksScale color="skyBlue" width={40} height={40} />
      </div>
    )
  }

  return (
    <BackDrop>
      <NinetyRingWithBg color="blue" />
    </BackDrop>
  )
}
