import React from 'react';
import {useNavigate} from "react-router-dom";
import MenuItem from "./MenuItem";

const HeaderPanel = () => {
    const navigate = useNavigate();
    const GoToCategories = () => {
        navigate("/category");
    };
    const GoToLikes = () => {
        navigate("/likes")
    };
    const GoToMain = () =>{
        navigate("/")
    };
    return (
        <div className="h-12 border-b-2 flex items-center justify-center">
            <div className="container flex justify-around ">
                <div onClick={GoToMain}>
                    <MenuItem name = 'quotes'/>
                </div>
                <div onClick={GoToCategories}>
                    <MenuItem name = 'categories'/>
                </div>
                <div onClick={GoToLikes}>
                    <MenuItem name = "likes"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderPanel;