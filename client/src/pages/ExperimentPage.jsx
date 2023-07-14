import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { stockActions, pastDataFetchThunk } from "../context/stock-slice";

import { ExperimentWrapper, TraderContainer, PortfolioContainer, Interest } from "../components/ExperimentComponents";

export default function ExperimentPage() {
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch(pastDataFetchThunk());
    }, [dispatch]);

    useEffect(() => {
        console.log(status, data);
    }, [status]);

    return (
        <>
            <ExperimentWrapper btn1={"관심종목"} btn2={"포트폴리오"} btn3={"주식주문"}>
                <Interest.Container>
                    <Interest.Item name={"관심종목"}></Interest.Item>
                    <Interest.Item name={"실시간 BEST"}></Interest.Item>
                </Interest.Container>

                <PortfolioContainer></PortfolioContainer>
                <TraderContainer></TraderContainer>
            </ExperimentWrapper>
        </>
    );
}
