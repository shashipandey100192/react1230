import React,{Fragment} from "react"
import Abc from './images/img1.jpg';
import Mycontact from "./Mycontact";

const cndimg = "https://i.pinimg.com/236x/44/c8/4c/44c84ccbf97ab22a7d47274e0c4c8a27.jpg";
const a = 40;
const Mycontacus = ()=>{
    
    return(
        <Fragment>
        <h1>this is heading one</h1>
        <h2>heading two</h2>
        <img src={Abc} alt="jskdfhhjdgsf"/>
        <img src="photo/img2.jpg" alt="sdjdhfjsdhf"/>
        <img src={cndimg} alt="sdfkjsdkf"/>
        <h1>react  jsx expression </h1>
        <h2>{"this is text"}</h2>
        <h2>{50}</h2>
        <h2>{50+90}</h2>
        <h2>{a>=50 ? "this is number" : <h3>this is false</h3>}</h2>

        <h2>{a>=50 ? "this is number" : a>=30 ? <Mycontact/>:"nothing"}</h2>
        
        </Fragment>
    )
} 
export default Mycontacus