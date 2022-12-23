
import axios from '../axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function Login() {
  const[username, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/user/login", { username, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));
  };

  // const userLogin = (e)=>{
  //   e.preventDefault();
  //   axios.post('/user/login', {
  //     username, 
  //     password
  //   }).then(()=>{
  //     setUserName('')
  //     setPassword('')
  //   }).catch((error)=>{
  //        alert(error.message);
  //   });
  //   navigate('/');
  // }

  

  return (
    <Container>
      <Logo onClick={e => navigate('/')}>
        <img src="./download.png" alt="" />
      </Logo>
      <FormContainer>
        <h3>Sign-In</h3>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='Email' onChange={e => setUserName(e.target.value)} value={username}/>
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
        </InputContainer>
        <LoginButton onClick={login}>
            Login
        </LoginButton>

        <InfoText>
            By continuing you are agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Policy Notice</span>
        </InfoText>

        
      </FormContainer>
      <SignUpButton onClick={e => navigate('/signup')}>
            Create Account with Amazon
        </SignUpButton>
    </Container>

  )

}
const Container = styled.div`
width: 100%;
min-width: 450px;
height: fit-contain;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Logo = styled.div`
width: 120px;
margin-bottom: 20px;
img{
    width:100%;
}
`;

const FormContainer = styled.form`
border:1px solid lightgray;
width:40%;
height:400px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
padding: 15px;
border-radius: 3px;

h3{
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
}
`;

const InputContainer = styled.div`
width: 100%;
padding: 15px;

p{
    font-size: 14px;
    font-weight: 600;    
}

input{
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover{
        border: 1px solid orange;
    }
}
`;

const LoginButton = styled.button`
width: 70%;
height: 35px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top:30px;
transition: box-shadow .2s;

&:hover{
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
`;

const InfoText = styled.p`
font-size: 14px;
width: 100%;
word-wrap: normal;
word-break: normal;
margin-top: 20px;
margin-left:2px;

span{
    color: #426bc0;
    cursor: pointer;
}
`;

const SignUpButton = styled.button`
width: 40%;
height: 35px;
font-size: 12px;
margin-top: 20px;

&:hover{
    cursor:pointer;
    background-color: #dfdfdf;
    border: 1px solid gray;
}
`;
export default Login;