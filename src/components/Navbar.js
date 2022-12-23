
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import './NavBar.css';

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const navigate = useNavigate();
  const signOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });

    localStorage.removeItem("user");
    navigate("/");
  };


  return (
    <Container>
        <Inner>

          <Logo onClick={()=> navigate('/')}>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </Logo>
          <SearchBar>
            <input type="text" placeholder='Search' />
            <SearchIcon onClick={e => navigate('/addproduct')}>
                <img src="./searchIcon.png" alt="" />
            </SearchIcon>
          </SearchBar>
          
          <RightContainer>
          <div className="dropdown">

          
          <NavButton className='drop'
            // onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello,</p>
            <p>{user ? user?.name : "Guest"}</p>
          </NavButton>
          <div className="dropdown_menu">
            
        
            <p onClick={user ? () => signOut() : () => navigate("/login")}>Login</p>
            <p onClick={user ? () => signOut() : () => navigate("/signup")}>SignUp</p>
           
          </div>
          </div>
            <NavButton onClick={e => navigate('/orders')}>
                <p>Return</p>
                <p>& Orders</p>
            </NavButton>
            <NavButton>
                <BasketButton onClick={user ? () => navigate('/checkout') : () => navigate("/login")}>
                    <img src="./basket-icon.png" alt="" />
                    <p>{basket.length}</p>
                </BasketButton>
            </NavButton>
          </RightContainer>
        </Inner>
        <MobileSearchBar>
            <input type="text" placeholder='Search' />
            <SearchIcon onClick={e => navigate('/addproduct')}>
                <img src="./searchIcon.png" alt="" />
            </SearchIcon>
          </MobileSearchBar>
    </Container>
  )

}

const Container = styled.div`
width:100%;
height:60px;
background-color:#131921;
display: flex;
align-items:center;
position: relative;

@media only screen and (max-width: 767px){
  height: 120px;
  flex-direction: column;
}

`;
const Inner = styled.div`
width:100%;
display: flex;
align-items: center;


@media only screen and (max-width: 767px){
  justify-content: space-between;
}

`;
const Logo = styled.div`
margin-left: 20px;
cursor:pointer;
img{
    width:100px;
    margin-top: 10px;
}
`;
const SearchBar = styled.div`
  height: 35px;
  /** flex:1 is used to cover the remaining space inside the div */
  flex:1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input{
    flex: 1;
    width:100%;
    height:100%;
    
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder{
    padding-left: 10px;
  }

  

  }

  @media only screen and (max-width:767px){
    display: none;
  }
`;


const RightContainer = styled.div`
display:flex;
align-items:center;
width: fit-content;
justify-content: space-arround;
height:100%;
padding: 5px 15px;

`;
const SearchIcon = styled.div`
background-color: #febd69;
height:110%;
width:40px;
display:flex;
align-items:center;
justify-content: center;

border-radius: 0px 5px 5px 0px;
img{
    width:22px;

    
}

`;

const NavButton = styled.div`
position:relative;
color: #fff;
padding: 5px;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;
margin-right: 15px;

p{
    &:nth-child(1){
        font-size: 12px;
    }
    &:nth-child(2){
        font-size: 14px;
        font-weight: 600
    }

}
`;

const BasketButton = styled.div`
display:flex;
align-items:center;
height:90%;
cursor: pointer;

img{
    width: 30px;
    margin-right:10px;
}
p{
    color: #fff;
    font-weight: 500;
}
`;

const MobileSearchBar = styled.div`
  heigth: 35px;
  width:90%;
  display:flex;
  align-items: center;
  padding: 10px;

  input{
    flex: 1;
    width:100%;
    height: 100%;
    border: none;
    border-radius:5px 0px 0px 5px;
   
    &::placeholder{
    padding-left: 10px;
  }

  }
  
  @media only screen and (min-width: 768px){
    display:none;
  }
`;


export default Navbar;