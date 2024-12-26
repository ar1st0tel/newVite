import classes from "./LoadingElem.module.scss";
import Loading from "@/Pictures/Loading.png";

const LoadingElem = () => {
  return (
    <div className={classes.loading}>
      <img className={classes.rotate} src={Loading} alt="1" />
    </div>
  );
};
export default LoadingElem;
