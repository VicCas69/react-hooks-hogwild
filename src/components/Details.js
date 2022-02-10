import React from "react";

function Details({ details }){
    return(
        <div>
            {details.map((detail)=>{
                return <ul className="TwirlyPig">
                        <li><h2>Specialty:</h2> {detail.specialty}</li>
                        <li><h2>Weight: </h2>{detail.weight}</li>
                        <li><h2>Greased: </h2>{detail.greased===true ? "Yes" : "No" }</li>
                        <li><h2>Highest Medal: </h2>{detail["highest medal achieved"]}</li>
                        </ul>
                })}
        </div>
    )

}

export default Details;