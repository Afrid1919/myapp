import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//BrowserRouter
// import React from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './Pages/Layout';
// import Home from './Pages/Home';
// import Blogs from './Pages/Blogs';
// import Contact from './Pages/Contact';
// import NoPage from './Pages/NoPage';

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
// const root =
//     ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

//Arrow Function
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Football() {
// const shoot = (a, b) => {
// alert(b.type);
// /*
// 'b' represents the React event that triggered the
// function.
// In this case, the 'click' event
// */
// }
// return (
// <button onClick={(event) => shoot("Goal!", event)}>Take
// the shot!</button>
// );
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

//Conditional rendering
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function MissedGoal() {
// return <h1>MISSED!</h1>;
// }
// function MadeGoal() {
// return <h1>GOAL!</h1>;
// }
// function Goal(props) {
// const isGoal = props.isGoal;
// if (isGoal) {
// return <MadeGoal/>;
// }
// return <MissedGoal/>;
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />);

//Logical Operator && ||
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Garage(props) {
// const cars = props.cars;
// return (
// <>
// <h1>Garage</h1>
// {cars.length > 0 &&
// <h2>
// You have {cars.length} cars in your garage.
// </h2>
// }
// </>
// );
// }
// const cars = ['Ford', 'BMW', 'Audi'];
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);

//Ternary Operator
// import React from 'react';
// import ReactDOM  from 'react-dom/client';
// function MissedGoal(){
//   return<h1>Missed!</h1>
// }
// function MadeGoal(){
//   return <h1>It's Goal!</h1>
// }
// function Goal(props){
//   const isGoal = props.isGoal;
//   return(
//     <>
//       {isGoal ? <MadeGoal/>:<MissedGoal/>}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);

//List
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Car(props){
//   return <li>I am a {props.brand}</li>;
// }
// function Garage(){
//   const cars = ['Ford','BMW','Audi'];
//   return(
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car)=><Car brand ={car}/>)}
//       </ul>
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>)

//Keys
// import React from 'react';
// import ReactDom from 'react-dom/client';
// function Car(props){
//   return <li>I am a { props.brand }</li>;
// }
// function Garage(){
//   const cars=[
//     {id:1,brand:'Ford'},
//     {id:2,brand:'BMW'},
//     {id:3,brand:'TATA'},
//     {id:4,brand:'Honda'}
//   ];
//   return(
//     <>
//       <h1>Who lives in garage?</h1>
//       <ul>
//         {cars.map((car)=> <Car key = {car.id} brand={ car.brand}/>)}
//       </ul>
//     </>
//   );
// }
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//Forms
// import React from 'react';
// import ReactDom from 'react-dom/client';
// function MyForm(){
//   return(
//     <form>
//       <label>Enter your name:-
//       <input type='text'/>
//       </label>
//     </form>
//   );
// }
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Handling forms by using Hooks
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// function MyForm(){
//   const[name,setName]=useState("");
//   return(
//     <form>
//       <label>Enter your name:-
//         <input type="text" value={name} 
//           onChange={(e)=> setName(e.target.value)}
//         />
//       </label>
//     </form>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Submiting forms
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// function MyForm(){
//   const[name,setName]=useState("");
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     alert(`The name you entered was : ${name}`);
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name: 
//         <input
//           type="text"
//           value={name}
//           onChange={(e)=>setName(e.target.value)}
//         />
//       </label>
//       <input type="submit"/>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Multiple input fields
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// function MyForm() {
//   const [inputs, setInputs] = useState({});
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(value => ({ ...value, [name]: value }))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input type="text"
//           name="username"
//           value={inputs.username || ""}
//           oncgange={handleChange}
//         />
//       </label>
//       <label>Enter your age:
//         <input type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

