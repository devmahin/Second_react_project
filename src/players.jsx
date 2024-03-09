import { useState } from "react"

export default function PlayersHook(){
    let [team , setTeam] = useState(11);
    const styles ={
        border : "2px solid red",
        padding : "20px",
        borderRadius : "20px"
    }

        function addingPlayers(){
                 team = team + 1;
                setTeam(team)
        }
        function decremtPlayers(){
            team = team - 1;
            setTeam(team)
        }

    return (
        <div style={styles}>
            <h1>Players : {team}</h1>
            <button onClick={addingPlayers}>Players added</button>
            <button onClick={decremtPlayers}>Players decrement</button>
        </div>
    )
}