import React, { useCallback, useEffect } from "react";

const APP_KEY = "";
const APP_SECRET = "";

const ApproveKey = () => {};

const DOMAIN_NAME = "https://openapivts.koreainvestment.com:29443";
const URL = "/uapi/domestic-stock/v1/quotations/inquire-price";

const REQ_HEADER = {
    "content-type": "application/json; charset=utf-8",
};

const connect = () => {};

export default function useStock() {
    useEffect(async () => {
        const request = fetch(DOMAIN_NAME + URL, {});
    });
}
