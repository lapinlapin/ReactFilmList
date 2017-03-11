import React, { Component, PropTypes } from 'react';
import { generateId } from '../../utils';
import SearchInput from '../search';
import Rating from '../rating';
import RaisedButton from 'material-ui/RaisedButton';

const tableConfig = {
	columns: [
		{title: 'Название', sortField: 'name'},
		{title: 'Жанр', sortField: 'type'},
		{title: 'Год', sortField: 'year'},
		{title: 'Рейтинг', sortField: 'rating'}
	]
};

class Table extends Component {
	render() {
		const { items, onSearch, onSort, onSetRate, toShow, onGetMore } = this.props;
	
		return (
			<div className="table-wrapper">
				<SearchInput onSearch={onSearch}/>
				<table className="film-list">
					<thead>
					<tr className="film-list__head">
						{tableConfig.columns.map(column => {
							return (
								<th 
									className="film-list__head-item" 
									key={generateId()}
									onClick={onSort(column.sortField)}
								>{column.title}</th>
							)
						})}
					</tr>
					</thead>
					<tbody>
						{!!items && !items.length && <tr><td className="error-msg">Фильмов в списке нет...</td></tr>}
						{items.slice(0, toShow).map(film => {
							return (
								<tr className="film-list__row" key={generateId()}>
									{Object.keys(film).map(td => {
										const tmpl = (td !== 'rating') 
											?
											<td className="film-list__row-item" key={generateId()}>{film[td]}</td>
											:
											<td className="film-list__row-item" key={generateId()}>{<Rating rate={film[td]} onSetRate={onSetRate}/>}</td>
										return (
											tmpl
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
				{toShow < items.length && <RaisedButton className="film-list__more" onClick={onGetMore} label="Показать еще"/>}
			</div>
		)
	};
};

Table.propTypes = {
    items: React.PropTypes.array.isRequired,
    onSearch: React.PropTypes.func.isRequired,
    onSort: React.PropTypes.func.isRequired,
    onSetRate: React.PropTypes.func.isRequired,
    toShow: React.PropTypes.number.isRequired,
    onGetMore: React.PropTypes.func.isRequired
};
 
export default Table;
