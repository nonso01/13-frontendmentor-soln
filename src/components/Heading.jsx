import { useState } from "react";

function Heading({text = "later sign up test"}) {
	return (
		<h1 className="main-heading">
		{ text }
		</h1>
	);
}

export default Heading;
