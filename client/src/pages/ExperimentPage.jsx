import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { stockActions, pastDataFetchThunk } from "../context/stock-slice";

import { ExperimentWrapper, TraderContainer, PortfolioContainer } from "../components/ExperimentComponents";

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
            <ExperimentWrapper btn1={"포트폴리오"} btn2={"주식주문"}>
                <TraderContainer></TraderContainer>
                <PortfolioContainer></PortfolioContainer>
            </ExperimentWrapper>
        </>
    );
}
