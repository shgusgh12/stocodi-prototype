import "../styles/LoginComponents.scss";
import React from "react";
import logowhite from "../assets/logowhite.png";
import thumb from "../assets/thumb.png";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {Link, useNavigate} from 'react-router-dom';

const footText = {
    login : ['아직 계정이 없으신가요?','회원가입'],
    register : ['이미 계정이 있으신가요?','로그인']
}

const accountText = {
    login : ['로그인','로그인 후 서비스를 이용해보세요!'],
    register : ['회원가입 완료!','로그인 후 서비스를 이용해보세요!'],
    favorite : ['관심 종목이 있나요?','관심 종목을 선택한 후 맞춤화된 서비스를 만나보세요.']
}

export const HorizonLine = ({ text }) => {
    return (
    <div
        style={{width: "38vw", textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
        }}>
        <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
    </div>
    );
};


export const AuthLeft = ({type}) => {
    // type에 따라 왼쪽 이미지 변경

    return(
        <div className="left-container">
            <img className="logo" src={logowhite} alt=""></img>
            <div className="image-container">
                <img src={thumb}></img>
            </div>
        </div>
    );
}

export const AuthRight = ({children}) => {
    return(
        <div className="right-container">{children}</div>

    );
}

export const TextBox = ({type}) => {
    const text1 = accountText[type][0]
    const text2 = accountText[type][1]
    return(
        <div className="text-box">
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    );
}

export const SocialLogin = () =>{
    return(
        <div className="social-container">
            <div className="social-login">
                <img src={icon} className="social-img"></img>
                <p className="social-text">구글 계정으로 로그인</p>    
            </div>
            <div className="social-login">
                <img src={icon} className="social-img"></img>
                <p className="social-text">네이버 계정으로 로그인</p>    
            </div>
            <div className="social-login">
                <img src={icon} className="social-img"></img>
                <p className="social-text">카카오 계정으로 로그인</p>    
            </div>
        </div>
    )
}

export const AccountBox = ({type, setEmail, setPwd}) => {
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePwd = (e) => {
        setPwd(e.target.value)
    }
    // 여기에 로그인 onClick 추가예정

    return(
        <div className="input-container">
            <p>이메일 주소</p>
            <input className="email" type="text" onChange={changeEmail}></input>
            <p>비밀번호</p>
            <input className="password" type="password" onChange={changePwd}></input>
            <button>로그인</button>
        </div>
    );
}

export const AuthFoot = ({type}) => {
    const text1 = footText[type][0]
    const text2 = footText[type][1]
    return(
        <footer className="account-container">
            <p>{text1}</p>
            {type === 'register' ?
            <Link to='/login'>{text2}</Link>
            : 
            <Link to='/register'>{text2}</Link>}
        </footer>
    );
}