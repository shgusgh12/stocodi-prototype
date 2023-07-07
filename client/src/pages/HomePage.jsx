import React from "react";

import { HeroSection, RecommendSection, ContentSection, ContentItem, ContentItemGroup } from "../components/HomeComponents";

import thumbnail1 from "../assets/ContentItem1.png";
import thumbnail2 from "../assets/ContentItem2.png";
import thumbnail3 from "../assets/ContentItem3.png";
import thumbnail4 from "../assets/ContentItem4.png";

export default function HomePage() {
    return (
        <>
            <HeroSection></HeroSection>

            <RecommendSection></RecommendSection>

            <ContentSection title={"교육 컨텐츠"}>
                <ContentItemGroup>
                    <ContentItem title={"금융사기 피해예방"} instructor={"강사명"} time={"15:00"} thumbnail={thumbnail1}></ContentItem>
                    <ContentItem title={"똑소리 나게 돈 관리하기"} instructor={"강사명"} time={"14:00"} thumbnail={thumbnail2}></ContentItem>
                </ContentItemGroup>

                <ContentItemGroup>
                    <ContentItem title={"현명하게 돈 쓰기"} instructor={"강사명"} time={"13:29"} thumbnail={thumbnail3}></ContentItem>
                    <ContentItem title={"알차게 돈 모으기"} instructor={"강사명"} time={"15:84"} thumbnail={thumbnail4}></ContentItem>
                </ContentItemGroup>
            </ContentSection>
        </>
    );
}
