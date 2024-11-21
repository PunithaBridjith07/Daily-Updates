import { Injectable } from '@angular/core';
import { type TourBanner, type tourList } from './tourList.model';

@Injectable({
  providedIn: 'root',
})
export class AppdataService {
  private TourList: tourList[] = [
    {
      tourType: 'Leisure Travel',
      image: '../../assets/Leisure Travel/leisure3.jpg',
      selected: false,
      description: 'classic elegance and contemporary design✨',
      banner: [
        {
          bannerName: 'Leisure Travel',
          bannerImage: '../../assets/Leisure Travel/leisure2.jpg',
          card: [
            {
              cardName: 'roman-kraft',
              imageUrl: '../../assets/Leisure Travel/leisure5.jpg',
              cardHeading: 'Roman-Kraft: A Creative Oasis',
              cardDescription:
                'Discover the harmonious blend of classic elegance and contemporary design, where lush greenery meets stunning architecture.This serene escpe inspires creativity and reflection, making it the perfect haven for thinkers and creators.',
            },
            {
              cardName: 'Rebe-Adelaida',
              imageUrl: '../../assets/Leisure Travel/leisure4.jpg',
              cardHeading: 'Rebe-Adelaida: A Hidden Gem',
              cardDescription:
                'Experience the enchanting blend of vibrant culture and serene landscapes, where every corner invites exploration and inspiration.',
            },
            {
              cardName: 'Luca-Bravo',
              imageUrl: '../../assets/Leisure Travel/leisure3.jpg',
              cardHeading: 'Luca-Bravo: Nature’s Canvas',
              cardDescription:
                'Experience stunning vistas where lush greenery meets dramatic cliffs, creating a perfect backdrop for adventure. The harmonious blend of vibrant culture and serene landscapes invites exploration at every turn. Uncover hidden gems that inspire and rejuvenate the soul.',
            },
          ],
          status: true,
        },
      ],
    },
    {
      tourType: 'Business Travel',
      image: '../../assets/Business Travel/business3.jpg',
      selected: false,
      description: 'Efficient trips for professional success 💼✈️📈',
      banner: [
        {
          bannerName: 'Business Travel',
          bannerImage: '../../assets/Business Travel/business1.jpg',
          card: [
            {
              cardName: 'The Co-Working Cafe',
              imageUrl: '../../assets/Business Travel/business6.jpg',
              cardHeading:
                'The Co-Working Cafe: Where Productivity Meets Collaboration',
              cardDescription:
                'Experience the perfect blend of productivity and social connection at The Co-Working Cafe. Immerse yourself in a vibrant community of like-minded individuals, fueled by delicious coffee and a stimulating atmosphere. This is the ideal spot to work, network, and recharge.',
            },
            {
              cardName: 'Modern Office',
              imageUrl: '../../assets/Business Travel/business2.jpg',
              cardHeading: 'Modern Office: A Hub of Innovation',
              cardDescription:
                'Experience a vibrant and dynamic workspace, designed to foster collaboration and productivity. This modern office boasts cutting-edge technology, comfortable amenities, and a welcoming atmosphere, making it the ideal setting for success-driven individuals and teams.',
            },
            {
              cardName: 'Modern Corporate Retreat',
              imageUrl: '../../assets/Business Travel/business5.jpg',
              cardHeading: 'Productive Meetings in a Vibrant Space',
              cardDescription:
                'Experience the perfect fusion of comfort and functionality in this inspiring modern corporate retreat. With its state-of-the-art facilities and ample natural light, this space fosters collaboration and innovation. Indulge in a productive environment that fuels creativity and efficiency, leaving you feeling refreshed and motivated.',
            },
          ],
          status: false,
        },
      ],
    },
    {
      tourType: 'Adventure Travel',
      image: '../../assets/Adventure Travel/adventure3.jpg',
      selected: false,
      description: 'Thrilling explorations in wild landscapes 🌄🧗‍♂️🏞️',
      banner: [
        {
          bannerName: 'Adventure Travel',
          bannerImage: '../../assets/Adventure Travel/adventure2.jpg',
          card: [
            {
              cardName: 'Keep Exploring Canyon',
              imageUrl: '../../assets/Adventure Travel/adventure3.jpg',
              cardHeading: 'Keep Exploring Canyon',
              cardDescription:
                'It features a young woman standing on the edge of a cliff overlooking a stunning canyon. She is holding a flag that reads Keep Exploring , which perfectly encapsulates the spirit of adventure travel. The photo captures the feeling of freedom and exploration that comes with venturing off the beaten path.',
            },
            {
              cardName: 'Underwater Sunbeams',
              imageUrl: '../../assets/Adventure Travel/adventure7.jpg',
              cardHeading: 'Underwater Sunbeams',
              cardDescription:
                "A lone free diver glides through the deep blue water, their silhouette barely visible against the bright rays of sunlight streaming down from above. The water is crystal clear, allowing for a perfect view of the diver's journey as they explore the underwater world. The scene is both tranquil and exhilarating, capturing the beauty and mystery of the deep.",
            },
            {
              cardName: 'Into the Woods',
              imageUrl: '../../assets/Adventure Travel/adventure4.jpg',
              cardHeading: 'Into the Woods',
              cardDescription:
                "A lone traveler approaches a rustic cabin nestled within a dense, verdant forest. The light filters through the trees, creating a sense of mystery and adventure. The traveler's backpack, a splash of bright orange, contrasts with the muted tones of the natural surroundings.",
            },
          ],
          status: false,
        },
      ],
    },
    {
      tourType: 'Ecotourism Travel',
      image: '../../assets/Ecotourism/eco3.jpg',
      selected: false,
      description: 'Nature-focused travel promoting sustainability 🌍🌿✨',
      banner: [],
    },
    {
      tourType: 'Cruise Travel',
      image: '../../assets/Cruise Travel/cruise3.jpg',
      selected: false,
      description: 'Relaxing voyages on stunning waters 🚢🌊☀️',
      banner: [],
    },
    {
      tourType: 'Road Trips',
      image: '../../assets/Road Trips/road3.jpg',
      selected: false,
      description: 'Adventurous journeys on open roads 🚗🌄🛣️',
      banner: [],
    },
    {
      tourType: 'Luxury Travel',
      image: '../../assets/Luxury Travel/luxury3.jpg',
      selected: false,
      description: 'Indulgent experiences in exclusive destinations 🏨✨🍾',
      banner: [
        {
          bannerName: 'Luxury Travel',
          bannerImage: '../../assets/Luxury Travel/luxury1.jpg',
          card: [
            {
              cardName: 'Zenith Retreat',
              imageUrl: '../../assets/Luxury Travel/luxury3.jpg',
              cardHeading: 'Zenith Retreat: Where Tranquility Meets Luxury',
              cardDescription:
                'Indulge in the epitome of refined living at Zenith Retreat, where breathtaking views meet impeccable service. Unwind in opulent suites, savor exquisite cuisine, and rejuvenate your senses with our world-class spa treatments. Immerse yourself in a sanctuary of luxury and peace.',
            },
            {
              cardName: 'Mountain-retreat',
              imageUrl: '../../assets/Luxury Travel/luxury4.jpg',
              cardHeading: 'Mountain Retreat: Where Serenity Meets Luxury',
              cardDescription:
                'Escape to a secluded haven nestled amidst majestic mountains, where breathtaking views and unparalleled comfort await. Immerse yourself in tranquility and indulge in the finest amenities, making this the ultimate luxury escape.',
            },
            {
              cardName: 'Poolside-bliss',
              imageUrl: '../../assets/Luxury Travel/luxury2.jpg',
              cardHeading: 'Poolside Bliss: A Day of Tranquility',
              cardDescription:
                'Indulge in the ultimate relaxation at this luxurious poolside retreat. Sink into the comfort of a plush lounger, soak up the sun, and let the gentle sounds of water lull you into a state of serenity. This is the perfect escape for those seeking a moment of peace and rejuvenation.',
            },
          ],
          status: false,
        },
      ],
    },
    {
      tourType: 'Sustainable Travel',
      image: '../../assets/Sustainable Travel/sustainable3.jpg',
      selected: false,
      description: 'Responsible journeys for a better planet 🌍♻️✈️',
      banner: [],
    },
  ];
  bannerData: TourBanner[] = [];
  banner!: TourBanner;
  activeBanner: number = 0;

  constructor() {
    this.filterBannerData();
  }
  private filterBannerData(): void {
    this.bannerData = this.tourListData
      .filter((tour) => tour.banner.length !== 0)
      .flatMap((tour) => [...tour.banner]);
    console.log('bannerData has been updated:', this.banner);
  }
  /* setSlideBannerData(activeBanner: number) {
    this.banner = this.bannerData[activeBanner];
  }

  set activeSlide(activeSlide: number) {
    this.activeBanner = activeSlide;
    this.setSlideBannerData(activeSlide);
  } */
  get tourListData() {
    return this.TourList;
  }
}
