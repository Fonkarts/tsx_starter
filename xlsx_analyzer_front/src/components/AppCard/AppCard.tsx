import { AppCardInterface } from "../../types/AppCardTypes";

const AppCard = ({ name, description, url }: AppCardInterface) => {
    return (
        <article>
            <h3>{name}</h3>
            <p>{description}</p>
            <button>
                {" "}
                <a href={url}>Go to the App</a>
            </button>
        </article>
    );
};

export default AppCard;
