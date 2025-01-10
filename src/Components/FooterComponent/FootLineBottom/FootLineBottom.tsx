import classes from "./FootLineBottom.module.scss";
import { socials } from "./types.ts";
import { NavLink } from "react-router-dom";

const FootLineBottom = () => {
  return (
    <div className={classes.box1}>
      {socials.map((link, index) => (
        <NavLink key={index} to={link.to}>
          <img src={link.img} alt={link.alt} />
        </NavLink>
      ))}
    </div>
  );
};
export default FootLineBottom;
