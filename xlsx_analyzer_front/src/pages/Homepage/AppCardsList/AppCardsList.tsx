import { appCardData } from "../../../assets/mocks/appCardsData";
import AppCard from "../../../components/AppCard/AppCard";
import { AppCardInterface } from "../../../types/AppCardTypes";

const AppCardsList: React.FC = () => {
    const hasAppCardData = appCardData && appCardData.length;

    return (
        hasAppCardData &&
        appCardData.map((appCard: AppCardInterface) => {
            return (
                <AppCard
                    key={`${appCard.name}Card`}
                    name={appCard.name}
                    description={appCard.description}
                    url={appCard.url}
                />
            );
        })
    );
};

export default AppCardsList;
