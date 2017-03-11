const ADD_NEW = 'ADD_NEW';
const SEARCH_FILM = 'SEARCH_FILM';
const SORT_TABLE = 'SORT_TABLE';
const SET_RATING = 'SET_RATING';
const CHANGE_TYPE = 'CHANGE_TYPE';
const CHANGE_YEAR = 'CHANGE_YEAR';
const CHANGE_FILM = 'CHANGE_FILM';
const TRIGGER_ERROR = 'TRIGGER_ERROR';
const GET_MORE = 'GET_MORE';

export const addFilm = data => {
	return {
		type: ADD_NEW,
		filmData: data
	};
};

export const searchFilm = title => {
	return {
		type: SEARCH_FILM,
		title
	};
};

export const sortTable = field => {
	return {
		type: SORT_TABLE,
		field
	};
};

export const setRating = rate => {
	return {
		type: SET_RATING,
		rate
	};
};

export const changeFilmType = filmType => {
	return {
		type: CHANGE_TYPE,
		filmType
	};
};

export const changeFilmYear = filmYear => {
	return {
		type: CHANGE_YEAR,
		filmYear
	}
};

export const changeFilmName = filmName => {
	return {
		type: CHANGE_FILM,
		filmName
	};
};

export const triggerError = error => {
	return {
		type: TRIGGER_ERROR,
		error
	};
};

export const getMore = () => {
	return {
		type: GET_MORE
	};
};
