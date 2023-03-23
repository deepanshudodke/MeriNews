import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="nav-bar container">
            <h1>Meri News</h1>
            <ul className="container">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/business">
                    <li>Business</li>
                </Link>
                {/* business entertainment general health science sports technology */}
                <Link to="/entertainment">
                    <li>Entertainment</li>
                </Link>
                <Link to="/health">
                    <li>Health</li>
                </Link>
                <Link to="/science">
                    <li>Science</li>
                </Link>

                <Link to="/sports">
                    <li>Sports</li>
                </Link>

                <Link to="/technology">
                    <li>Technology</li>
                </Link>
                <Link to="/general">
                    <li>General</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;
