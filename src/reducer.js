import { GO_TO_PAGE, TOGGLE_LIKE } from "./actions";
import { otherPagesData } from "./mainData";

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === GO_TO_PAGE) {
    const { id, index, title } = payload;

    const [tempPage] = otherPagesData.filter((item) => {
      // console.log(item.id, item.type);

      return item.type === title.toLowerCase() || item.id === id;
    });

    if (index === -1) {
      // console.log(tempPage);
      return { currentPage: tempPage?.data };
    }
    return { ...state, currentPage: otherPagesData[index - 1]?.data };
  }

  if (type === TOGGLE_LIKE) {
    const { index } = payload;
    const { currentPage } = state;
    const newItem = {
      ...currentPage[index],
      isLiked: !currentPage[index].isLiked,
    };

    const newCurrPage = [ ...currentPage ];
    newCurrPage[index] = newItem;

    return { currentPage: newCurrPage };
  }

  throw Error("Error");
};

export default reducer;
