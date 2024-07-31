
import './App.css';

function App() {
  // const isLoggedIn = true;

  //let greetings;

  // if(isLoggedIn){
  //   greetings = <h1>Welcome, user!</h1>
  // }else{
  //   greetings = <h1>Plase, log in</h1>
  // }
  // return(
  //   <div>
  //     {greetings}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <div>
  //       <h1>Welcome, user!</h1>
  //     </div>     
  //   )
  //   }
  //   else{
  //     return (
  //       <div>
  //         <h1>Plase, log in</h1>
  //       </div>
  //     )
  //   }

  // const userName = 'Ariovaldo'

  // return(
  //   <div>
  //     {
  //       isLoggedIn && (<>
  //         <h1>Hi, {userName}!</h1>
  //         <p>Welcome to your system</p>
  //       </>)
  //     }
  //   </div>
  // )


 
  const fruits = ['Banana', 'Maça', 'Laranja', 'Uva', 'Morango']
  
  const showFruits = true

  return(
    <div>
      <h1>Lista de frutas</h1>
      {
        showFruits && (
          <ul>
            {fruits.map((fruit, index)=>(
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}



export default App;
