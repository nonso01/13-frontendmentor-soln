import Button from "./Button";
import Input from "./Input";
import Paragraph from "./Paragraph";

import { useState } from "react";

function Form({}) {
	return (
		<div className="form">
		<form method="">
		
		<Paragraph text={"Email address"} />

		<Input placeHolder={"email@company.com"} />

		<Button
		text={"Subscribe to monthly newsletter"} />

		</form>
		</div>
	);
}

export default Form;
