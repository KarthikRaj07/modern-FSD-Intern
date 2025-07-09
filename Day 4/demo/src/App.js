import Counter from './components/Counter.jsx';
import React, { useEffect } from 'react';
function App() {
   const [val, setVal] = React.useState(0);
  let handleIncrement=()=>{
    setVal(val+1)
    console.log(val);
  }

  let handleDecrement=()=>{
    setVal(val-1)
    console.log(val);
  }
  useEffect(()=>{
if(val<0){
  let timer=setTimeout(()=>{
    setVal(0);
  },5000);

  return ()=>{
    clearTimeout(timer);
  }
}
  },[val]);
  return (
    <div className="App">
      
    <h1>Counter Application</h1>
    <Counter 
    val={val}
    handleIncrement={handleIncrement}
    handleDecrement={handleDecrement}
    ></Counter>
    </div>
  );
}

export default App;