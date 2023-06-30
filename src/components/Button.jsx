import { useState } from "react";

function Button({text="hello", handleSubmit}) {

	return (
		<button className="btn"
		onClick={handleSubmit}>
		{ text }
		</button>
	);
}

export default Button;
