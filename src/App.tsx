import React from 'react';
import HeaderPanel from "./components/HeaderPanel";
import MainPage from "./Pages/MainPage";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import CategoryPage from "./Pages/CategoryPage";
import LikesPage from "./Pages/LikesPage";


const App = () => {

    return (
            <BrowserRouter>
                <HeaderPanel/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path={'/category'} element={<CategoryPage/>}/>
                    <Route path={'/likes'} element={<LikesPage/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;
