import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { generateId } from '../../utils';

class Select extends Component {
    render() {
    	const { items, formData, formKey, hint, value, onChangeSelect} = this.props;

        return (
        	<div className="select-block">
	            <SelectField 
	            	floatingLabelText={hint}
	            	value={value}
	            	onChange={onChangeSelect(formKey, formData)}>
	            	{items.map(option => {
	            		return <MenuItem 
	            			key={generateId()} 
	            			value={option} 
	            			primaryText={option}
	            		/>
	            	})}	
				</SelectField>
			</div>
        );
    }
}

Select.propTypes = {
    items: React.PropTypes.array.isRequired,
    formData: React.PropTypes.object.isRequired,
    formKey: React.PropTypes.string.isRequired,
    hint: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChangeSelect: React.PropTypes.func.isRequired
};

export default Select;
