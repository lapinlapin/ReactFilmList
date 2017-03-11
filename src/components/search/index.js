import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class SearchInput extends Component {
    render() {
        const { onSearch } = this.props;

        return (
            <div className="search-input">
                <TextField onChange={onSearch} hintText="Название фильма"/>
            </div>
        );
    }
}

SearchInput.propTypes = {
    onSearch: React.PropTypes.func.isRequired
};

export default SearchInput;
