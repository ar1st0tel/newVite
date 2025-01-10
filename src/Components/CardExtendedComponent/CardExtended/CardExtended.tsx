import classes from "./CardExtended.module.scss";
import EthereumBig from "@/pictures/EthereumBig.png";
import BidPicture from "@/pictures/BidPicture.png";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { CardExtendedAuthor } from "@/Components/CardExtendedComponent/CardExtended/CardExtendedAuthor/CardExtendedAuthor.tsx";

interface CardExtendedProps {
  cardExtended: CardSlice;
  onButtonClick: () => void;
}

const CardExtended: React.FC<CardExtendedProps> = ({
  cardExtended,
  onButtonClick,
}) => {
  return (
    <div className={classes.card} key={cardExtended.id}>
      <div className={classes.picContainer}>
        <img
          className={classes.picContainerImg}
          src={cardExtended.img}
          alt={cardExtended.name}
          loading="lazy"
        />
      </div>
      <div className={classes.nameAndDescription}>
        <div className={classes.cardName}>
          <div className={classes.titleName}>Project {cardExtended.name}</div>
          <div className={classes.description}>{cardExtended.description}</div>
        </div>
        <div className={classes.authorAndOwner}>
          <CardExtendedAuthor
            imgSrc={cardExtended.authorPic}
            name={cardExtended.author}
            label="Created by"
          />
          <CardExtendedAuthor
            imgSrc={cardExtended.ownerPic}
            name={cardExtended.owner}
            label="Owned by"
          />
        </div>
        <div className={classes.lineInfo}>
          <div className={classes.info}>
            <div className={classes.grayText}>Current bid</div>
            <div>
              <div className={classes.blackTextBold}>
                <img
                  src={EthereumBig}
                  alt="1"
                  className={classes.ethereumImg}
                />
                {cardExtended.price}
              </div>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.grayTextEnd}>End in</div>
            <div>
              <div className={classes.blackTextLight}>
                {cardExtended.timeOfEnd}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bid}>
          <button className={classes.buttonBid} onClick={onButtonClick}>
            <img src={BidPicture} alt="1" /> Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardExtended;
