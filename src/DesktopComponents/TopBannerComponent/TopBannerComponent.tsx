import classes from "./TopBanner.module.scss";
import {ButtonCreate, ButtonExplore} from "../../HelpersComponents/ExploreAndCreateButtonsTopBanner/ExploreAndCreateButtons.tsx";
import Stats from "../../HelpersComponents/stats/Stats.tsx";
import Rectangle3 from "../../Pictures/Rectangle3.png";
import Arrow from "../../Pictures/Arrow.png"
import Dots from "../../Pictures/Dots.png"
import Rectangle3Small from "../../Pictures/Rectangle3Small.png"

const TopBannerComponent = () => {
    return (<div className={classes.content1Back}>
            <div className={classes.table}>
                <TopBannerText/>
                <TopBannerPictures/>
            </div>
        </div>
    )
}
export default TopBannerComponent

export const TopBannerPictures = () => {
    return (
        <div className={classes.right}>
            <div className={classes.containerBigPic}>
                <img className={classes.bigPic} src={Rectangle3} alt="1"/>
            </div>
            <div className={classes.smlPics}>
                <div className={classes.row}>
                    <img src={Arrow} className={classes.arrow} alt="1"/>
                    <div className={classes.containerDots}>
                        <img src={Dots} className={classes.dots} alt="1"/>
                    </div>
                </div>
                <div className={classes.containerSmlPic}>
                    <img src={Rectangle3Small} className={classes.pic} alt="1"/>
                </div>
            </div>
        </div>
    )
}

const TopBannerText = () => {
    return (
        <div className={classes.left}>
            <div className={classes.bord}></div>
            <div className={classes.top}>
                <div className={classes.heroText}>
                    <div className={classes.heroInfo}>Discover And <div> Create NFTs</div></div>
                    <div className={classes.heroContext}>
                        <div>Discover, Create and Sell NFTs On Our NFT Marketplace</div>
                        <div>With Over Thousands Of NFTs And Get a <strong className={classes.black}>$20 bonus.</strong>
                        </div>
                    </div>
                    <div className={classes.buttonGap}><ButtonExplore/><ButtonCreate/></div>
                </div>
            </div>
            <div className={classes.bottom}><Stats/></div>
        </div>
    )
}