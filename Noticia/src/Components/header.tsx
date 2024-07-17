import React from "react";
import Styles from '../Components/indes.module.scss'
import imagem from 
export const Header:React.FC = () =>{
    return (
        <div className={Styles.header} >
            <img src="" alt="" />
            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Destaque </a></li>
                    <li><a href="">contato</a></li>
                </ul>
            </div>
        </div>
    );
}