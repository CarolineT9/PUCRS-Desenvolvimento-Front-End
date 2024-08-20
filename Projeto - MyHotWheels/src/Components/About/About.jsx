import '../About/About.css'

function About() {
    return(
      <div className="content text-center text-decoration-none">  
       
      <p>Esta é uma aplicação para um CRUD de carros HotWheels, desevolvido durante a disciplina de Desenvolvimento de Sistemas Frontend.</p>
      <h5>O que é possível fazer nessa aplicação?</h5>
      <p>Essa aplicação web contém 3 seções:</p>
      <ul className='list-group'>
        <li className='list-group-item'>Home - Página de boas-vindas</li>
        <li className='list-group-item'>Sobre - Página de apresentação do Projeto</li>
        <li className='list-group-item'>Carros - Seção onde é possível cadastrar excluir e editar carros. </li>
      </ul>
      </div>
  
    )
    
 
    
  }
  
  
  
  export default About;