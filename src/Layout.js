import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
      <ul>
      <li><Link to= "/Inicio">Inicio</Link></li>
      <li><Link to= "/Productos">Productos</Link></li>
      <li><Link to= "/Promociones">Promociones</Link></li>
      <li><Link to= "/Conocenos">Conocenos</Link></li>
      </ul>
      </nav>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Layout;
