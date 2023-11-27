import { useNavigate } from 'react-router-dom'

import { TheButton } from '@/components'

export const Error = () => {
  const navigate = useNavigate()

  const onBeforeNavigate = () => navigate('/')

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-x-6 bg-slate-900">
      <h1 className="text-5xl text-white">에러가 발생했습니다</h1>
      <TheButton variant="contained" onClick={onBeforeNavigate}>
        뒤로가기
      </TheButton>
    </div>
  )
}
