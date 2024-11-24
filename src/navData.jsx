import { nanoid } from "nanoid";
import noidaImg from "./assets/noida.webp";
import nortGoaImg from "./assets/north-goa.webp";
import lonavalaImg from "./assets/lonavala.webp";
import northGoaImg from "./assets/north-goa.webp";
import alibagImg from "./assets/alibag.webp";
import puneImg from "./assets/pune.webp";
import karjatImg from "./assets/karjat.webp";
import southGoaImg from "./assets/south-goa.png";
import calanguteImg from "./assets/calangute.webp";
import jaipurImg from "./assets/jaipur.webp";
import newDelhiImg from "./assets/new-delhi.webp";
import puducherryImg from "./assets/puducherry.png";
import mahabaleshwarImg from "./assets/mahabaleshwar.png";
import thaneImg from "./assets/thane.png";
import manaliImg from "./assets/manali.webp";
import naviMumbaiImg from "./assets/navi-mumbai.webp";
import udaipurImg from "./assets/udaipur.png";
import londonImg from "./assets/london.png";
import anjunaImg from "./assets/anjuna.webp";
import andheriImg from "./assets/andheri.webp";
import kolhapurImg from "./assets/kolhapur.webp";
import palolemImg from "./assets/palolem.png";
import kolkataImg from "./assets/kolkata.webp";
import parisImg from "./assets/paris.webp";
import losAngImg from "./assets/los-angeles.png";
import nycityImg from "./assets/nycity.webp";
import miamiImg from "./assets/miami-beach.png";
import sfImg from "./assets/san-francisco.png";
import { BiCalendarStar } from "react-icons/bi";
import { PiFarmDuotone } from "react-icons/pi";
import { GiCastle } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { IoIosSnow } from "react-icons/io";
import { PiBuildingDuotone } from "react-icons/pi";
import { FaHouseTsunami } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { GiUfo } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { GiRiver } from "react-icons/gi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { GiIsland } from "react-icons/gi";
import { GiCastleRuins } from "react-icons/gi";

