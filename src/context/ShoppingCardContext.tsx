/** @format */

import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
};

type MainContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const MainContext = createContext({} as MainContextProps);

export function useShoppingCart() {
  return useContext(MainContext);
}

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

const increaseCartQuantity = (id:number){
    setCartItems(curritems=>{
        if  (curritems.find(item=>item.id===id)==null){
            return [...curritems , {id,quantity:1}]
        }else {
            return curritems.map(item=>{
                if(item.id===id){
                    return{...item , quantity:item.quantity+1}
                }else {
                    return item
                }
            })
        }

    })
}

const decreaseCartQuantity = (id:number){
    setCartItems(curritems=>{
        if  (curritems.find(item=>item.id===id)?.quantity===1){
            return
        }else {
            return curritems.map(item=>{
                if(item.id===id){
                    return{...item , quantity:item.quantity+1}
                }else {
                    return item
                }
            })
        }

    })
}
  return <MainContext.Provider value={{getItemQuantity, increaseCartQuantity,decreaseCartQuantity}}>[children]</MainContext.Provider>;
}
