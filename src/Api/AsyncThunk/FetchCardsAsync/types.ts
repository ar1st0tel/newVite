interface ICardApi {
  id: string;
  name: string;
  price: string;
  img: string;
  description?: string;
  owner?: string;
  ownerPic?: string;
  author?: string;
  authorPic?: string;
  timeOfEnd?: string;
  likes?: number;
}

export type CardsApi = ICardApi[];
