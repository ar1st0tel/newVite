import classes from "../ExploreMarketplace.module.scss";
import Ethereum from "../../../../Pictures/Ethereum.png"

const Card = (props: {
    id: string,
    name: string,
    price: string,
    img: string,
}) => {
    return (
        <div className={classes.item} key={props.id}>
            <div className={classes.cardContainer}>
                <img className={classes.img} src={props.img} alt={props.name} loading="lazy"/>
            </div>
            <div className={classes.description}>
                <div className={classes.name}>{props.name}
                </div>
                <div className={classes.lineInfo}>
                    <div className={classes.info}>
                        <div>Current bid</div>
                        <div className={classes.priceLine}><img src={Ethereum} alt="1"/> {props.price}</div>
                    </div>
                    <div className={classes.bid}>
                        <button className={classes.buttonBid}>PLACE BID</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card


