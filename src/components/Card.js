import "./Card.css";
import noimg from "../img/no-img-icon.png";
const Card = ({ title, description, urlToImage, url }) => {
    return (
        <div className="card">
            {<img src={urlToImage ? urlToImage : noimg}></img>}

            <div className="card-content">
                <h1 className="headline">{title?.slice(0, 60)}...</h1>
                <p className="desc">{description?.slice(0, 150)}...</p>
                <a href={url} target="_blank">
                    <button>Read More</button>
                </a>
            </div>
        </div>
    );
};

export default Card;
