import {} from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './pages/Dashboard_Layout/DashboardLayout'
import ManagerUser from './pages/Manager_Users/ManagerUsers'
import NotFoundPage from './pages/NotFoundPage.jsx/NotFoundPage'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard/manage-users" element={<ManagerUser />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
