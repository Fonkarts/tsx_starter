import { Link } from "react-router-dom";
import { AppCardInterface } from "../../../types/AppCardTypes";
import Card from "../../../components/Card/Card";

const AppCard = ({ name, description, url }: AppCardInterface) => {
    return (
        <Card>
            <h3>{name}</h3>
            <p className="card__description">{description}</p>
            <button className="card__button">
                <Link to={url}>Let's Go !!</Link>
            </button>
        </Card>
    );
};

export default AppCard;
