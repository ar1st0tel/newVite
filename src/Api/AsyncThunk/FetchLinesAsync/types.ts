interface ILinesApi {
  id: number;
  pic: string;
  name: string;
  author: string;
  volume: string;
  dayPercent: string;
  floorPrice: number;
  owners: number;
  items: number;
}

export type LinesApi = ILinesApi[];
