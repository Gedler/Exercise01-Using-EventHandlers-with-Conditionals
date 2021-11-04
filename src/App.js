import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import react from 'react'; 




function App() {


  // Create 2 buttons ( A & B). When A is clicked, it's text becomes bold & button B is not bold. 


  let [buttonA, setbuttonA] = useState("Button A")
  let [timesClicked, setTimesClicked] = useState(0)

  
  let [buttonB, setbuttonB] = useState(<strong>Button B</strong>)



  function handleA() { 

    setTimesClicked(timesClicked++) // consider ();
    
  



    // if timesClicked is not even. The first click will indicate that is odd because it starts from 0.
    if (timesClicked % 2 !== 0 ) { 
      setbuttonA(<strong>Button A</strong>) 
      setbuttonB("Button B")
      setTimesClicked(timesClicked++) 
    }


    
    // if timesClicked is even.
      else { // if even
        setbuttonA("Button A")
        setbuttonB(<strong>Button B</strong>)
        setTimesClicked(timesClicked++)
      }

      

      console.log("Amount of times clicked:", timesClicked)
  

    }

return (
<div>
    <span>
  <button onClick= {()=> handleA()}>{buttonA}</button> 
  <button>{buttonB}</button>
  </span>
  <span>
    
  </span>
</div>

);
}
export default App;
