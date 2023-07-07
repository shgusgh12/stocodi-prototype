import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.svg";
import img from "../assets/phone.png";
import thumbnailImg from "../assets/thumbnail.png";
import "../styles/HomeComponents.scss";

export const HeroSection = () => {
    const heroText = useRef();
    const heroImg = useRef();

    useEffect(() => {
        setTimeout(() => {
            heroText.current.classList.remove("animate-rise-before");
            heroText.current.classList.add("animate-rise-after");
        }, 400);
        setTimeout(() => {
            heroImg.current.classList.remove("animate-rise-before");
            heroImg.current.classList.add("animate-rise-after");
        }, 1000);
    }, []);

    return (
        <section className="section-hero-wrapper wrapper">
            <div className="section-hero-container container">
                <div className="section-hero-item item-text animate-rise-before" ref={heroText}>
                    <img src={logo} alt="" />
                    <h1>투자가 어려우신가요?</h1>
                    <h1>함께 연습해보면 어떨까요!</h1>
                </div>

                <div className="section-hero-item item-img animate-rise-before" ref={heroImg}>
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export const RecommendSection = () => {
    return (
        <section className="section-recommend-wrapper wrapper">
            <div className="section-recommend-container container">
                <div className="section-recommend-item">
                    <h3>오늘의 추천 콘텐츠</h3>
                    <p>금융 전문가가 찾는 베테랑 김중근,</p>
                    <p>단기간에 끝내는 엘리어트 파동이론</p>
                </div>

                <div className="section-recommend-item">
                    <img src={thumbnailImg} alt="" />
                    <button>VIEWCHART YOUTUBE</button>
                </div>
            </div>
        </section>
    );
};

export const ContentItem = ({ title, instructor, thumbnail, time }) => {
    return (
        <div className="section-content-item">
            <img src={thumbnail} alt="" />
            <div className="section-content-item-info">
                <h4>{title}</h4>
                <button>
                    <FontAwesomeIcon icon={faBookmark} />
                </button>
                <p>
                    <span>
                        <FontAwesomeIcon icon={faUser} size="xs" />
                        {instructor}
                    </span>
                    <span>{time}</span>
                </p>
            </div>
        </div>
    );
};

export const ContentSection = ({ title, children }) => {
    return (
        <section className="section-content-wrapper wrapper">
            <div className="section-content-container container">
                <h3>{title}</h3>
                <div className="section-content-items">{children}</div>
            </div>
        </section>
    );
};
