import { createContext, useContext, useReducer, useRef, useState } from "react";
import { destinationsTabContent, travellersTab } from "./navData";
import { otherPagesData } from "./mainData";
import reducer from "./reducer";
import {
  GO_TO_PAGE,
  SET_MIN_MAX_RANGE,
  TOGGLE_LIKE,
  TOGGLE_PLACE_TYPE,
} from "./actions";
import reducer2 from "./reducer2";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [currentTab, setCurrentTab] = useState(destinationsTabContent[0]);
  const [modalTab, setModalTab] = useState(1);
  const [travellers, setTravellers] = useState(
    travellersTab.map((item) => ({ ...item }))
  );
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const modalRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [likeIndex, setLikeIndex] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [modalNum, setModalNum] = useState(-1);
  const [navMidTab, setNavMidTab] = useState("stays");
  const [modal3Details, setModal3Details] = useState(null);
  const [isEmail, setIsEmail] = useState(false);

  const showDetails = (details) => {
    setModal3Details(details);
  };

  const handleShowTotal = () => {
    setShowTotal((showTotal) => {
      return !showTotal;
    });
  };

  const initialState = {
    currentPage: otherPagesData[0]?.data,
  };

  const initialState2 = {
    placeTypes: ["Any type", "Room", "Entire home"],
    placeType: "Any type",
    priceRange: { min: 860, max: 54000 },
    quantity: { bedrooms: "Any", beds: "Any", bathrooms: "Any" },
    amenities: {
      available: [
        "Wifi",
        "Kitchen",
        "Washing machine",
        "Dryer",
        "Air conditioning",
        "Heating",
      ],
      added: [],
    },
    options: { instantBook: false, selfCheckIn: false, allowPets: false },
    selectGuestFav: false,
    totalPlacesFound: 373,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer2, initialState2);

  const goToPage = (id, title, index) => {
    dispatch({ type: GO_TO_PAGE, payload: { id, title, index } });
  };

  const toggleLike = (index) => {
    dispatch({ type: TOGGLE_LIKE, payload: { index } });
  };

  const togglePlaceType = (placeType) => {
    dispatch2({ type: TOGGLE_PLACE_TYPE, payload: { placeType } });
  };

  const setRange = (type, val) => {
    dispatch2({ type: SET_MIN_MAX_RANGE, payload: { type, val } });
  };

  const openDestinations = () => {
    setIsDestinationsOpen(true);
  };

  const closeDestinations = () => {
    if (modalRef.current) modalRef.current.scrollTo(0, 0);
    setIsDestinationsOpen(false);
  };

  const resetTravellerList = () => {
    setTravellers(travellersTab.map((item) => ({ ...item })));
  };

  const openModal = (id = 1) => {
    if (!isModalOpen && id === 1) setIsModalOpen(true);
    else if (!isModalOpen2 && id === 2) setIsModalOpen2(true);
    else if (!isModalOpen3 && id === 3) setIsModalOpen3(true);
    else if (!isModalOpen4 && id === 4) setIsModalOpen4(true);
  };

  const closeModal = (id) => {
    if (isModalOpen && id === 1) {
      setIsModalOpen(false);
      resetTravellerList();
      setModalTab(1);
      setCurrentTab(destinationsTabContent[0]);
      setIsDestinationsOpen(false);
    }
    if (isModalOpen2 && id === 2) setIsModalOpen2(false);
    if (isModalOpen3 && id === 3) setIsModalOpen3(false);
    if (isModalOpen4 && id === 4) setIsModalOpen4(false);
  };

  const changeTab = (index) => {
    setCurrentTab(destinationsTabContent[index]);
    setModalTab(1);
  };

  const handleScroll = () => {
    if (modalRef.current) setIsAtTop(modalRef.current.scrollTop === 0);
    if (pageRef.current) setIsAtTop(pageRef.current.scrollTop === 0);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        currentTab,
        changeTab,
        modalTab,
        setModalTab,
        travellers,
        setTravellers,
        resetTravellerList,
        isDestinationsOpen,
        openDestinations,
        closeDestinations,
        modalRef,
        handleScroll,
        isAtTop,
        setIsAtTop,
        state,
        goToPage,
        isModalOpen2,
        toggleLike,
        likeIndex,
        setLikeIndex,
        showTotal,
        handleShowTotal,
        modalNum,
        setModalNum,
        navMidTab,
        setNavMidTab,
        isModalOpen3,
        modal3Details,
        showDetails,
        isEmail,
        setIsEmail,
        isModalOpen4,
        state2,
        togglePlaceType,
        setRange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
