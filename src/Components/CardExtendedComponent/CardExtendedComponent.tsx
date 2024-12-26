import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync/FetchCardsAsync.ts";
import CardExtended from "@/Components/CardExtendedComponent/CardExtended/CardExtended.tsx";
import { useEffect } from "react";
import classes from "./CardExtendedComponent.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BidCardComponent from "@/Components/BidCardComponent/BidCardComponent.tsx";
import { useModalContext } from "@/ContextHooks/ContexHooks.ts";
import CardExtendedHeader from "@/Components/CardExtendedComponent/CardExtendedHeader/CardExtendedHeader.tsx";
import CardsFromCreatorList from "@/Components/CardExtendedComponent/CardsFromCreatorList/CardsFromCreatorList.tsx";

const mapStateToProps = (state: RootState) => ({
  CardExposed: state.CardSlice.cards,
  isLoaded: state.CardSlice.isLoaded,
  isPending: state.CardSlice.isPending,
  isError: state.CardSlice.isError,
});

const mapDispatchToProps = { fetchCardsAsync };

const connector = connect(mapStateToProps, mapDispatchToProps);

type CardExtendedProps = ConnectedProps<typeof connector>;

const CardExtendedComponent = connector(
  ({
    CardExposed,
    isPending,
    isError,
    isLoaded,
    fetchCardsAsync,
  }: CardExtendedProps) => {
    useEffect(() => {
      fetchCardsAsync();
    }, [fetchCardsAsync]);
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const isMobile = useMediaQuery({ maxWidth: 425 });
    const { id } = useParams<{ id: string }>();
    const { showModal, toggleModal } = useModalContext();
    if (isPending) return <div>...loading...</div>;
    if (isError) return <div>ERROR!</div>;
    if (!CardExposed.length) return <div>There are no cards unfortunately</div>;

    if (isLoaded) {
      const mainCard = CardExposed.find((card) => card.id === id);
      if (!mainCard) return <div>Card does not exist!</div>;
      const restCards = CardExposed.filter(
        (card) => card.author === mainCard.author && card.id !== mainCard.id
      );
      return (
        <>
          <div className={showModal ? classes.blur : classes.noBlur}>
            <CardExtendedHeader goBack={() => handleGoBack()} />
            <CardExtended
              key={mainCard.id}
              cardExtended={mainCard}
              onButtonClick={toggleModal}
            />
            <div className={classes.fromCreatorTitle}>From Creator</div>
            <CardsFromCreatorList cards={restCards} isMobile={isMobile} />
          </div>
          {showModal && <BidCardComponent />}
        </>
      );
    }
  }
);
export default CardExtendedComponent;
