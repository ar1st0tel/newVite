import classes from "./LineTC.module.scss";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";
import EthereumBig from "@/pictures/EthereumBig.png";

interface LineTCProps {
  line: LineSlice;
}

const LineTC: React.FC<LineTCProps> = ({ line }) => {
  const color = parseFloat(line.dayPercent) > 0 ? classes.green : classes.red;
  const values = [
    { icon: EthereumBig, value: line.volume },
    { value: <span className={color}>{line.dayPercent}</span> },
    { icon: EthereumBig, value: line.floorPrice },
    { value: line.owners + "K" },
    { value: line.items },
  ];
  return (
    <div className={classes.line} key={line.id}>
      <div className={classes.name}>
        <div className={classes.linePic}>
          <span className={classes.bigContainer}>
            <img
              className={classes.pic}
              src={line.pic}
              alt={line.name}
              loading="lazy"
            />
          </span>
          <div className={classes.smallContainer}>{line.id}</div>
        </div>
        <div className={classes.nameAndAuthor}>
          <div className={classes.nameCard}>{line.name}</div>
          <div className={classes.author}>By {line.author}</div>
        </div>
      </div>
      {values.map((item, index) => (
        <div key={index} className={classes.value}>
          {item.icon ? (
            <img className={classes.valueImg} src={EthereumBig} alt="1" />
          ) : null}
          {item.value}
        </div>
      ))}
      <div className={classes.mobileValue}>
        <div className={classes.mobileVolume}>
          <img className={classes.mobileVolumeImg} src={EthereumBig} alt="1" />
          {line.volume}
        </div>
        <div className={classes.mobileDayPercent}>
          <span className={color}>{line.dayPercent}</span>
        </div>
      </div>
    </div>
  );
};
export default LineTC;
