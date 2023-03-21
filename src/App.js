import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 


  return (
    <div className="App">
     {/* <Counter></Counter> */}
     <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser (){
  const [users,setUsers]=useState([]);
  // useEffect(() =>{},[])
  useEffect( () => {


    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))


  }, [])
  
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }

    </div>
  )
}

function User(props){
  return (
    <div style={{border:'2px solid red'}}>
      <h3>Name: {props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}




function Counter(){

  const[count,setCount]=useState(55);
  const increseCount = () => setCount(count + 1);
  const decreseCount = () => setCount(count - 1);
 


  // const[count,setCount]=useState(55);
  // const increseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }




  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
    </div>
  )
}




/*

 const products =[
  { name:'laptop',price:153000},
  { name:'phone',price:93000},
  { name:'watch',price:33000},
  { name:'tablet',price:50000},
];


*/





/*
// {
//   products.map(product => <Product name={product.name}  price={product.price} ></Product>)
// }


// <Product name="laptop" price="45000"></Product>
// <Product name="phone" price="75000"></Product>
// <Product name="watch" price="25000"></Product>
*/
function Product(props){
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>


    </div>
  )
}

export default App;
