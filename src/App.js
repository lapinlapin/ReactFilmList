import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FilmForm from './components/form';
import Table from './components/table';
import { connect } from 'react-redux';

import { 
    searchFilm,
	sortTable,
	addFilm,
	setRating,
	changeFilmType,
	changeFilmYear,
	changeFilmName,
	triggerError,
    getMore
} from './actions';
import { filteredArrayOfName, resetData } from './utils';
import { filmsYear, filmsType } from './static';

const formData = {
	name: '',
	type: '',
	year: '',
	rating: ''
};

const mapStateToProps = (state) => {
	const filmsData = state.filmListReducer.items;
	const searchStr = state.filmListReducer.queryStr.toLowerCase();
	const sortField = state.filmListReducer.sortField;

	return {
		filmsData: filteredArrayOfName(filmsData, searchStr),
		rate: state.filmListReducer.rate,
		filmType: state.filmListReducer.filmType,
		filmYear: state.filmListReducer.filmYear,
		filmName: state.filmListReducer.filmName,
		errorMsg: state.filmListReducer.error,
        toShow: state.filmListReducer.toShow
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchFilm: (evt, title) => {
			dispatch(searchFilm(title));
		},

		onSortColumn: (column) => () => {
			dispatch(sortTable(column));
		},

		onHandleSubmit: (evt) => {
			evt.preventDefault();

			if (formData.name) {
				dispatch(addFilm(Object.assign({}, formData)));
				//reset form controls
				dispatch(setRating(0));
				dispatch(changeFilmName(''));
				dispatch(changeFilmType(''));
				dispatch(changeFilmYear(''));
				dispatch(triggerError(false));
				resetData(formData);
			} else {
				dispatch(triggerError(true));
			}
		},

		onSetRate: (rate) => () => {
			formData.rating = rate;
			dispatch(setRating(rate));
		},

		onChangeFilm: (evt, str) => {
			formData.name = str;
			dispatch(changeFilmName(str));
		},

		onChangeSelect: (formKey, formData) => (event, index, value) => {
			formData[formKey] = value;

			if (formKey === 'type') {
				dispatch(changeFilmType(value));
			}

			if (formKey === 'year') {
				dispatch(changeFilmYear(value));
			}
		},

        onGetMore: () => {
            dispatch(getMore());
        }
	};
};

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="main-wrapper">
					<FilmForm 
						onSubmit={this.props.onHandleSubmit}
						onChange={this.props.onChangeFilm}
						filmName={this.props.filmName}
						rate={this.props.rate}
						onSetRate={this.props.onSetRate}
						valueType={this.props.filmType}
						valueYear={this.props.filmYear}
						onChangeSelect={this.props.onChangeSelect}
						errorMsg={this.props.errorMsg}
						formData={formData}
						filmsYear={filmsYear}
						filmsType={filmsType}
					/>
					<Table
						onSearch={this.props.onSearchFilm}
						onSort={this.props.onSortColumn}
						items={this.props.filmsData}
						onSetRate={this.props.onSetRate}
                        toShow={this.props.toShow}
                        onGetMore={this.props.onGetMore}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
