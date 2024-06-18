import React from 'react';
import Button from 'react-bootstrap/Button';
const FilterStatus = ({data}) => {
    const filterState = data;
    
    return (
        <>
        {
            filterState.map((item) => {
                return <Button value={item.status} style={{marginRight:"2px"}} variant="outline-success" active={item.active}  button-status={item.status} >{item.name}</Button>
            })
        }
        </>
    )
}

export default FilterStatus