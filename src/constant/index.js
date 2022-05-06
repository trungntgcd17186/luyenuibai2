import FeaturedGear1 from "../assets/images/FeaturedGear1.svg";
import FeaturedGear2 from "../assets/images/FeaturedGear2.svg";
import FeaturedGear3 from "../assets/images/FeaturedGear3.svg";
import FeaturedGear4 from "../assets/images/FeaturedGear4.svg";

import GameSellerImage1 from "../assets/images/GameSellerImage1.svg";
import GameSellerImage2 from "../assets/images/GameSellerImage2.svg";
import GameSellerImage3 from "../assets/images/GameSellerImage3.svg";
import GameSellerImage4 from "../assets/images/GameSellerImage4.svg";

export const product = [
  {
    name: "PlayStation",
    description: "VR GEAR VESION 2",
    bestSeller: true,
    imgSrc: FeaturedGear1,
    classImage: "featured-product-image",
  },
  {
    name: "Oculus Quest",
    description: "THE BEST WORLD GEAR",
    bestSeller: true,
    imgSrc: FeaturedGear2,
    classImage: "featured-product-image-2",
  },
  {
    name: "Samsung Gear",
    description: "NEW GENERATION",
    bestSeller: false,
    imgSrc: FeaturedGear3,
    classImage: "featured-product-image-3",
  },
  {
    name: "Samsung Gear",
    description: "NEW GENERATION 2",
    bestSeller: false,
    imgSrc: FeaturedGear4,
    classImage: "featured-product-image-4",
  },
];

export const gameSeller = [
  {
    name: "Carve Snowboarding",
    hastag: "#Arcade, #Simulation, #Sports",
    imgSrc: GameSellerImage1,
    content:
      "The creator of 1080 Snowboarding is back with an all new snowboarding experience! ",
    rating: "1,428 Ratings",
    price: "BUY NOW $19.99",
  },
  {
    name: "Beat Saber",
    hastag: "#Casual, #Music, #Sports",
    imgSrc: GameSellerImage2,
    content:
      "Beat Games studio brings fresh beats from Interscope Mixtape to Beat Saber!",
    rating: "3,039 Ratings",
    price: "BUY NOW $9.99",
  },
  {
    name: "Vacation Simulator",
    hastag: "#Casual, #Food, #Simulation",
    imgSrc: GameSellerImage3,
    content:
      "Welcome to the Vacation Simulator: a rough approximation of VACATION",
    rating: "2,119 Ratings",
    price: "BUY NOW $29.99",
  },
  {
    name: "Swarm",
    hastag: "#Action, #Flying, #Shooter",
    imgSrc: GameSellerImage4,
    content:
      "SWARM is a fast-paced, arcade-style grapple shooter, with quick sessions",
    rating: "569 Ratings",
    price: "BUY NOW $29.99",
  },
];
