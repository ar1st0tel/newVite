import classes from "./CardsFromCreator.module.scss";
import Ethereum from "@/pictures/Ethereum.png";
import Verification from "@/pictures/Verification.png";
import Heart from "@/pictures/Heart.png";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { useNavigate } from "react-router-dom";

interface CardsFromCreatorProps {
  card: CardSlice;
}

const CardsFromCreator: React.FC<CardsFromCreatorProps> = ({ card }) => {
  const navigate = useNavigate();
  const handleCardClick = (id: string) => {
    navigate(`/card/${id}`);
  };
  return (
    <div className={classes.item} key={card.id}>
      <div
        className={classes.cardContainer}
        onClick={() => handleCardClick(card.id)}
      >
        <img
          className={classes.img}
          src={card.img}
          alt={card.name}
          loading="lazy"
        />
      </div>
      <div className={classes.description}>
        <div className={classes.name}>
          {card.author} <img src={Verification} alt="✔" />
        </div>
        <div className={classes.lineInfo}>
          <div className={classes.info}>
            {card.name}
            <div className={classes.priceLine}>
              <img src={Ethereum} alt="1" /> {card.price}
            </div>
          </div>
          <div className={classes.likes}>
            <img src={Heart} alt="2" />
            {card.likes}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsFromCreator;