//Text Area
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// function MyForm(){
//   const [textarea,setTextarea]= useState(
//     "The content of a textarea goes in the value attribute"
//   );
//   const handleChange = (event)=>{
//     setTextarea(event.target.value)
//   }
//    return(
//     <form>
//       <textarea value={textarea} onChange={handleChange}/>
//     </form>
//    )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Select
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// function MyForm(){
//   const [myCar, setMyCar]= useState("Volvo");
//   const handleChange = (event)=>{
//     setMyCar(event.target.vallue)
//   }
//    return(
//     <form>
//       <select value={myCar} onChange={handleChange}>
//       <option value="Ford">Ford</option>
//       <option value="Volvo">Volvo</option>
//       <option value="Toyota">Toyota</option>
//       </select>
//     </form>
//    )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//Inline Style
// import React from "react";
// import ReactDOM from 'react-dom/client';
// const Header =()=>{
//   return(
//   <>
//     <h1 style={{color:"red"}}>Hello Style!</h1>
//     <p>Add a style</p>
//   </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)

//import React from 'react';
// import ReactDOM from 'react-dom/client';
// const Header = () => {
//   return (
//     <>
//       <h1 style={{ backgroundColor: "lightblue" }}>Hello
//         Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }
// const root =
//   ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

//Style by JavaScript object
// import React from "react";
// import ReactDOM from 'react-dom/client';
// const Header =()=>{
//   const myStyle = {
//     color:"black",
//     backgroundColor:"red",
//     padding:"10px",
//     fontFamily:"Sans-Serif"
//   };
//    return(
//     <>
//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a style</p>
//     </>
//    );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//
// import Car from './Car.js'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);


//Styling React using sass
// import './My-sass.scss';    
// const Header = () => {
// return (
// <>
// <h1>Hello Style!</h1>
// <p>Add a little style!</p>
// </>
// );
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />); 

//React Hooks
// import { useState } from 'react';
// function FavoriteColor(){
//     const [color, setColor] = useState("red");
//     return(
//         <>
//             <h1>My favorite color is {color}!</h1>
//             <button type='button'
//                 onClick={()=> setColor("blue")}
//                 >Blue</button>
//             <button type='button'
//                 onClick={()=> setColor("red")}
//                 >red</button>
//             <button type='button'
//                 onClick={()=> setColor("pink")}
//                 >pink</button>
//             <button type='button'
//                 onClick={()=> setColor("green")}
//                 >green</button>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor/>);

//Multiple State Hooks
// import { useState } from 'react';
// function Car(){
//     const[brand, setBrand]=useState("Ford");
//     const[model, setModel]=useState("Mustang");
//     const[year, setYear]=useState("1964");
//     const[color, setColor]=useState("Red");
//     return(
//         <>
//             <h1>My {brand} </h1>
//             <p>
//                 It is a {color} {model} from {year}
//             </p>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//Single hook with object
// import { useState } from "react";
// function Car() {
//     const [car, setCar] = useState({
//         brand: "Tata",
//         model: "Safari",
//         year: "2020",
//         color: "Black"
//     });
//     return (
//         <>
//             <h1>My {car.brand}</h1>
//             <p>
//                 It is a {car.color} {car.model} from {car.year}.
//             </p>
//         </>
//     )
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

//Updating objects and array in state
// import { useState } from 'react';

// function Car(){
//     const[car, setCar]=useState({
//         brand:"Ford",
//         model:"Mustang",
//         year:"1964",
//         color:"red"
//     });

//     const updateColor=()=>{
//         setCar(previousState=>{
//             return{...previousState, color:"Black"}
//         });
//     }

//     return(
//         <>
//             <h1>My {car.brand}</h1>
//             <p>
//                 It is a {car.color} {car.model} from {car.year}
//             </p>

//             <button 
//             type="button"
//             onClick={updateColor}
//             >Black </button>
//         </>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//UseEffect Hook
// import { useState,useEffect } from "react";

