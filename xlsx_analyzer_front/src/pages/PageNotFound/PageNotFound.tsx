import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const PageNotFound: React.FC = () => {
    return (
        <section className="pageNotFound">
            <Card>
                <h2>Page not found !</h2>
                <p>It seems that the page you are looking for doesn't exist.</p>
                <p>
                    Get Back to the <Link to={"/"}>Homepage</Link>
                </p>
            </Card>
        </section>
    );
};

export default PageNotFound;
