import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";

import IconSuccess from "../assets/images/icon-success.svg";

function Success({email = "me@gmail.com"}) {
	return (
		<div 
		className="success shadow-low fx col btw">

		<div className="dummy fx col btw">

		<div className="success-icon">
		<img src={IconSuccess} alt="success icon" />
		</div>

		<Heading text={"Thanks for subscribing!"} />

		<Paragraph
		text={`A confirmation email has been sent to 
			${email} Please open it and click the button inside to confirm your subscription.`} />

		</div>

		<Button
		type={"button"} 
		text={"Dismiss message"}/>

		</div>
	);
}

export default Success;

