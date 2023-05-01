import React from 'react';

const MenuItem = (props) => {
    return (
        <div>
            <p className="border-b border-b-inherit text-gray-700 uppercase transition-all hover:border-b hover:border-b-red-500 hover:cursor-pointer hover:text-gray-800"
            >{props.name}</p>
        </div>
    );
};

export default MenuItem;