import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Select  from '../selectField';
import Rating from '../rating';

class FilmForm extends Component {
  render() {
    const { 
        onSubmit, 
        onChange,
        filmName,
        formData, 
        filmsType, 
        filmsYear, 
        rate, 
        onSetRate,
        valueType,
        valueYear,
        onChangeSelect,
        errorMsg
    } = this.props;

    return (
      <form name="form" className="films-form" onSubmit={onSubmit}>
        <TextField value={filmName} onChange={onChange} hintText="Фильм"/>
        {errorMsg && <span className="films-form__error-msg">Обязательное поле</span>}
        <Select formData={formData} formKey="type" onChangeSelect={onChangeSelect} value={valueType} items={filmsType} hint="Жанр"/>
        <Select formData={formData} formKey="year" onChangeSelect={onChangeSelect} value={valueYear} items={filmsYear} hint="Год выпуска"/>
        <div className="films-form__rating">Рейтинг</div>
        <Rating rate={rate} onSetRate={onSetRate}/>
        <RaisedButton className="form__submit" type="submit" label="Сохранить"/>
      </form>
    );
  }
}

FilmForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    filmName: React.PropTypes.string.isRequired,
    formData: React.PropTypes.object.isRequired,
    filmsType: React.PropTypes.array.isRequired,
    filmsYear: React.PropTypes.array.isRequired,
    rate: React.PropTypes.number.isRequired,
    onSetRate: React.PropTypes.func.isRequired,
    valueType: React.PropTypes.string.isRequired,
    valueYear: React.PropTypes.string.isRequired,
    onChangeSelect: React.PropTypes.func.isRequired,
    errorMsg: React.PropTypes.bool.isRequired

};

export default FilmForm;