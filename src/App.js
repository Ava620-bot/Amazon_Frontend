
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

import Checkout from './components/Checkout';
import Address from './components/Address';
import Payment from './components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';

const promise = loadStripe(
  'pk_test_51J8IBqSGHtTqz56oqV1Y6GzReND4YVpARNnl7vSdkfz4YvdRxMtEB6iK8LbdWFcY8HzTBTJXSS5RV9cXzFL2m2CY00RxJ6NUNM'
)
function App() {
  
  return (
    <Router>

       <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/addproduct' element={<AddProduct />}/>
          <Route path='/address' element={<Address />}/>
          <Route path='/payment' element={
          <Elements stripe={promise}>
             <Payment />
          </Elements>}/>
          
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
       </Container>
    </Router>
    
  );

 
}
const Container = styled.div`
width: 100vw;
height: 100vh;
overflow-y:scroll;
&::-webkit-scrollbar{
  display: none;
}

`;

export default App;
