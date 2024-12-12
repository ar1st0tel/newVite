import classes from "./CardExtended/CardExtended.module.scss";
import EthereumBig from "@/Pictures/EthereumBig.png";
import BidPicture from "@/Pictures/BidPicture.png";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";

interface CardExtendedProps {
  cardExtended: CardSlice;
}

const CardExtended: React.FC<CardExtendedProps> = ({ cardExtended }) => {
  return (
    <div className={classes.card} key={cardExtended.id}>
      <div className={classes.picContainer}>
        <img
          className={classes.img}
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
          <div className={classes.author}>
            <div className={classes.authorImgContainer}>
              <img src={cardExtended.authorPic} alt={cardExtended.author} />
            </div>
            <span>
              <div className={classes.greyText}>Created by</div>
              <div className={classes.blackText}>{cardExtended.author}</div>
            </span>
          </div>
          <div className={classes.author}>
            <div className={classes.authorImgContainer}>
              <img src={cardExtended.ownerPic} alt={cardExtended.owner} />
            </div>
            <span>
              <div className={classes.greyText}>Owned by</div>
              <div className={classes.blackText}>{cardExtended.owner}</div>
            </span>
          </div>
        </div>
        <div className={classes.lineInfo}>
          <div className={classes.info}>
            <div className={classes.greyText}>Current bid</div>
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
            <div className={classes.greyTextEnd}>End in</div>
            <div>
              <div className={classes.blackTextLight}>
                {cardExtended.timeOfEnd}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bid}>
          <button className={classes.buttonBid}>
            <img src={BidPicture} alt="1" /> Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardExtended;
