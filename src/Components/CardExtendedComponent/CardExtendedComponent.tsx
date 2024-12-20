import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import CardExtended from "@/Components/CardExtendedComponent/CardExtended/CardExtended.tsx";
import { useEffect } from "react";
import ArrowLeft from "@/Pictures/ArrowLeft.png";
import classes from "./CardExtendedComponent.module.scss";
import CardsFromCreator from "@/Components/CardExtendedComponent/CardsFromCreator/CardsFromCreator.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Card from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/Card/Card.tsx";
import BidCardComponent from "@/Components/BidCardComponent/BidCardComponent.tsx";
import { useModalContext } from "@/ContextHooks/ContexHooks.ts";

const connector = connect(
  (state: RootState) => ({
    CardExposed: state.CardSlice.cards,
    isLoaded: state.CardSlice.isLoaded,
    isPending: state.CardSlice.isPending,
    isError: state.CardSlice.isError,
  }),
  { fetchCardsAsync }
);
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
    const { showModal, setShowModal } = useModalContext();
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    const handleClickOutside = (elem: MouseEvent) => {
      const modalElement = document.getElementById("modalWindow");
      if (modalElement && !modalElement.contains(elem.target as Node)) {
        setShowModal(false);
      }
    };
    useEffect(() => {
      if (showModal) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [showModal]);
    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!CardExposed.length) {
      return <div>There are no cards unfortunately</div>;
    }
    if (isLoaded) {
      const mainCard = CardExposed.find((card) => card.id === id);
      if (!mainCard) return <div>Card does not exist!</div>;
      const restCards = CardExposed.filter(
        (card) => card.author === mainCard.author && card.id !== mainCard.id
      );
      return (
        <>
          <div className={showModal ? classes.blur : classes.noBlur}>
            <div className={classes.title}>
              <img src={ArrowLeft} alt="1" onClick={handleGoBack} />
              Product Detail
            </div>
            <CardExtended
              key={mainCard.id}
              cardExtended={mainCard}
              onButtonClick={toggleModal}
            />
            <div className={classes.fromCreatorTitle}>From Creator</div>
            <div className={classes.itemsTable}>
              {!isMobile
                ? restCards
                    .slice(0, 5) // cards on Desktop page
                    .map((itemToShow: CardSlice) => (
                      <CardsFromCreator key={itemToShow.id} card={itemToShow} />
                    ))
                : restCards
                    .slice(0, 3) // cards on Mobile page
                    .map((itemToShow: CardSlice) => (
                      <Card key={itemToShow.id} card={itemToShow} />
                    ))}
            </div>
          </div>
          {showModal && <BidCardComponent />}
        </>
      );
    }
  }
);
export default CardExtendedComponent;
