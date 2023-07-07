import React from "react";

import { ExperimentWrapper, TraderContainer, PortfolioContainer } from "../components/ExperimentComponents";

export default function ExperimentPage() {
    return (
        <>
            <ExperimentWrapper btn1={"포트폴리오"} btn2={"주식주문"}>
                <TraderContainer></TraderContainer>
                <PortfolioContainer></PortfolioContainer>
            </ExperimentWrapper>
        </>
    );
}
