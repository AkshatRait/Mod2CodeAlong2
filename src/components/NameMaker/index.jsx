import {useState} from 'react'
import "./index.css"
const NameMaker = () => {

    const [color,setColor] = useState('blue');
    const [count, setCount] = useState(0);
    const [highScore, setHighScore] = useState(25);
    const [newName, setNewName] = useState('');


    const handleChange = (e) =>{
        //e.target.value is what the input would be with this change.
        //if the input right now says "happy" and the user types "y"
        //e.target.value is "happy"
        setNewName(e.target.value) 
    }
  return (
    <div>
    <div>
        <button onClick = {()=>setColor('blue')}>Blue</button>
        <button onClick = {()=>setColor('red')}>Red</button>
        <button onClick = {()=> setColor('green')}>Green</button>
    </div>
        <p className = {color}>The current color is {color}</p>

        <p>The count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Add 1</button>
        <button onClick={()=>setCount(count-1)}>Subtract 1</button>
        <button onClick={()=>setHighScore(0) && setCount(0)}>Reset</button>

        <p>The high score is {highScore} clicks!</p>
        {count > highScore ? setHighScore(count) :null }

        <input value = {newName} onChange = {(e)=>handleChange(e)} />
    </div>
  )
}

export default NameMaker