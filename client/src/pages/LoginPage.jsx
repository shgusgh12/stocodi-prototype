import React from "react";
import "../styles/LoginComponents.scss";
import {HorizonLine, AuthLeft, AuthRight,TextBox,SocialLogin,AuthFoot,AccountBox }from "../components/LoginComponents";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState(''); 

    function enter() {
        console.log(email,pwd);

    }

    return (
        <>
            <section className="background-section flex-row wrapper">
                {/* /화면의 왼쪽 박스*/}
                <AuthLeft></AuthLeft>
                {/* /화면 오른쪽 박스 */}
                <AuthRight>
                    <TextBox type='login'></TextBox>
                    {/* 소셜 로그인 */}
                    <SocialLogin></SocialLogin>
                    <div className="line">
                        <HorizonLine text='OR'></HorizonLine>
                    </div>
                    <AccountBox setEmail={setEmail} setPwd={setPwd}></AccountBox>
                    <AuthFoot type='login'></AuthFoot>
                </AuthRight>
            </section>
        </>
    );
}
