import React from "react";

//create your first component
const Home = (props) => {
	return (
		<>
			<h1 className="bg-black text-light h-100">Contador: {props.numero1}{props.numero2}{props.numero3}{props.numero4}{props.numero5}{props.numero6}</h1>
			
		</>
	);
};

export default Home;
