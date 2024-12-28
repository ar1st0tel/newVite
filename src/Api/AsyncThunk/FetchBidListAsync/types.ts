interface IFetchBidListApi {
  id: number;
  picture: string;
  name: string;
  price: number;
  date: string;
  time: string;
}

export type FetchBidListApi = IFetchBidListApi[];
