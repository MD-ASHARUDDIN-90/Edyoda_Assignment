import React from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import CustomButton from "../../Atom/CustomButton/CustomButton"
import style from "./Navbar.module.css"
import Logo from "../../assests/logo.svg"

export default function Navbar(){

  return(
    <div className={style.main}>
      <div className={style.navLeft}>
      <img src={Logo} alt="logo"/>
      <p className={style.options}>Courses <RiArrowDropDownLine/></p>
      <p  className={style.options}>Programs <RiArrowDropDownLine/></p>
      </div>
      <div className={style.navRight}>
      <AiOutlineSearch />
      <p>Login</p>
      <CustomButton text="JOIN NOW" className={style.btn}/>
      </div>
      </div>
  )
}