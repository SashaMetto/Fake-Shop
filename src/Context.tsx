import React from "react";
import { Phone } from "../phones";
import { Sneaker } from "../shoes";
export const PhoneContext = React.createContext<Phone[]>([]);
export const SneakersContext = React.createContext<Sneaker[]>([]);
export const CartContext = React.createContext<any[]>([]);
