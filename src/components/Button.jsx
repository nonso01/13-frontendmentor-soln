import { useState } from "react";

function Button({text="hello"}) {
	let [c, setC] = useState(0)
	function counter() {
		setC(c + 1);
	}

	return (
		<button className="btn" onClick={counter}>
		{ text } { c }
		</button>
	);
}

export default Button;
