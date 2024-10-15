import { Component } from '@angular/core';

@Component({
  selector: 'chainTour-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent {
  selectedTourBanner: number = 0;
  deSelectTourBanner: number = 0;
  toursBanner: TourBanner[] = [
    {
      bannerName: "Leisure Travel",
      bannerImage: "../../assets/Leisure Travel/leisure2.jpg",
      bannerCardOne: {
        cardName: "roman-kraft",
        imageUrl: "../../assets/Leisure Travel/leisure5.jpg",
        cardHeading: "Roman-Kraft: A Creative Oasis",
        cardDescription: "Discover the harmonious blend of classic elegance and contemporary design, where lush greenery meets stunning architecture.This serene escpe inspires creativity and reflection, making it the perfect haven for thinkers and creators."
      },
      bannerCardTwo: {
        cardName: "roman-kraft",
        imageUrl: "../../assets/Leisure Travel/leisure4.jpg",
        cardHeading: "Rebe-Adelaida: A Hidden Gem",
        cardDescription: "Experience the enchanting blend of vibrant culture and serene landscapes, where every corner invites exploration and inspiration."
      },
      bannerCardThree: {
        cardName: "roman-kraft",
        imageUrl: "../../assets/Leisure Travel/leisure3.jpg",
        cardHeading: "Luca-Bravo: Nature’s Canvas",
        cardDescription: "Experience stunning vistas where lush greenery meets dramatic cliffs, creating a perfect backdrop for adventure. The harmonious blend of vibrant culture and serene landscapes invites exploration at every turn. Uncover hidden gems that inspire and rejuvenate the soul."
      },
      status: 'active'
    },
    {
      bannerName: "Adventure Travel",
      bannerImage: "../../assets/Adventure Travel/adventure2.jpg",
      bannerCardOne: {
        cardName: "Keep Exploring Canyon",
        imageUrl: "../../assets/Adventure Travel/adventure3.jpg",
        cardHeading: "Keep Exploring Canyon",
        cardDescription: "It features a young woman standing on the edge of a cliff overlooking a stunning canyon. She is holding a flag that reads Keep Exploring , which perfectly encapsulates the spirit of adventure travel. The photo captures the feeling of freedom and exploration that comes with venturing off the beaten path."
      },
      bannerCardTwo: {
        cardName: "Underwater Sunbeams",
        imageUrl: "../../assets/Adventure Travel/adventure7.jpg",
        cardHeading: "Underwater Sunbeams",
        cardDescription: "A lone free diver glides through the deep blue water, their silhouette barely visible against the bright rays of sunlight streaming down from above. The water is crystal clear, allowing for a perfect view of the diver's journey as they explore the underwater world. The scene is both tranquil and exhilarating, capturing the beauty and mystery of the deep."
      },
      bannerCardThree: {
        cardName: "Into the Woods",
        imageUrl: "../../assets/Adventure Travel/adventure4.jpg",
        cardHeading: "Into the Woods",
        cardDescription: "A lone traveler approaches a rustic cabin nestled within a dense, verdant forest. The light filters through the trees, creating a sense of mystery and adventure. The traveler's backpack, a splash of bright orange, contrasts with the muted tones of the natural surroundings."
      },
      status: 'inactive'
    }
  ]

  handlePrev(e: Event) {
    e.preventDefault();
    if (this.selectedTourBanner > 0) {
      this.toursBanner[this.selectedTourBanner].status = 'inactive';
      this.selectedTourBanner--;
      this.toursBanner[this.selectedTourBanner].status = 'active';
    }
  }

  handleNext(e: Event) {
    e.preventDefault();
    if (this.selectedTourBanner < this.toursBanner.length - 1) {
      this.toursBanner[this.selectedTourBanner].status = 'inactive';
      this.selectedTourBanner++;
      this.toursBanner[this.selectedTourBanner].status = 'active';
    }
  }

  

}



interface TourCard {
  imageUrl: string;
  cardName: string;
  cardHeading: string;
  cardDescription: string;
}

interface TourBanner {
  bannerImage: string;
  bannerName: string;
  bannerCardOne: TourCard;
  bannerCardTwo: TourCard;
  bannerCardThree: TourCard;
  status: 'active' | 'inactive';
}