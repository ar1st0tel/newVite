import classes from '../../../App.module.scss';
import {NavLink} from "react-router-dom";
import {useState} from "react";

const NavigationTitles = () => {

    const [selectedItem, setSelectedItem] = useState<string>(() => {
        return localStorage.getItem('selectedItem') || "";
    })
    const changeColor = (item:string) => {
        setSelectedItem(item);
        localStorage.setItem('selectedItem', item);
    }
    return (
        <div className={classes.nav}>
            <div className={classes.boxSmall}>
                <a href="/discover" className={classes.item} onClick={() => changeColor("DISCOVER")}
                   style={{color: selectedItem === "DISCOVER" ? 'black' : 'gray', cursor: 'pointer'}}>
                    DISCOVER
                </a>
                <NavLink to="/creators" className={classes.item} onClick={() => changeColor("CREATORS")}
                         style={{color: selectedItem === "CREATORS" ? 'black' : 'gray', cursor: 'pointer'}}>
                    CREATORS
                </NavLink>
                <NavLink to="/sells" className={classes.item} onClick={() => changeColor("SELLS")}
                         style={{color: selectedItem === "SELLS" ? 'black' : 'gray', cursor: 'pointer'}}>
                    SELLS
                </NavLink>
                <NavLink to="/stats" className={classes.item} onClick={() => changeColor("STATS")}
                         style={{color: selectedItem === "STATS" ? 'black' : 'gray', cursor: 'pointer'}}>
                    STATS
                </NavLink>
            </div>
        </div>
    )
}
export default NavigationTitles

