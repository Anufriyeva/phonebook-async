import React from 'react';
import {Label, Input} from '../ContactForm/ContactForm.styles';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filterSlice';

const Filter = ({ filter }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <Label>
        Filter contacts by name:
        <Input
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </div>
  );
};

export default Filter;