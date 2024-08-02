import NavLink from "./NavLink/NavLink";

function MyHeader(props) {
  const myLinks = ['Notícias', 'Esportes', 'Clima']
  return (
    <header>
      <h1 >{props.title}</h1>
      <NavLink links={myLinks}/>

    </header>
  );
}

export default MyHeader;
