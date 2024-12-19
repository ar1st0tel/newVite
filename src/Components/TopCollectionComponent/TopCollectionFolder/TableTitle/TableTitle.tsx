import classes from "./TableTitle.module.scss";

const TableTitle = () => {
  return (
    <>
      <div className={classes.header}>Top Collection</div>
      <div className={classes.title}>
        <div className={classes.collection}>Collection</div>
        <div className={classes.volume}>Volume</div>
        <div className={classes.dayPercent}>24h %</div>
        <div className={classes.floorPrice}>Floor Price</div>
        <div className={classes.owners}>Owners</div>
        <div className={classes.items1}>Items</div>
      </div>
    </>
  );
};
export default TableTitle;
