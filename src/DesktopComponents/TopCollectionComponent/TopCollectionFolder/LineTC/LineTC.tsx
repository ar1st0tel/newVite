import classes from "./LineTC.module.scss"
import Ethereum from "../../../../Pictures/Ethereum.png"

const LineTC = (props: {
    "id": number,
    "pic": string,
    "name": string,
    "author": string,
    "volume": string,
    "dayPercent": string,
    "floorPrice": number,
    "owners": number,
    "items": number
}) =>{
    const color = parseFloat(props.dayPercent) > 0 ? classes.green : classes.red
    return (
        <div className={classes.line} key={props.id}>
            <div className={classes.name}>
                <img className={classes.pic} src={props.pic} alt={props.name} loading="lazy"/>
                <div className={classes.nameCard}>
                    {props.name}
            </div>
                <div className={classes.author}>
                    By {props.author}
                </div>
            </div>
            <div className={classes.value}>
                <img src={Ethereum} alt='1'/> {props.volume}
            </div>
            <div className={classes.value}> <span className={color}>
                {props.dayPercent}</span>
            </div>
            <div className={classes.value}>
                <img src={Ethereum} alt='1'/> {props.floorPrice}
            </div>
            <div className={classes.value}>
                {props.owners}K
            </div>
            <div className={classes.value}> {props.items}
            </div>
        </div>
    )
}
export default LineTC