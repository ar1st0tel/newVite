import classes from "./Stats.module.scss";

const values = [
  { volume: "430K+", section: "Art Works" },
  { volume: "159K+", section: "Creators" },
  { volume: "87K+", section: "Collections" },
];
const Stats = () => {
  return (
    <>
      {values.map((item, index) => (
        <div key={index} className={classes.stat}>
          <span className={classes.strong}>{item.volume}</span>
          <span className={classes.weak}>{item.section} </span>
        </div>
      ))}
    </>
  );
};
export default Stats;
