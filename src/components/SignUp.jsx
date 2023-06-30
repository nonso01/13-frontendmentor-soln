import Heading from "./Heading";
import Form from "./Form";
import List from "./List";
import Paragraph from "./Paragraph";

import IllustrationSignUpLarge from "../assets/images/illustration-sign-up-desktop.svg";
import IllustrationSignUpSmall from "../assets/images/illustration-sign-up-mobile.svg";


import { useState } from "react";

function SignUpCard({handleSubmit,
	handleInput,
	wrongEmailFormat}) {

	return (
		<div className="sign-up shadow-low"> 

		<div className="card">  
		<Heading text={"Stay updated!"} />

		<Paragraph text={"Join 60,000+ product managers receiving monthly updates on:"} />

		<List />

		<Form
		handleSubmit={handleSubmit}
		handleInput={handleInput}
		error={wrongEmailFormat}/>
		</div>

		<div className="card-image"> 
		<img
		src={IllustrationSignUpLarge} 
		alt="illustration sign up" />
		</div>

		</div>
	);
}

export default SignUpCard;

