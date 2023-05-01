import React, {useEffect, useState} from 'react';
import {IResult} from "../types/types";
import QuoteItem from "./QuoteItem";


const LikesQuotes = () => {
    const [resultsList, setResult] = useState<IResult[]>([]);

    useEffect(() => {
        fetchResult();
    }, []);

    async function fetchResult () {
        let favArray = window.localStorage.getItem('favArray')
        if (favArray == null) {
            favArray = "";
        } else {
            favArray = JSON.parse(favArray);
        }
        let data: IResult[] = [];
        if (favArray){
            let favArraySplit = favArray.split(' ');
            favArraySplit = favArraySplit.filter(function(el) {
                return (el != null && el != "");
            });
            for (let i = 0; i < favArraySplit.length; i ++){
                let url = 'https://api.quotable.io/quotes/' + favArraySplit[i];
                let response = await fetch(url);
                data[i] = await response.json();
            }
            setResult(data)
        }
    }
    return (
        <div>
            <h2 className="text-2xl uppercase text-center pt-3 font-bold">likes quotes</h2>
            {resultsList?.map(element =>
                <React.Fragment key={element._id}>
                    <QuoteItem result={element}/>
                </React.Fragment>
            )}
        </div>
    );
};

export default LikesQuotes;