import PropTypes from 'prop-types';
import { memo } from 'react';
const Filter = ({ filter}) => {    

    const handleChange=({target})=>{
        const {value}=target
       return filter(value)
    }
 
    return (

        <div className="form-group">
            <label htmlFor="" className="form-group-label">Фильтр:</label>
            <input  name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="по имени 'жертвы'" />
        </div>
    )
}

export default memo(Filter);
Filter.propTypes={
        handleChange:PropTypes.func.isRequired,
}