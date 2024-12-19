import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import TopBannerComponent from "@/Components/TopBannerComponent/TopBannerComponent.tsx";
import BidCardComponent from "@/Components/BidCardComponent/BidCardComponent.tsx";

function PAGE_TEST_ANOTHER_PROJECT() {
  return (
    <>
      <NavigationComponent />
      <TopBannerComponent />
      <BidCardComponent />
      <FooterComponent />
    </>
  );
}

export default PAGE_TEST_ANOTHER_PROJECT;

/*
const BidCardComponent = () => {
  const [valid, setValid] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue.startsWith(".")) {
      inputValue = inputValue.substring(1);
    }
    const validInput = /^[0-9]*\.?[0-9]{0,2}$/;
    if (validInput.test(inputValue)) {
      setValid(inputValue);
    }
  };
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={classes.bidContent}>
      <div className={classes.bidCardContainer}>
        <div className={classes.bidDate}>
          <span className={classes.title}>History of Bid</span>
          <span className={classes.dateNow}>
            <CurrentDateComponent />
          </span>
        </div>
        <BidListCase />
        <div className={classes.buttonsArea}>
          <label htmlFor="select" className={classes.label}>
            Your Bid
          </label>
          <div className={classes.bidLine}>
            <span className={classes.selectorContainer}>
              <select
                id="select"
                value={selectedOption}
                onChange={handleChange}
                className={classes.selector}
              >
                <option value="option1">ETH</option>
                <option value="option2">USD</option>
                <option value="option3">EUR</option>
              </select>
            </span>
            <input
              id="numberInput"
              className={classes.input}
              type="text"
              value={valid}
              onChange={handleInputChange}
              placeholder="Enter Your Bid"
            />
          </div>
          <button className={classes.button}>
            <img src={BidPicture} alt="$" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

interface BidListProps {
  bidList: BidListSlice;
}

const BidList: React.FC<BidListProps> = ({ bidList }) => {
  return (
    <div className={classes.line}>
      <div className={classes.left}>
        <div className={classes.logoContainer}>
          <div className={classes.logo}>
            <img src={bidList.picture} alt={bidList.name} />
          </div>
          <div className={classes.verification}>
            <img src={Verification} alt="1" />
          </div>
        </div>
        <div>
          <div className={classes.name}>{bidList.name}</div>
          <div className={classes.date}>
            {bidList.date} at {bidList.time}
          </div>
        </div>
      </div>
      <div className={classes.priceLine}>
        <img src={EthereumBig} alt="" />
        <span className={classes.price}>{bidList.price}</span>
      </div>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    isLoaded: state.BidListSlice.isLoaded,
    isError: state.BidListSlice.isError,
    isPending: state.BidListSlice.isPending,
    bidList: state.BidListSlice.bidList,
  }),
  { fetchBidListAsync }
);

type BidListComponentProps = ConnectedProps<typeof connector>;
const BidListCase = connector(
  ({
    isLoaded,
    isError,
    isPending,
    bidList,
    fetchBidListAsync,
  }: BidListComponentProps) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });
    useEffect(() => {
      fetchBidListAsync();
    }, []);
    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!bidList.length) {
      return <div>Bid History was not found</div>;
    }
    if (isLoaded)
      return (
        <List
          className={classes.list}
          itemCount={bidList.length}
          itemSize={isMobile ? 90 : 110}
          width="100%"
          height={isMobile ? 255 : 330}
        >
          {({ index, style }: ListChildComponentProps) => (
            <div key={bidList[index].id} style={style}>
              <BidList key={bidList[index].id} bidList={bidList[index]} />
            </div>
          )}
        </List>
      );
  }
);
*/
