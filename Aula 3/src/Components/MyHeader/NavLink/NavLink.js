function NavLink(props) {
  return(
     <nav>
      <ul>
        {props.links.map(
          l=>
          <li><a href="#">{l}</a></li>
        )}
        
      </ul>
    </nav>
  )
   
}

export default NavLink;
