import classes from "./FootLineTop.module.scss";
import { NavLink } from "react-router-dom";
import { contacts } from "@/Components/FooterComponent/FootLineTop/types.ts";

const FootLineTop = () => {
  return (
    <div className={classes.box}>
      {contacts.map((item) => (
        <NavLink key={item.id} to={item.to} className={classes.link}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};
export default FootLineTop;
