import Heading from "./components/Heading";
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Button from "./components/Button";
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import Form from "./components/Form";
import { log } from "./components/util";

import { useState } from "react";


function App() {
	let [submit, setSubmit] = useState(false);
	let [email, setEmail] = useState("");

	if(!submit) return <SignUp />
		else return <Success />
}
export default App

