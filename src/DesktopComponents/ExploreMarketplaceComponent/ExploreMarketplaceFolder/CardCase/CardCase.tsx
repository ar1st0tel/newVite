import classes from "./CardCase.module.scss";
import Card from "../Card/Card.tsx";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { connect, ConnectedProps } from "react-redux";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
/*import {useState} from "react";*/
/*import Pagination from "../Paginator/Paginator.tsx";*/
import { RootState } from "@/ReduxFeatures/Store/Store.ts";

//Закомментировал Пагинатор
//В {CardArray.map((cardItem: CardSlice) => ( заменить CardArray на currentItems чтобы работало
const connector = connect(
  (state: RootState) => ({
    CardArray: state.CardSlice.cards,
    isPending: state.CardSlice.isPending,
    isError: state.CardSlice.isError,
  }),
  { fetchCardsAsync }
);
type CardCaseProps = ConnectedProps<typeof connector>;
const CardCase = connector(
  ({ CardArray, isPending, isError }: CardCaseProps) => {
    /*const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const totalPages = Math.ceil(CardArray.length / itemsPerPage);
    const indexOfLastItem = itemsPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CardArray.slice(indexOfFirstItem, indexOfLastItem);*/

    /* const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };*/

    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!CardArray.length) {
      return <div>There are no cards unfortunately</div>;
    }

    return (
      <div className={classes.line}>
        {CardArray.map((cardItem: CardSlice) => (
          <Card key={cardItem.id} card={cardItem} />
        ))}
        {/*<Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
                left: currentPage === 1,
                right: currentPage === totalPages,
            }}
        />*/}
      </div>
    );
  }
);
export { CardCase };
