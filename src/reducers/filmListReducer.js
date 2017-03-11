import { filmsData } from '../static';
import { sortArrayOfColumn } from '../utils';

const inititalFilmListState = {
    items: filmsData,
    queryStr: '',
    rate: 0,
    filmType: '',
    filmYear: '',
    filmName: '',
    error: false,
    toShow: 3
};

export const filmListReducer = (state = inititalFilmListState, action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return {
                ...state,
                items: [action.filmData].concat(state.items)
            } 

        case 'SEARCH_FILM':
            return {
                ...state, 
                queryStr: action.title
            };

        case 'SORT_TABLE':
            return {
                ...state,
                items: sortArrayOfColumn(state.items, action.field)
            };

        case 'SET_RATING':
            return {
                ...state,
                rate: action.rate
            }

        case 'CHANGE_TYPE':
            return {
                ...state,
                filmType: action.filmType
            };

        case 'CHANGE_YEAR':
            return {
                ...state,
                filmYear: action.filmYear
            };

        case 'CHANGE_FILM':
            return {
                ...state,
                filmName: action.filmName
            };

        case 'TRIGGER_ERROR':
            return {
                ...state,
                error: action.error
            }

        case 'GET_MORE':
            return {
                ...state,
                toShow: state.toShow + 3
            }

        default: 
            return state;
	};
};
