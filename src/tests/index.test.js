import { addFilm } from '../actions';
import { filmListReducer } from '../reducers/filmListReducer';
import { filmsData } from '../static';
import { sortArrayOfColumn } from '../utils';

const initialState = {
    items: filmsData,
    queryStr: '',
    rate: 0,
    filmType: '',
    filmYear: '',
    filmName: '',
    error: false,
    toShow: 3
};

it('REDUCER: should return the initial state', () => {
    expect(filmListReducer(undefined, {})).toEqual(initialState);
});

it('ACTION: should create an action to add new film', () => {
    const filmData = {name: 'Один дома', type: 'Комедия', year: 2014, rating: 2};
    
    expect(addFilm(filmData)).toEqual({
      type: 'ADD_NEW',
      filmData
    });
});

it('REDUCER: set rate', () => {
    expect(filmListReducer(initialState, {
        type: 'SET_RATING',
        rate: 5
     })).toEqual({...initialState, rate: 5});
});

it('REDUCER: trigger error', () => {
    expect(filmListReducer(initialState, {
        type: 'TRIGGER_ERROR',
        error: true
     })).toEqual({...initialState, error: true});
});

it('REDUCER: sort table', () => {
    expect(filmListReducer(initialState, {
        type: 'SORT_TABLE',
        field: 'name'
    })).toEqual({
        ...initialState,
        items: sortArrayOfColumn(initialState.items, 'name')
    });
});
