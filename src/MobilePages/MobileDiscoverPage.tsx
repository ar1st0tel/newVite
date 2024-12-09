import MobileHeader from "../MobileComponents/MobileHeaderComponent/MobileHeader.tsx";
import MobileExploreMarketplace from "../MobileComponents/MobileExploreMarketplaceComponent/MobileExploreMarketplace.tsx";
import MobileFooter from "../MobileComponents/MobileFooterComponent/MobielFooter.tsx";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../ReduxFeatures/Store/Store.ts";
import {fetchCardsAsync} from "../Api/AsyncThunk/FetchCardsAsync.ts";
import {useEffect, useState} from "react";


const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards,
        isLoaded: state.CardSlice.isLoaded,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>
const MobileDiscoverPage = connector(({cards, isLoaded, isError, isPending, fetchCardsAsync}: Props) => {
    const [message, setMessage] = useState(false);
    useEffect(() => {
        fetchCardsAsync(8)
    }, [fetchCardsAsync]);


    useEffect(() => {
        let delay: number;
        if (!cards || cards.length === 0) {
            delay = setTimeout(() => {
                setMessage(true);
            }, 1000);
        }
        return () => clearTimeout(delay)

    }, []);

    if (isPending) {
        return <div>...loading...</div>
    }
    if (isError) {
        return <div>ERROR!</div>
    }
    if (!cards || cards.length === 0) {
        return <div>{message ? 'Something is wrong!' : null}</div>
    }
    if (isLoaded) {
        return (<>
            <MobileHeader/>
            <MobileExploreMarketplace/>
            <MobileFooter/>
        </>)
    }
})
export default MobileDiscoverPage;