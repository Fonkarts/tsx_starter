import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
    return (
        <section className="pageNotFound">
            <h2>Page not found !</h2>
            <p>It seems that the page you are looking for doesn't exist.</p>
            <p>
                Get Back to the <Link to={"/"}>Homepage</Link>
            </p>
        </section>
    );
};

export default PageNotFound;
