import classes from "./BidCardComponent.module.scss";
import BidListCase from "@/Components/BidCardComponent/BidListCase/BidListCase.tsx";
import BidHistoryHeader from "@/Components/BidCardComponent/BidHistoryHeader/BidHistoryHeader.tsx";
import BidInputSection from "@/Components/BidCardComponent/BidInputSection/BidInputSection.tsx";
import useBidInput from "@/HelpersComponents/helpers/Hooks/useBidInput.ts";

const BidCardComponent = () => {
  const bidInput = useBidInput("");
  return (
    <div className={classes.bidContent} id="modalWindow">
      <BidHistoryHeader />
      <BidListCase />
      <BidInputSection
        bidValue={bidInput.bidValue}
        onButtonChange={() => bidInput.onChange}
      />
    </div>
  );
};

export default BidCardComponent;
