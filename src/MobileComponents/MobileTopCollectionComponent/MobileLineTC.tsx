import classes from "../../DevicesVersions/MobileVersion/MobileVersion.module.scss"
import Ethereum from "../../Pictures/Ethereum.png"

const MobileLineTC = (props: {
    "id": number,
    "pic": string,
    "name": string,
    "author": string,
    "volume": string,
    "dayPercent": string,
}) =>{
    const color = parseFloat(props.dayPercent) > 0 ? classes.green : classes.red
    return (
        <div className={classes.tableLine} key={props.id}>
            <div className={classes.picAndName}>
                <div className={classes.linePic}>
                    <span className={classes.bigContainer}>
                        <img className={classes.previewPic} src={props.pic} alt={props.name} loading="lazy"/>
                    </span>
                    <div className={classes.smallContainer}>
                        {props.id}
                    </div>
                </div>
                <div className={classes.nameAndAuthor}>
                    <span style={{fontWeight: 500}}>{props.name} </span>
                    <span style={{fontSize:13, color: "#64748B"}}>{props.author}</span>
                </div>
            </div>
            <div>
                <div style={{fontWeight: 500}}>
                    <img src={Ethereum} className={classes.EthereumMobile} alt='1'/>
                    {props.volume}
                </div>
                <div><span className={color}>{props.dayPercent}</span></div>
            </div>
        </div>
    )
}
export default MobileLineTC