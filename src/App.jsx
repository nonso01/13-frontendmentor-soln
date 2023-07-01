import Heading from "./components/Heading";
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Button from "./components/Button";
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import Form from "./components/Form";
import Loader from "./components/Loader";

import { useState } from "react";

const log = console.log;

function dq(x = "") {
	return document.querySelector(x);
}

const root = dq("#root");

const matchEmail = /hello/;

const HUNDRED = 100;

//console.clear()

function App() {
	let [loaded, setLoaded] = useState(false);
	let [loadingCount, setLoadingCount] = useState(0);
	let [submit, setSubmit] = useState(false);
	let [email, setEmail] = useState("");
	let [wrongEmailFormat, setWrongEmailFormat] = useState(false);

	let [onMobile, setOnMobile] = useState(
		window.matchMedia("(max-width: 767.98px)")
	);

	onMobile.onchange = e => {
		setOnMobile(e.target)
		log(e)
	}

	root.onanimationiteration = () => {
		loadingCount >= HUNDRED ? setLoadingCount(HUNDRED) : setLoadingCount(++loadingCount)
	}

	root.onanimationend = () => {
		setLoaded(true);
	}

	function handleInput(e) {	
		const value = e.target.value;
		setEmail(value);
	}

	function handleSubmit(e) {
                log(e.target.className);
        }

	log(onMobile)


		if(!loaded) return ( 
			<Loader count={loadingCount} />
		)
	else if(loaded && !submit) return (
		<SignUp
                handleInput={handleInput}
                handleSubmit={handleSubmit}
		onMobile={onMobile.matches}
                wrongEmailFormat={wrongEmailFormat}/>
	)
	else return <Success />
}
export default App;

