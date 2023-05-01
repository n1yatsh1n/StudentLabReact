import React, {FC, useCallback, useEffect, useState} from 'react';
import {IResult} from "../types/types";
import axios from "axios";
import QuoteItem from "./QuoteItem";
import tags from "./TagsList"


const CategoriesItems:FC = () => {

    const [currentCategory, setCurrentCategory] = useState(tags[0]);
    const [result, setResult] = useState<IResult[]>([]);

    useEffect(() => {
        fetchResult();
    }, [currentCategory]);

    const toggleCategory = useCallback((category: string) => {
        setCurrentCategory(category)
    }, [])

    async function fetchResult () {
        let url = 'https://api.quotable.io/quotes?tags=' + currentCategory.toLowerCase()
        const responseResult = await axios.get(url)
        setResult(responseResult.data.results)
    }
    return (
        <div className="flex justify-center">
            <div className="container">
                <h2 className="text-2xl uppercase text-center pt-3 font-bold underline">categories</h2>
                <ol className="md:w-1/3 sm:w-3/4 m-auto columns-3 py-3 text-left">
                    {tags?.map(tag =>
                        <li onClick={() => toggleCategory(tag)} className="text-gray-500 hover:cursor-pointer hover:text-gray-800 px-3 ml-2">
                            {tag}
                        </li>
                    )}
                </ol>
                <div className="flex flex-row align-center justify-center m-auto">
                    <p className="text-2xl mb-4 font-bold"> Quotes from the category</p>
                    <p className="ml-2 text-2xl mb-4 text-red-500 border-b border-b-red-500 font-bold">{currentCategory}</p>

                </div>
                <div>
                    {result?.map(element =>
                        <QuoteItem key={element._id} result={element}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoriesItems;