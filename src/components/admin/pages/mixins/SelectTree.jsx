import React from 'react'

const SelectTree = ({ items },item) => {
    // const prefix = Array(level + 1).join("-- ")
    // console.log(`Select tree nè ${items}`);
    return (


        items?.map(item => {
            if(item.children){
                SelectTree(item.children)
            }
            return <option value={item._id}>{item.title}</option>
        })


    )
}

export default SelectTree