// function Timer(){
//     const[count, setCount]= useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=> count+1);
//         },1000);
//     });
//     return <h1>I have rendered {count} times!</h1>;
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>);

// import { useState, useEffect } from 'react';
// function Timer(){
//     const[count, setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=>count+1);
//         },1000);
//     },[]);

//     return <h1>I've rendered {count} times!</h1>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>);

// import { useState, useEffect } from 'react';
// function Counter(){
//     const[count, setCount]=useState(0);
//     const[calculation,setCalculation]=useState(0);
//     useEffect(()=>{
//         setCalculation(()=>count*2);
//     },[count]);

//     return (
//         <>
//             <p>Count: {count}</p>
//             <button onClick={()=>setCount((c)=>c+1)}>+</button>
//             <p>Calculation: {calculation}</p>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter/>);

//useContext hook
// import { useState } from 'react';
// function Component1(){
//     const[user, setUser] = useState("Jesse Hall");
//     return(
//         <>
//             <h1>{'Hello ${user}!'}</h1>
//             <Component2 user={user}/>
//         </>
//     );
// }

// function Component2({user}){
//     return(
//         <>
//             <h1>Component 2</h1>
//             <Component3 user={user}/>
//         </>
//     );
// }
// function Component3({user}){
//     return(
//         <>
//             <h1>Component 3</h1>
//             <Component4 user={user}/>
//         </>
//     );
// }
// function Component4({user}){
//     return(
//         <>
//             <h1>Component 4</h1>
//             <Component5 user={user}/>
//         </>
//     );
// }
// function Component5({user}){
//     return(
//         <>
//             <h1>Component 5</h1>
//             <h2>{`Hello ${user} again!`}</h2>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

// Solution to above method
// import { useState, createContext, useContext } from "react";
// const UserContext = createContext()
// function Component1(){
//     const[user, setUser]=useState("Jesse Hall");
//     return (
//         <UserContext.Provider value={user}>
//             <h1>{'Hello ${user}!'}</h1>
//             <Component2 user={user}/>
//         </UserContext.Provider>
//     );
// }
// function Component2() {
//     return (
//     <>
//     <h1>Component 2</h1>
//     <Component3 />
//     </>
//     );
//     }
//     function Component3() {
//     return (
//     <>
//     <h1>Component 3</h1>
//     <Component4 />
//     </>
//     );
//     }
//     function Component4() {
//     return (
//     <>
//     <h1>Component 4</h1>
//     <Component5 />
//     </>
//     );
//     }
//     function Component5() {
//     const user = useContext(UserContext);
//     return (
//     <>
//     <h1>Component 5</h1>
//     <h2>{`Hello ${user} again!`}</h2>
//     </>
//     );
//     }
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<Component1 />);

// useRef hook
// import { useState, useEffect, useRef } from "react";
// function App1(){
//     const[inputValue, setInputValue]=useState("");
//     const count=useRef(0);
//     useEffect(()=>{
//         count.current=count.current+1;
//     });
//     return(
//         <>
//             <input type="text" value={inputValue}
//             onChange={(e)=>setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App1 />);

// import { useRef } from "react";
// function App2() {
// const inputElement = useRef();
// const focusInput = () => {
// inputElement.current.focus();
// };
// return (
// <>
// <input type="text" ref={inputElement} />
// <button onClick={focusInput}>Focus Input</button>
// </>
// );
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App2 />);

//Tracking state changes by useRef
// import { useState, useEffect, useRef } from 'react';
// function App3(){
//     const[inputValue, setInputValue]=useState("");
//     const previousInputValue=useRef("");
//     useEffect(()=>{
//         previousInputValue.current=inputValue;

//     },[inputValue]);

//     return(
//         <>
//             <input type="text" value={inputValue}
//             onChange={(e)=>setInputValue(e.target.value)}
//             />
//             <h1>Current value: {inputValue}</h1>
//             <h1>Previous Value:{previousInputValue.current}</h1>
//         </>
//     );
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App3 />);

