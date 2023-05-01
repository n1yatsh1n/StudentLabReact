import React, {useEffect, useState} from 'react';
import {IResult} from "../types/types";
import QuoteItem from "./QuoteItem";
import axios from "axios";



const QuoteItems = () => {
    const [result, setResult] = useState<IResult[]>([]);

    useEffect(() => {
        fetchResult();
    }, []);

    async function fetchResult () {
        const responseResult = await axios.get('https://api.quotable.io/quotes/random?limit=7')
        setResult(responseResult.data)
    }


    return (
        <div>
            <h2 className="text-2xl uppercase text-center pt-3 font-bold">quotes</h2>
            {result?.map(element =>
                <QuoteItem key={element._id} result={element}/>
            )}
        </div>
    );
};

export default QuoteItems;