import * as constant from './constant';

const initState = {
  listMovie: [],
  isLoading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_LIST_MOVIE:
      return {
        ...state,
        listMovie: action.data
      }
    default:
      return state;
  }
}

export default reducer;