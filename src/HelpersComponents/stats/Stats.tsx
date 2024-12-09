import classes from './Stats.module.scss'

const Stats = () => {
    return (
        <>
            <div className={classes.stat}>
                <div className={classes.strong}>430K+</div>
                <div className={classes.weak}>Art Works</div>
            </div>
            <div className={classes.stat}>
                <div className={classes.strong}>159K+</div>
                <div className={classes.weak}>Creators</div>
            </div>
            <div className={classes.stat}>
                <div className={classes.strong}>87K+</div>
                <div className={classes.weak}>Collections</div>
            </div>
        </>
    )
}
export default Stats