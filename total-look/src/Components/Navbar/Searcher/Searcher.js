import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Searcher.css';

const Searcher =()=>{

    // const [search,setSearch]= useState([]);
    const initialStateValues = {
        busqueda: '',
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        console.log(setValues.name);
    };

    // onChange=async e =>{
    //     await this.setValues({busqueda: e.target.value});

    // }

    return(
        <div className='searcher'>
            <input
                    type="text"
                    placeholder="Buscar"
                    className="textField"
                    name="busqueda"
                    value={values.busqueda}
                    onChange={handleInputChange}
                />
                <button type="button" className="btnBuscar">
                <FontAwesomeIcon icon={faSearch} />
                </button>
        </div>
    )
}

export default Searcher;