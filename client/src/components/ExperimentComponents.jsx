import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropDown } from "../utils/DropDown";

import "../styles/ExperimentComponents.scss";
import { interestDataFetchThunk } from "../context/interest-slice";

export const ExperimentWrapper = ({ btn1, btn2, btn3, children }) => {
    let componentDidMount = false;
    const [menu, setMenu] = useState(0);
    const btnRef1 = useRef();
    const btnRef2 = useRef();
    const btnRef3 = useRef();

    const btn1ClickHandler = (e) => {
        e.preventDefault();
        setMenu(0);
        btnRef1.current.classList.add("switch-selected");
        btnRef2.current.classList.remove("switch-selected");
        btnRef3.current.classList.remove("switch-selected");
    };

    const btn2ClickHandler = (e) => {
        e.preventDefault();
        setMenu(1);
        btnRef2.current.classList.add("switch-selected");
        btnRef1.current.classList.remove("switch-selected");
        btnRef3.current.classList.remove("switch-selected");
    };

    const btn3ClickHandler = (e) => {
        e.preventDefault();
        setMenu(2);
        btnRef3.current.classList.add("switch-selected");
        btnRef1.current.classList.remove("switch-selected");
        btnRef2.current.classList.remove("switch-selected");
    };

    useEffect(() => {
        btnRef1.current.addEventListener("click", btn1ClickHandler);
        btnRef2.current.addEventListener("click", btn2ClickHandler);
        btnRef3.current.addEventListener("click", btn3ClickHandler);

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
                    <button ref={btnRef1} className="switch-selected">
                        {btn1}
                    </button>
                    <button ref={btnRef2}>{btn2}</button>
                    <button ref={btnRef3}>{btn3}</button>
                </div>
                {children[menu]}
            </div>
        </div>
    );
};

// Interest

export const Interest = {
    Container: ({ children }) => {
        return (
            <>
                <div className="interest-container">{children}</div>
            </>
        );
    },
    Item: ({ name }) => {
        const dispatch = useDispatch();
        const { status, data } = useSelector((state) => state.interest);
        const tableRef = useRef();

        useEffect(() => {
            if (data == null) dispatch(interestDataFetchThunk());
        }, [dispatch]);

        useEffect(() => {
            if (status == "success") {
                for (let row = 0; row < 5; row++) {
                    const element_tr = document.createElement("tr");

                    for (let key in data[row]) {
                        const element_td = document.createElement("td");
                        element_td.innerHTML = data[row][key];
                        element_tr.appendChild(element_td);
                    }

                    tableRef.current.appendChild(element_tr);
                }
            }
        }, [status]);

        return (
            <div className="interest-item">
                <h2>{name}</h2>
                <table>
                    <thead>
                        <th>순위</th>
                        <th>종목명</th>
                        <th>현재가</th>
                        <th>등락률</th>
                    </thead>

                    <tbody ref={tableRef}></tbody>
                </table>
            </div>
        );
    },
};

// Trader

export const TraderContainer = () => {
    return <TraderChartContainer></TraderChartContainer>;
};

export const TraderChartContainer = () => {
    return (
        <div className="trader-chart-container">
            <div className="trader-item item-trader">
                <table>
                    <tbody>
                        <tr>
                            <td>LOGO:</td>
                            <td>애플</td>
                            <td>$158.88</td>
                            <td>+0.67%</td>
                            <td>1.06</td>
                            <td>거래량 68,483,589</td>
                            <td>거래대금 $109억 2,896만</td>
                        </tr>
                    </tbody>
                </table>
                <div className="chart-container-bottom"></div>
            </div>

            <div className="trader-item item-order"></div>
        </div>
    );
};

export const TraderOrderContainer = () => {};

// PortFolio

export const PortfolioContainer = () => {
    return <h1>Portfolio</h1>;
};
