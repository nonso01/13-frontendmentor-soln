import { useState } from "react";

function Button({text="hello", type = "submit", handleSubmit}) {

	return (
		<button className="btn"
		onClick={handleSubmit}
		type={type}>
		{ text }
		</button>
	);
}

export default Button;
