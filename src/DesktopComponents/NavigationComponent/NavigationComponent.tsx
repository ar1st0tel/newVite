import NavigationTitles from "./NavigationTitles/NavigationTitles.tsx";
import classes from "../../App.module.scss";
import SearchArea from "./SearchArea/SearchArea.tsx";
import LogoBlack from "../../Pictures/LogoBlack.png"
const NavigationComponent = () => {
    return (<div className={classes.headerBack}>
        <div className={classes.box}>
            <a href='/'><img src={LogoBlack} alt='1'/></a> {/*img Logo*/}
            <NavigationTitles/>
            <SearchArea/>
        <button className={classes.boxWallet}>
            CONNECT WALLET
            </button>
        </div>
        </div>
        )
}
export default NavigationComponent