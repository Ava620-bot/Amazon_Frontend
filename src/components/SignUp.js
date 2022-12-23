import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../axios';


function SignUp() {
  const navigate = useNavigate();
 
  const[name, setName] = useState('');
  const[username, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/user/signup", { name, username, password, confirmPassword })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };
  return (
    <Container>
      <Logo onClick={e => navigate('/')}>
        <img src="./download.png" alt="" />
      </Logo>
      <FormContainer>

        <h3>Welcome to Sign-Up Page</h3>
        <InputContainer>
          <p>Name</p>
          <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} value={name}/>
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='Email' onChange={e => setUserName(e.target.value)} value={username}/>
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
        </InputContainer>
        <InputContainer>
          <p>Confirm Password</p>
          <input type="password" placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        </InputContainer>
        <SignUpButton onClick={signup}>
            Create Account with Amazon
        </SignUpButton>

        <InfoText>
            By continuing you are agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Policy Notice</span>
        </InfoText>

        
      </FormContainer>
      <RegisterButton onClick={e => navigate('/login')}>
        Back To Login
      </RegisterButton>
    </Container>

  )

}
const Container = styled.div`
width: 100%;
min-width: 500px;
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
height:fit-content;
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

const RegisterButton = styled.button`
width: 30%;
height: 33px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 2px;
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
width: 70%;
height: 33px;
font-size: 12px;
margin-top: 20px;
${'' /* margin-right: 15px; */}

&:hover{
    cursor:pointer;
    background-color: #dfdfdf;
    border: 1px solid gray;
    border-radius: 2px;
}
`;
export default SignUp;