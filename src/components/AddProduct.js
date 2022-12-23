import axios from '../axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function AddProduct() {
  
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = (e)=>{
    e.preventDefault();
    axios.post('/products/add', {
      title,imageUrl,price,rating
    }).then(()=>{
      setTitle('')
      setImageUrl('')
      setPrice(0)
      setRating(0)


    }).catch((error)=>{
         alert(error.message);
    });
    navigate('/');
  } 

  return (
    <Container>
      <Logo onClick={e => navigate('/')}>
        <img src="./download.png" alt="" />
      </Logo>
      <FormContainer>
        <h3>Add Products</h3>
        <InputContainer>
          <p>Title</p>
          <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}/>
        </InputContainer>
        <InputContainer>
          <p>Image Url</p>
          <input type="text" placeholder='Url' onChange={e => setImageUrl(e.target.value)} value={imageUrl}/>
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input type="number" placeholder='Price' onChange={e => setPrice(e.target.value)} value={price}/>
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input type="number" placeholder='Rating' onChange={e => setRating(e.target.value)} value={rating}/>
        </InputContainer>
        <Button onClick={addProduct}>
            Add Product
        </Button>


        
      </FormContainer>
        
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

//FormContainer
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

const Button = styled.button`
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


export default AddProduct;