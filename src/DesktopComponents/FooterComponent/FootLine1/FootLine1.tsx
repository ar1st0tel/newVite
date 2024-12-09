import classes from "../Footer.module.scss";
import {NavLink} from "react-router-dom";

const FootLine1 = () => {
    return (<div>
            <div className={classes.box}>
                <div>
                    <NavLink className={classes.a} to="#S">Privacy Policy</NavLink>
                </div>
                <div>
                    <NavLink className={classes.a} to="#S">Team & Conditions</NavLink>
                </div>
                <div>
                    <NavLink className={classes.a} to="#S">About Us</NavLink>
                </div>
                <div>
                    <NavLink className={classes.a} to="#S">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}
export default FootLine1