import classes from "./CardCase.module.scss";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { connect, ConnectedProps } from "react-redux";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync/FetchCardsAsync.ts";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import Card from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/Card/Card.tsx";

const mapStateToProps = (state: RootState) => ({
  CardArray: state.CardSlice.cards,
  isPending: state.CardSlice.isPending,
  isError: state.CardSlice.isError,
  isLoaded: state.CardSlice.isLoaded,
});
const mapDispatchToProps = { fetchCardsAsync };
const connector = connect(mapStateToProps, mapDispatchToProps);
type CardCaseProps = ConnectedProps<typeof connector>;
const CardCase = connector(
  ({ CardArray, isPending, isError, isLoaded }: CardCaseProps) => {
    if (isPending) return <div>...loading...</div>;
    if (isError) return <div>ERROR!</div>;
    if (!CardArray.length) return <div>There are no cards unfortunately</div>;
    if (isLoaded)
      return (
        <div className={classes.line}>
          {CardArray.map((cardItem: CardSlice) => (
            <span key={cardItem.id} className={classes.cardContainer}>
              <Card card={cardItem} />
            </span>
          ))}
        </div>
      );
  }
);
export default CardCase;
