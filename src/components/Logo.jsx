import {} from 'react'
import { FireFilled } from '@ant-design/icons'

const Logo = () => {
  return (
    <div className="logo flex items-center justify-center text-white p-[10px]">
      <div className="flex items-center justify-center w-10 h-10 text-2xl logo-icon rounded-[50%] bg-[rgba(28,17,41,0.88)]">
        <FireFilled />
      </div>
    </div>
  )
}

export default Logo
