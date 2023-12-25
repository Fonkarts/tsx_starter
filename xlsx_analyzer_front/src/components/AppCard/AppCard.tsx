import { Link } from "react-router-dom";
import { AppCardInterface } from "../../types/AppCardTypes";

const AppCard = ({ name, description, url }: AppCardInterface) => {
    return (
        <article className="appCard">
            <h3>{name}</h3>
            <p className="appCard__description">{description}</p>
            <button className="appCard__button">
                <Link to={url}>Let's Go !!</Link>
            </button>
        </article>
    );
};

export default AppCard;
