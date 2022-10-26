import Styles from "./Box.module.css"
import {useState} from "react";

const Box=({value,onClick,winner,position,index,onClickPosition})=>{

  const onClickSetup=()=>{
    onClickPosition(position);
    onClick();
  }
  if(winner.length>0){
    return (
      <>
        {
          winner?.includes(index)?  <button  className={Styles.winner} onClick={onClickSetup}>{value}</button> :<button  className={Styles.square} onClick={onClick}>{value}</button>
        }
      </>
    )
  }
  else{
    return (
    <button  className={Styles.square} onClick={onClickSetup}>{value}</button>
    )
  }

}

export default Box