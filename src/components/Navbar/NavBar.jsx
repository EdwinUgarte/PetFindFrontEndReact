import './NavBar.css';
import {Link} from 'react-router-dom';


function Nav() {


  return (
    <>
      <div className='nav'>
      <Link className="navbar-brand" to="/">Pet Search</Link>
      <Link className="navbar-brand" to="/agregar">Agregar +</Link>
      </div>
    </>  
  )
}

export default Nav
