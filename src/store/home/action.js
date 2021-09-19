import * as constant from './constant';

export const getListMovie = (data) => {
    return {
        type: constant.GET_LIST_MOVIE,
        data: data
    }
};
