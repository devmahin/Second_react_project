import "./App.css";
import PlayersHook from "./players";
import HadelCount from "./players";
import Users from "./users";

function App() {

  function click1(){
    console.log("Click 1")
  }
  function click2(){
    alert("click 2")
  }
  function addition(num){
    alert(num + 2)
  }


  return (
    <>
      <h1>React devlopers</h1>
        <Users></Users>
      <PlayersHook></PlayersHook>
    

      <button onClick={click1}>
        click 1
      </button>

      <button onClick={click2}>
      click2
      </button>
      {/* ternary condition button  */}
      <button onClick={() => {
        alert("click 2")
      }}>
        Click 3
      </button>



      {/* addition button 
       */}

       <button onClick={() => {
        addition(2)
       }}>Addition</button>
    </>
  );
}

export default App;
