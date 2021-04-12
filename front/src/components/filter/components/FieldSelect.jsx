import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';

function FieldSelect({ className, name, component, filters }) {
  const [filter, setFilter] = useState();
  //ищем фильтр в базе фильтров по названию
  useEffect(() => {
    setFilter(filters.find((item) => item.name === name));
  }, [filters]);
  const options = filter
    ? filter.captions.map((item, idx) => (
        <option key={item + idx} value={item}>
          {item}
        </option>
      ))
    : null;

  return (
    <div className="form-group__inner">
      <i className="bi bi-chevron-down"></i>
      <Field {...{ name, className, component }}>
        <option value="false">Любое</option>
        {options}
      </Field>
    </div>
  );
}

export default FieldSelect;
