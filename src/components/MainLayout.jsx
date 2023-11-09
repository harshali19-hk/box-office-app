import { Outlet } from "react-router-dom"
import Navs from "./Navs"
const MainLayout = () => {
  return (
    <div>
        <Navs />
      <Outlet />
    </div>
  )
}

export default MainLayout
