import React from "react";

function Tile({ name, img, handleDetails }){

    return(
        <div className="pigTile" onClick={handleDetails}>
            <h2 className="achivementText" >{name}</h2>
            <img src={img}
            alt="image" 
            width={'400px'} 
            height={"300px"} 
            name={name}/>            
        </div>
    )

}

export default Tile;