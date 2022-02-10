import React from "react";

function Filter({ handleSearch, handleSelect}){
    return (
        <div>
            <input type="text" name="search" placeholder="Search by name or weight" className="filterWrapper" onChange={handleSearch}/>
            <select onChange={handleSelect}>
                <option value="All">All</option>
                <option value="true">Greased</option>
                <option value="false">No Greased</option>
            </select>

        </div>
    )
}

export default Filter;