import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Details from "./Details";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {

	const [details, setDetails] = useState([])
	const [search, setSearch] = useState("");
	const [select, setSelect] = useState("All")

	function handleDetails(e){
		const details = hogs.filter((hog)=> hog.name === e.target.name)
		setDetails(details)
	}

	function handleSearch(e){
		setSearch(e.target.value)
	}

	function handleSelect(e){
		setSelect(e.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<Filter handleSearch={handleSearch} handleSelect={handleSelect}/>
			{hogs.filter(hog => select === "All" || hog.greased.toString() === select)
					.filter((hog)=> search === "" || hog.name.toLowerCase() === search.toLowerCase() || hog.weight.toString() === search )
					.map((hog)=>{
						return <Tile name={hog.name} img={hog.image} handleDetails={handleDetails}/>})}
			{details !== [] ? <Details details={details}/> : []}			
		</div>
	);
}

export default App;
