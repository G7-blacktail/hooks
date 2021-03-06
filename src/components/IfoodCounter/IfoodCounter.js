import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {

  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

  useEffect(() => {
    console.log(`o estilo do botao é:  ${buttonStyle}`)
  },[buttonStyle])


  function down(){

    if(value <= 1){
      //mudar o CSS
      setButtonStyle("counter-button-minus-desative")
    }

    if(value > 0){
      setValue(value-1)
    }
  }

  function up(){
    setValue(value+1)
    setButtonStyle("counter-button-minus-active")
  }
  
  return (

         <div class="counter-wrapper">
           <button className={buttonStyle} 
           onClick={down}>
             -
           </button>
            <p>{value}</p>
           <button className='counter-button-plus-active'
           onClick={up}>
             +
           </button>

           <button id="moeda">12,00</button>
         </div>

  )
}


