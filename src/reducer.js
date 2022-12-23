export const initialState = {
    basket: [],
    user: JSON.parse(localStorage.getItem("user")),
    address:{},
    product:{},

};

//this fuction is used to add the total price of the items present in the basket which is selected by the context api dispatch fucntion sends the data user selected on the browser
export const getBasketTotal=(basket)=>basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
   console.log('action>>>>', action);

   switch(action.type){
    
    case 'ADD_TO_BASKET':
        return{
            ...state,
            basket:[...state.basket, action.item],

        };
    case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
        let newBasket = [...state.basket];
        if(index>=0){
            newBasket.splice(index, 1);
        }
        else{
            console.warn(`Can't remove whose id is ${index}`);
        }
        return{
            ...state,
            basket: newBasket,

        };
        case "SET_ADDRESS":
           return{
            ...state,
            address:{...action.item},

           };
           case "SET_PRODUCT":
           return{
            ...state,
            product:{...action.item},

           };
           case "SET_USER":
            return {
              ...state,
              user: action.user,
            };

        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[],
            };
        default:
              
            return state;
   }

   


   

};

export default reducer;