//useReducer hook
// import { useReducer } from 'react';
// const initialTodos=[
//     {
//         id:1,
//         title:"Todo 1",
//         complete: false,
//     },
//     {
//         id:2,
//         title:"Todo 2",
//         complete: false,
//     },
// ];
// const reducer = (state, action)=>{
//     switch(action.type) {
//         case "COMPLETE":
//             return state.map((todo)=>{
//                 if(todo.id===action.id){
//                     return {...todo, complete: !todo.complete};
//                 }
//                 else{
//                     return todo;
//                 }
//         });
//         default:
//             return state;
//     }
// };
// function Todos(){
//     const [todos, dispatch]=useReducer(reducer, initialTodos);
//     const handleComplete=(todo)=>{
//         dispatch({type:"COMPLETE", id:todo.id});
//     };
//     return(
//         <>
//             {todos.map((todo)=>(
//                 <div key={todo.id}>
//                     <label>
//                     <input type="checkbox"
//                     checked={todo.complete}
//                     onChange={()=>handleComplete(todo)}
//                     />
//                      {todo.title}
//                     </label>
//                 </div>
//             ))}
//         </>
//     );
// }
// const root =
// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos />);


//useCallback hook
// import { useState } from 'react';
// import Todos from "./Todos";
// const App5 = ()=>{
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const increment = ()=>{
//         setCount((c)=> c+1);
//     };
//     const addTodos=()=>{
//         setTodos((t)=>[...t, "New Todo"]);
//     };
//     return(
//         <>
//             <Todos todos={todos} addTodos={addTodos}/>
//             <hr/>
//             <div>
//                 Count:{count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App5/>)

//useMemo hook
// import {useState} from "react";
// const App6=()=>{
//     const [count, setCount]=useState(0);
//     const [todos, setTodos]=useState([]);
//     const calculation = expensiveCalculation(count);
//     const increment=()=>{
//         setCount((c)=> c+1);
//     };
//     const addTodo=()=>{
//         setTodos((t)=>[...t, "New Todo"]);
//     };

//     return(
//         <div>
//             <div>
//                 <h2>My Todos</h2>
//                 {todos.map((todo, index)=>{
//                     return <p key={index}>{todo}</p>
//                 })}
//                 <button onClick={addTodo}>addTodo</button>
//             </div>
//             <hr/>
//             <div>
//                 Count:{count}
//                 <button onClick={increment}>+</button>
//                 <h2>Expensive Calculation</h2>
//                 {calculation}
//             </div>
//         </div>
//     );
// };
// const expensiveCalculation=(num)=>{
//     console.log("calculating...");
//     for(let i=0;i<100000000;i++){
//         num += 1;
//     }
//     return num;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App6/>);

// import { useState, useMemo } from "react";
// const App7 = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const calculation = useMemo(() =>
//         expensiveCalculation(count), [count]);
//     const increment = () => {
//         setCount((c) => c + 1);
//     };
//     const addTodo = () => {
//         setTodos((t) => [...t, "New Todo"]);
//     };
//     return (
//         <div>
//             <div>
//                 <h2>My Todos</h2>
//                 {todos.map((todo, index) => {
//                     return <p key={index}>{todo}</p>;
//                 })}
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//                 <h2>Expensive Calculation</h2>
//                 {calculation}
//             </div>
//         </div>
//     );
// };
// const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {
//         num += 1;
//     }
//     return num;
// };
// const root =
//     ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App7 />);

    //Coustom hooks ->useFetch
// import { useState, useEffect } from 'react';
// const Home=()=>{
//     const[data, setData]=useState(null);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=> res.json())
//         .then((data)=> setData(data));
//     }, []);

//     return(
//         <>
//             {data &&
//             data.map((item)=>{
//                 return <p key={item.id}>{item.id}</p>;
//             })}
//         </>
//     );
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home/>);