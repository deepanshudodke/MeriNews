import "./Body.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
const Body = () => {
    const { category } = useParams();
    console.log(category);
    const [change, setChange] = useState(category);

    const [newsDetails, setNewsDetails] = useState([]);
    useEffect(() => {
        console.log("Use effect called");
        getNewsDetails();
    }, [category]);
    async function getNewsDetails() {
        const data = await fetch(
            "https://newsapi.org/v2/top-headlines?country=in&category=" +
                category +
                "&apiKey=5f98d29b27be45beb404835b78eab903"
        );
        const json = await data.json();
        //console.log(json.totalResults);
        setNewsDetails(json.articles);

        //console.log(newsDetails);
    }
    if (!newsDetails) return null;
    if (newsDetails.length == 0) return <h1>Loading....</h1>;
    return (
        <div className="main-body">
            <h1 className="top-text">{category?.toUpperCase()} NEWS</h1>
            <div className="all-card-area">
                {newsDetails?.map((news, index) => {
                    return <Card key={index} {...news} />;
                })}
            </div>
        </div>
    );
};

export default Body;
