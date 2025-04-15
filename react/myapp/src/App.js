import logo from './logo.svg';
import './App.css';
import Pr1 from './Pr1';
import Pr2 from './Pr2';

function App() {
  // const date = new Date().toLocaleDateString(); EAXMPLE 1
  // const time = new Date().toLocaleTimeString();
  const xyz="computer";
  return (
    <div>
      {/* Example1 <h1 style={{color:"blue",fontStyle:"italic",fontSize:"15px",textAlign:"center"}}> Task 1 </h1>
      <p style={{textAlign:"center"}}> List Of Fruits </p>
      <ol>
          <li style={{textAlign:"center"}}> Apple </li>
          <li style={{textAlign:"center"}}> Banana </li>
          <li style={{textAlign:"center"}}> Mango </li>
          <li style={{textAlign:"center"}}> Orange </li>
          <li style={{textAlign:"center"}}> Grapes </li>
      </ol>
      <h6 style={{color:"red",textAlign:"center"}}> Today's Date is : {date} </h6>
      <h6 style={{color:"blue",textAlign:"center"}}> Current Time is : {time} </h6> */}
      {/* <Pr1/> */}
      <Pr2 Name={xyz} Price="70000"/>
      <Pr2 Name="Laptop" Price="50000"/>  
    </div>
  );
}

export default App;
