import React, {FC} from 'react';

interface CategoriesPanelProps{
    tag:string;
}

const CategoriesItem:FC<CategoriesPanelProps> = ({tag}) => {
    return (
        <div
            className="text-center text-gray-700 bg-transparent hover:text-gray-500 cursor-pointer my-0.5 pl-2 float-left">
            {tag}
        </div>
    );
};
export default CategoriesItem;