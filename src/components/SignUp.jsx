import Heading from "./Heading";
import Form from "./Form";
import List from "./List";
import Paragraph from "./Paragraph";

import IllustrationSignUpLarge from "../assets/images/illustration-sign-up-desktop.svg";
import IllustrationSignUpSmall from "../assets/images/illustration-sign-up-mobile.svg";


import { useState } from "react";

function SignUpCard({handleSubmit}) {
	function handleClick() {
		console.log("clicked");
	}

	return (
		<div className="sign-up shadow-low"
		onClick={handleClick}> 

		<div className="card">  
		<Heading text={"Stay updated!"} />
		<Paragraph text={"Join 60,000+ product managers receiving monthly updates on:"} />
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

