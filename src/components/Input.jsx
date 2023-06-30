function Input({type = "email",
	placeHolder = "@email",
	name = "email",
	handleInput
}) {
	return (
		<input 
		type={ type } 
		placeholder={ placeHolder }
		required="required"
		className="input" 
		name={name}
		autoComplete="your-email"
		onInput={handleInput}
		/>
	);
}

export default Input;
