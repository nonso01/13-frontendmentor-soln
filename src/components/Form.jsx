import Button from "./Button";
import Input from "./Input";
import Paragraph from "./Paragraph";

import { useState } from "react";

function Form({ handleSubmit, handleInput }) {
	return (
		<div className="form">
		<form method="">
		
		<Paragraph text={"Email address"} />

		<Input 
		placeHolder={"email@company.com"}
		handleInput={handleInput}/>

		<Button
		text={"Subscribe to monthly newsletter"} 
		handleSubmit={handleSubmit}/>

		</form>
		</div>
	);
}

export default Form;
