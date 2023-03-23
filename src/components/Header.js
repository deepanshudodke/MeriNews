import "./Header.css";

const Header = () => {
    return (
        <div className="nav-bar container">
            <h1>Meri News</h1>
            <ul className="container">
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>Business</li>
                </a>
                {/* business entertainment general health science sports technology */}
                <a href="#">
                    <li>Entertainment</li>
                </a>
                <a href="#">
                    <li>Health</li>
                </a>
                <a href="#">
                    <li>Science</li>
                </a>

                <a href="#">
                    <li>Sports</li>
                </a>

                <a href="#">
                    <li>Technology</li>
                </a>
                <a href="#">
                    <li>General</li>
                </a>
            </ul>
        </div>
    );
};

export default Header;
