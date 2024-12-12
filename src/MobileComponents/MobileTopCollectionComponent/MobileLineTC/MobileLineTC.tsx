import classes from "./MobileLineTC.module.scss";
import Ethereum from "../../../Pictures/Ethereum.png";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";

interface MobileLineTCProps {
  line: LineSlice;
}

const MobileLineTC: React.FC<MobileLineTCProps> = ({ line }) => {
  const color = parseFloat(line.dayPercent) > 0 ? classes.green : classes.red;
  return (
    <div className={classes.tableLine} key={line.id}>
      <div className={classes.picAndName}>
        <div className={classes.linePic}>
          <span className={classes.bigContainer}>
            <img
              className={classes.previewPic}
              src={line.pic}
              alt={line.name}
              loading="lazy"
            />
          </span>
          <div className={classes.smallContainer}>{line.id}</div>
        </div>
        <div className={classes.nameAndAuthor}>
          <span className={classes.name}>{line.name} </span>
          <span className={classes.author}>{line.author}</span>
        </div>
      </div>
      <div>
        <div className={classes.name}>
          <img src={Ethereum} className={classes.EthereumMobile} alt="1" />
          {line.volume}
        </div>
        <div>
          <span className={color}>{line.dayPercent}</span>
        </div>
      </div>
    </div>
  );
};
export default MobileLineTC;
