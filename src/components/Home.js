import "./Body.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
    const [newsDetails, setNewsDetails] = useState([]);
    useEffect(() => {
        getNewsDetails();
    }, []);
    console.log("home");
    async function getNewsDetails() {
        console.log("home use Effect");
        const data = await fetch(
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=5f98d29b27be45beb404835b78eab903"
        );
        const json = await data.json();
        setNewsDetails(json.articles);
    }
    if (!newsDetails) return null;
    if (newsDetails.length == 0) return <h1>Loading....</h1>;
    return (
        <div className="main-body">
            <h1 className="top-text">TRENDING NEWS</h1>
            <div className="all-card-area">
                {newsDetails?.map((news, index) => {
                    return <Card key={index} {...news} />;
                })}
            </div>
        </div>
    );
};

export default Home;
