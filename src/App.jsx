import Heading from "./components/Heading";
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Button from "./components/Button";
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import Form from "./components/Form";

import { useState } from "react";

const log = console.log;
const matchEmail = /hello/;

function dq(x = "") {
	return document.querySelector(x);
}

console.clear()
function App() {
	let [loaded, setLoaded] = useState(false);
	let [submit, setSubmit] = useState(false);
	let [email, setEmail] = useState("");

	function handleInput(e) {
		e.stopPropagation();
		
		const value = e.target.value;
		setEmail(value);
	}

	function handleSubmit(e) {
                e.stopPropagation();
                log(e.target.className);
        }


	if(!submit) return (
		<SignUp 
		handleInput={handleInput}
		handleSubmit={handleSubmit}/>
	);
		else return <Success />
}
export default App;

