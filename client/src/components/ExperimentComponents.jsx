import React, { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const ExperimentWrapper = ({ btn1, btn2, children }) => {
    let componentDidMount = false;
    const [toggle, setToggle] = useState(true);
    const btnRef1 = useRef();
    const btnRef2 = useRef();
    const indicatorRef = useRef();

    const btn1ClickHandler = (e) => {
        e.preventDefault();
        setToggle(false);
        btnRef1.current.classList.add("switch-selected");
        btnRef2.current.classList.remove("switch-selected");
    };

    const btn2ClickHandler = (e) => {
        e.preventDefault();
        setToggle(true);
        btnRef2.current.classList.add("switch-selected");
        btnRef1.current.classList.remove("switch-selected");
    };

    useEffect(() => {
        btnRef1.current.addEventListener("click", btn1ClickHandler);
        btnRef2.current.addEventListener("click", btn2ClickHandler);

        return () => {
            // 버그수정필요 : CleanUp 에서 RemoveEventListener 호출 안됌
            // btnRef1.current.removeEventListener("click", btn1ClickHandler);
            // btnRef2.current.removeEventListener("click", btn2ClickHandler);
        };
    }, []);

    return (
        <div className="experiment-wrapper wrapper">
            <div className="experiment-container container">
                <div className="experiment-switch">
                    <button ref={btnRef1}>{btn1}</button>
                    <button ref={btnRef2} className="switch-selected">
                        {btn2}
                    </button>
                </div>
                {toggle ? children[0] : children[1]}
            </div>
        </div>
    );
};

// Trader

export const TraderContainer = () => {
    return <TraderChartContainer></TraderChartContainer>;
};

export const TraderChartContainer = () => {
    return (
        <div className="trader-chart-container">
            <div className="trader-item item-trader">Chart</div>

            <div className="trader-item item-order"></div>
        </div>
    );
};

export const TraderOrderContainer = () => {};

// PortFolio

export const PortfolioContainer = () => {
    return <h1>Portfolio</h1>;
};
