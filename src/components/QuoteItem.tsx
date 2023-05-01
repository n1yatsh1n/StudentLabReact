import React, {FC, useCallback, useEffect, useState,} from 'react';
import {IResult} from "../types/types";
interface QuotePanelProps{
    result: IResult;
}

const QuoteItem:FC<QuotePanelProps> = ({result}) => {
    const [isFavorite, setIsFavorite] = useState<Boolean>();
    useEffect(() => {
        let currentFavArray = window.localStorage.getItem('favArray')

        if (currentFavArray == null) {
            currentFavArray = "";
        } else {
            currentFavArray = JSON.parse(currentFavArray);
        }

        if (currentFavArray?.includes(result?._id)) {
            setIsFavorite(true);
        }
        else{
            setIsFavorite(false);
        }
    }, [])

    const toggleAddFavorite = useCallback(() => {
        let currentFavArray = window.localStorage.getItem('favArray')

        if (currentFavArray == null) {
            currentFavArray = "";
        } else {
            currentFavArray = JSON.parse(currentFavArray);
        }

        if (currentFavArray?.includes(result?._id)) {
            let updatedFavArray = currentFavArray.replace(result?._id, '');
            setIsFavorite(false);
            window.localStorage.setItem('favArray', JSON.stringify(updatedFavArray));
        }
        else{
            setIsFavorite(true);
            window.localStorage.setItem('favArray', JSON.stringify(currentFavArray + " " + result?._id));
        }
    }, []);

    return (
        <div>
        <ol key={result._id} className="container mx-auto border-solid border-4 my-3 rounded-xl shadow-md ">
            <li className="mx-2 mt-2">
                {result.content}
            </li>
            <li className="mt-1 ml-2">
                &#169; {result.author}
            </li>
            <li>
                <div className="h-0.5 bg-gray-300 my-0.5"/>
            </li>
            <li className="ml-2 mb-1">{result.tags.map(tag =>
                <div className={"text-neutral-500 text-sm text-left flex-col"}>{tag}</div>)}
            </li>
            <li>
                <div className="h-0.5 bg-gray-300 "/>
            </li>
            <li className="flex justify-center">
                <button onClick={() => toggleAddFavorite()} className="ml-2 my-2 uppercase text-xs text-gray-500 hover:text-gray-700">{isFavorite ? "Saved!" : "Save"}</button>
            </li>
        </ol>
        </div>
    );
};

export default QuoteItem;