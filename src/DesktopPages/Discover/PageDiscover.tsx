import NavigationComponent from "../../DesktopComponents/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "../../DesktopComponents/FooterComponent/FooterComponent.tsx";
import ContentDiscover, {LoadingImg} from "./ContentDiscover.tsx";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../ReduxFeatures/Store/Store.ts";
import {fetchCardsAsync} from "../../Api/AsyncThunk/FetchCardsAsync.ts";
import {useEffect} from "react";


const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards,
        isLoaded: state.CardSlice.isLoaded,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

const PageDiscover = connector(({cards, isLoaded, isError, isPending, fetchCardsAsync}: Props) => {
    useEffect(() => {
        fetchCardsAsync()
    }, [fetchCardsAsync]);


    if (isPending) {
        return <div>...loading...</div>
    }
    if (isError) {
        return <div>ERROR!</div>
    }
    if (!cards || cards.length === 0) {
        return <div>Something is wrong!</div>
    }
    if (isLoaded) {
        return (<div>
                <NavigationComponent/>
                <ContentDiscover/>
                <LoadingImg/>
                <FooterComponent/>
            </div>
        )
    }
})
export default PageDiscover;