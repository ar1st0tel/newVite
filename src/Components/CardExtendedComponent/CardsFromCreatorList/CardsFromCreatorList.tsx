import classes from "./CardsFromCreatorList.module.scss";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import CardsFromCreator from "@/Components/CardExtendedComponent/CardsFromCreator/CardsFromCreator.tsx";
import Card from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/Card/Card.tsx";
import React from "react";

interface CardsFromCreatorListProps {
  isMobile: boolean;
  cards: CardSlice[];
}

const CardsFromCreatorList: React.FC<CardsFromCreatorListProps> = ({
  isMobile,
  cards,
}) => {
  return (
    <div className={classes.itemsTable}>
      {cards
        .slice(0, isMobile ? 3 : 5) //cards on mobile page and other
        .map((card) =>
          isMobile ? (
            <Card card={card} key={card.id} />
          ) : (
            <CardsFromCreator card={card} key={card.id} />
          )
        )}
    </div>
  );
};
export default CardsFromCreatorList;
