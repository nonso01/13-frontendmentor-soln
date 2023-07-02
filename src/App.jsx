import SignUp from "./components/SignUp";
import Success from "./components/Success";
import Form from "./components/Form";
import Loader from "./components/Loader";

import { useState } from "react";

const log = console.log;

function dq(x = "") {
	return document.querySelector(x);
}

function len(x) {
	return x?.length;
}


const root = dq("#root");

const matchEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const HUNDRED = 100;

console.clear()

function App() {
	let [loaded, setLoaded] = useState(() => false);
	let [loadingCount, setLoadingCount] = useState(0);
	let [submit, setSubmit] = useState((n) => false);
	let [email, setEmail] = useState(() => "");
	let [wrongEmailFormat, setWrongEmailFormat] = useState(() => false);

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
		setLoaded(() => true);
	}

	function handleInput(e) {	
		let { value } = e.target
		setEmail(() => value);
	}

	const isEmail = matchEmail.test(email)

	function handleSubmit(e) {
		e.preventDefault()
		setWrongEmailFormat(() => !isEmail)

		if(!wrongEmailFormat && isEmail)
			setSubmit((n) => !n);
        }


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
	else return <Success email={email} />
}
export default App;

