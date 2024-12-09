import classes from "./ButtonLeftRight.module.scss";

const ButtonPic = () =>{
    return(
        <div className={classes.Common}>
            <button className={classes.Left}>L</button>
            <button className={classes.Right}>R</button>
        </div>
    )
}
export {ButtonPic};