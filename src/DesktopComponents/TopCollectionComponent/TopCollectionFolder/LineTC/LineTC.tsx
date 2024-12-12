import classes from "./LineTC.module.scss";
import Ethereum from "../../../../Pictures/Ethereum.png";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";

interface LineTCProps {
  line: LineSlice;
}
const LineTC: React.FC<LineTCProps> = ({ line }) => {
  const color = parseFloat(line.dayPercent) > 0 ? classes.green : classes.red;
  return (
    <div className={classes.line} key={line.id}>
      <div className={classes.name}>
        <img
          className={classes.pic}
          src={line.pic}
          alt={line.name}
          loading="lazy"
        />
        <div className={classes.nameCard}>{line.name}</div>
        <div className={classes.author}>By {line.author}</div>
      </div>
      <div className={classes.value}>
        <img src={Ethereum} alt="1" /> {line.volume}
      </div>
      <div className={classes.value}>
        {" "}
        <span className={color}>{line.dayPercent}</span>
      </div>
      <div className={classes.value}>
        <img src={Ethereum} alt="1" /> {line.floorPrice}
      </div>
      <div className={classes.value}>{line.owners}K</div>
      <div className={classes.value}> {line.items}</div>
    </div>
  );
};
export default LineTC;
