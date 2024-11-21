export interface tourList {
  tourType: string;
  image: string;
  selected: boolean;
  description: string;
  banner: TourBanner[];
}

interface TourCard {
  imageUrl: string;
  cardName: string;
  cardHeading: string;
  cardDescription: string;
}

export interface TourBanner {
  bannerName:string,
  bannerImage: string;
  card:Card[];
  status:boolean;
}
export interface Card{
  cardName: string;
  imageUrl: string;
  cardHeading: string;
  cardDescription: string;
}