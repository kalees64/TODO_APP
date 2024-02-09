import { useState } from 'react';
import './App.css';

function App() {

  const [colorValue,setColorValue]  = useState('')
  const [textColor,setTextColor] = useState("white")

  const toCapitalize = (text) =>{
    let firstLetter = text.charAt(0).toUpperCase()
    let remainingText = text.slice(1,text.length)
    return firstLetter+remainingText
  }

  const outColorName = toCapitalize(colorValue)


  function handleColor(){
    textColor === "white" ? setTextColor("black"):
    textColor === "black" ? setTextColor("white"): setTextColor(textColor)
  }

  return (
    <section className='body body-color'>
      <article style={{backgroundColor:colorValue , color: textColor}} className='color-box'>
        {outColorName ? outColorName : "Red"}<br />
        #Hex Value
      </article>
      <form className='color-form'onSubmit={(e)=> {e.preventDefault()}}>
        <input 
        type="text" 
        placeholder='Enter Color Name'
        value={colorValue}
        onChange={(e)=> setColorValue(e.target.value)}
        />
      </form>
      <button
      type='button'
      className='color-btn'
      onClick={handleColor}
      >Toggle Color</button>
    </section>
  );
}

export default App;
