import React from "react";
import axios from "axios";

const App = () => {
  const [firstNumber, setfirstNumber] = React.useState(0);
  const [secondNumber, setsecondNumber] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  const [multi, setmulti] = React.useState(0);

  const add = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3002/sum`, { firstNumber, secondNumber })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSum(res.data);
      });
  };

 const multiply = (e) => {
   e.preventDefault();

   axios
     .post(`http://localhost:3002/multi`, { firstNumber, secondNumber })
     .then((res) => {
       console.log(res);
       console.log(res.data);
       setmulti(res.data);
     });
 };

  return (
    <>
      <div>Calculator</div>
      <input
        type="text"
        placeholder="first number"
        name="firstNumber"
        value={firstNumber}
        onChange={(e) => setfirstNumber(+e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="second number"
        name="secondNumber"
        value={secondNumber}
        onChange={(e) => setsecondNumber(+e.target.value)}
      />
      <br />
      <p>Sum is : {sum}</p>
      <button onClick={add}>Add</button> <br />
      <p>Multi is : {multi}</p>
      <button onClick={multiply}>multi</button>
    </>
  );
};

export default App;
