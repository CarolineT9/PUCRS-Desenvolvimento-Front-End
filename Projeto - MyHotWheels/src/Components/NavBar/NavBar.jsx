import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import '../NavBar/NavBar.css'
function NavBar() {
  return(
    <nav className=' bgnav navbar  d-flex justify-content-around'>
      <Link className='link' to='/'>Home</Link>
      <Link  className='link' to='/about'>Sobre</Link>
      <Link  className='link' to='/cars'>Carros</Link>
      <Link  className='link' to='/add-car'>Adicionar Carros</Link>
    </nav>
  )
    
 
    
  }
  
  
  
  export default NavBar;