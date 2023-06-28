import Heading from "./components/Heading";
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Button from "./components/Button";
import SignUp from "./components/SignUp";
import Success from "./components/Success";


import { useState } from "react";

function App() {
	return (
	<>
		<Heading />
		<Input />
		<Button text={"counter"} />
		<Paragraph />
	</>
	)
}
export default App

