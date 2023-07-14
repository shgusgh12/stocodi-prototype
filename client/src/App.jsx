import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import ExperimentPage from "./pages/ExperimentPage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux";

import { store } from "./context/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experiment" element={<ExperimentPage />} />
                <Route path="/study" element={<StudyPage />}></Route>
                <Route path="/community" element={<CommunityPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
        </Provider>
    );
}
