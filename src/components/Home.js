import axios from '../axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card';
import Navbar from './Navbar';

function Home() {
  const [products, setProducts] = useState('');

  
  // console.log('basket>>>', basket);

  //useEffect is used when we have to run any function before render the page
  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get('/products/get');
      console.log('products>>>>>',data);
      setProducts(data);
    }
    fetchData();
  },[]);

 
  
  return (
    <Container>
     <Navbar />
     <Banner>
      <img src="./banner.jpg" alt="" />
      <img src="./mobile_banner.jpg" alt="" />
     </Banner>
     <Main>
     {
      products&&products?.data.map((product)=>(
        <Card 
        key={product._id}
        id={product._id}
        image={product.imageUrl}
        price={product.price}
        rating={product.rating}
        title={product.title}
       />
      ))
     }
       {/* <Card 
        id={2}
        image={"https://media.croma.com/image/upload/v1665446481/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/214741_0_ayqzgw.png"}
        price={456}
        rating={3}
        title={"Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"}
       />
       <Card 
        id={3}
        image={"https://5.imimg.com/data5/IOS/Default/2022/3/ZV/KG/WK/13669511/product-jpeg-250x250.png"}
        price={231}
        rating={3}
        title={"American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"}
       />
       <Card
        id={4}
        image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655485/Croma%20Assets/Communication/Mobiles/Images/261971_c8p8eb.png/mxw_640,f_auto"}
        price={900}
        rating={3}
        title={"Apple iPhone 14 Pro Max 256 GB (Deep Purple, 6 GB RAM)"}
       /> */}

       

       
     </Main>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
max-width:1400px;
margin:auto;
height: fit-content;
background-color: rgb(234,237,237);
`;
const Banner = styled.div`
width:100%;

img{
  width:100%;
  -webkit-mask-image: linear-gradient( 
    to bottom, 
    rgba(0, 0, 0, 2),
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0)


  );

  /** In this piece of code we are first hiding the larger image from the browser screen and only show the smaller image
  but for the smaller screen we have to hide the smaller nth(child 1) image and show the large(nth (child -2)) image 
   */
  &:nth-child(2){
    display: none;
  }
  @media only screen and (max-width: 767px){
    &:nth-child(1){
      display:none;
    }
    &:nth-child(2){
      display: block;
      -webkit-mask-image: none;
    }
  }
}
`;

const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;
grid-auto-rows:420px;
grid-template-columns: repeat(4, 300px);
grid-gap:20px;

${'' /* Mobile Version */}
@media only screen and (max-width: 767px){
  grid-template-columns: repeat(2, 50%);
  
  grid-gap: 0;
}

${'' /* Tablet Version */}
@media only screen and (min-width:767px) and (max-width: 1200px){
  grid-template-columns: repeat(3, 30%);
  
}

${'' /* Desktop Version */}
@media only screen and (min-width: 767px){
  margin-top: -130px;
}
`;
export default Home;