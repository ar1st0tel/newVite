import classes from "./ContentAndLoading.module.scss";
import Loading from "@/Pictures/Loading.png";

const LoadingImg = () => {
  return (
    <div className={classes.loading}>
      <img className={classes.rotate} src={Loading} alt="1" />
    </div>
  );
};
export default LoadingImg;
