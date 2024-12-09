import classes from "../../App.module.scss";

import Loading from "../../Pictures/Loading.png";
import ExploreMarketplace from "../../DesktopComponents/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";

const ContentDiscover = () => {
    return (<div className={classes.contentBack}>
            <ExploreMarketplace/>
</div>
)
}

export default ContentDiscover;


const LoadingImg = () => {
    return (
        <div className={classes.loading}>
            <img className={classes.rotate} src={Loading} alt="1"/>
        </div>
    )
}
export { LoadingImg };