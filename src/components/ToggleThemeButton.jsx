import {} from 'react'
import { Button } from 'antd'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-dark-theme absolute bottom-[30px] left-[20px] flex items-center justify-center text-[1rem]">
      <Button onClick={toggleTheme}>{darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}</Button>
    </div>
  )
}

export default ToggleThemeButton
