import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getDb, getAll, getApi } from '../../redux/actions';

function CreatedOrExist() {

    const [filtrado, setFiltrado] = useState('')

    useEffect(() => {
        if (filtrado === 'Created'){
            dispatch(getDb())
        }
        if (filtrado === 'All' || filtrado === ''){
            dispatch(getAll())
        }
        if(filtrado === 'Api'){
            dispatch(getApi())
        }
    }, [filtrado])

    const dispatch = useDispatch();

   /*  function handleDborApi(e) {
        if (filtrado === 'created'){
            dispatch(getDb())
        }
        } */
    
    return (
        <div>
            <select onChange={(e) => setFiltrado(e.target.value)}>
                <option value=''>Filter by origin</option>
                <option>All</option>
                <option>Created</option>
                <option>Api</option>
            </select>
            
        </div>
    )
}

export default CreatedOrExist;