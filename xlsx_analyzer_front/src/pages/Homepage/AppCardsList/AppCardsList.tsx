import { appCardData } from "../../../assets/mocks/appCardsData";
import AppCard from "../AppCard/AppCard";
import { AppCardInterface } from "../../../types/AppCardTypes";

const AppCardsList: React.FC = () => {
    const hasAppCardData = appCardData && appCardData.length;

    return (
        <section className="appCardsList">
            {hasAppCardData &&
                appCardData.map((appCard: AppCardInterface) => {
                    return (
                        <AppCard
                            key={`${appCard.name}Card`}
                            name={appCard.name}
                            description={appCard.description}
                            url={appCard.url}
                        />
                    );
                })}
        </section>
    );
};

export default AppCardsList;