export const destinationsTabContent = [
  {
    recentSearches: [
      { city: "Noida", img: noidaImg, description: "Any week", id: nanoid() },
      {
        city: "North Goa",
        state: "Goa",
        description: "Guests interested in Noida also looked here",
        img: northGoaImg,
        id: nanoid(),
      },
    ],
    suggestedDestinations: [
      {
        city: "Lonavala",
        state: "Maharashtra",
        description: "For sights like Karla Caves",
        img: lonavalaImg,
        id: nanoid(),
      },
      {
        city: "Alibag",
        state: "Maharashtra",
        description: "For its seaside allure",
        img: alibagImg,
        id: nanoid(),
      },
      {
        city: "Pune",
        state: "Maharashtra",
        description: "Guests interested in Lonavala also looked here",
        img: puneImg,
        id: nanoid(),
      },
      {
        city: "Kajrat",
        state: "Maharashtra",
        description: "Great for a weekend getaway",
        img: karjatImg,
        id: nanoid(),
      },
      {
        city: "South Goa",
        state: "Goa",
        description: "Guests interested in North Goa also looked here",
        img: southGoaImg,
        id: nanoid(),
      },
      {
        city: "Calangute",
        state: "Goa",
        description: "For its bustling nightlife",
        img: calanguteImg,
        id: nanoid(),
      },
      {
        city: "Jaipur",
        state: "Rajasthan",
        description: "Guests interested in North Goa also looked here",
        img: jaipurImg,
        id: nanoid(),
      },
      {
        city: "New Delhi",
        state: "Delhi",
        description: "A short distance from your Noida search",
        img: newDelhiImg,
        id: nanoid(),
      },
      {
        city: "Puducherry",
        state: "Puducherry",
        description: "Guests interested in North Goa also looked here",
        img: puducherryImg,
        id: nanoid(),
      },
      {
        city: "Mahabaleshwar",
        state: "Maharashtra",
        description: "For nature lovers",
        img: mahabaleshwarImg,
        id: nanoid(),
      },
      {
        city: "Thane",
        state: "Maharashtra",
        description: "Known for its lakes",
        img: thaneImg,
        id: nanoid(),
      },
      {
        city: "Manali",
        state: "Himachal Pradesh",
        description: "Great for winter getaways",
        img: manaliImg,
        id: nanoid(),
      },
      {
        city: "Navi Mumbai",
        state: "Maharashtra",
        description: "Near you",
        img: naviMumbaiImg,
        id: nanoid(),
      },
      {
        city: "Udaipur",
        state: "Rajasthan",
        description: "For its stunning architecture",
        img: udaipurImg,
        id: nanoid(),
      },
      {
        city: "London",
        state: "United Kingdom",
        description: "Great for winter getaways",
        img: londonImg,
        id: nanoid(),
      },
      {
        city: "Anjuna",
        state: "Goa",
        description: "A short distance from your North Goa search",
        img: anjunaImg,
        id: nanoid(),
      },
      {
        city: "Andheri",
        state: "Maharashtra",
        description: "Near you",
        img: andheriImg,
        id: nanoid(),
      },
      {
        city: "Kolhapur",
        state: "Maharashtra",
        description: "Near you",
        img: kolhapurImg,
        id: nanoid(),
      },
      {
        city: "Palolem Beach",
        state: "Goa",
        description: "For its seaside allure",
        img: palolemImg,
        id: nanoid(),
      },
      {
        city: "Kolkata",
        state: "West Bengal",
        description: "For sights like Victoria Memorial",
        img: kolkataImg,
        id: nanoid(),
      },
      {
        city: "Paris",
        state: "France",
        description: "For its top-notch dining",
        img: parisImg,
        id: nanoid(),
      },
    ],
    id: nanoid(),
  },
  {
    recentSearches: [],
    suggestedDestinations: [
      {
        city: "Los Angeles",
        state: "United States",
        img: losAngImg,
        id: nanoid(),
      },
      {
        city: "New York City",
        state: "United States",
        img: nycityImg,
        id: nanoid(),
      },
      {
        city: "Miami Beach",
        state: "United States",
        img: miamiImg,
        id: nanoid(),
      },
      {
        city: "San Francisco",
        state: "United States",
        img: sfImg,
        id: nanoid(),
      },
    ],
    id: nanoid(),
  },
];

export const tabs = [
  { name: "Stays", id: destinationsTabContent[0].id },
  { name: "Experiences", id: destinationsTabContent[1].id },
];

export const travellersTab = [
  {
    personType: "Adults",
    ageGroup: "Ages 13 or above",
    amount: 0,
    id: nanoid(),
  },
  { personType: "Children", ageGroup: "Ages 2-12", amount: 0, id: nanoid() },
  { personType: "Infants", ageGroup: "Under 2", amount: 0, id: nanoid() },
  {
    personType: "Pets",
    ageGroup: "Bringing a service animal?",
    amount: 0,
    id: nanoid(),
  },
];

export const pageIcons = [
  {
    id: nanoid(),
    title: "Icons",
    icon: <BiCalendarStar className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Farms",
    icon: <PiFarmDuotone className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Castles",
    icon: <GiCastle className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Countryside",
    icon: <GiFarmTractor className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Arctic",
    icon: <IoIosSnow className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Top cities",
    icon: <PiBuildingDuotone className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Amazing views",
    icon: <FaHouseTsunami className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Amazing pools",
    icon: <FaSwimmingPool className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "OMG!",
    icon: <GiUfo className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Beachfront",
    icon: <TbBeach className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Lakefront",
    icon: <GiRiver className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Rooms",
    icon: <MdOutlineBedroomChild className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Treehouses",
    icon: <GiTreehouse className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Luxe",
    icon: <MdOutlineRoomService className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Cabins",
    icon: <GiWoodCabin className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Tiny homes",
    icon: <IoMdHome className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Islands",
    icon: <GiIsland className="page-icon" />,
  },
  {
    id: nanoid(),
    title: "Historical Homes",
    icon: <GiCastleRuins className="page-icon" />,
  },
];
