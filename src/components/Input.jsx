function Input({type = "email",
	placeHolder = "@email",
	cssName = "input",
	name = "email"
}) {
	return (
		<input 
		type={ type } 
		placeholder={ placeHolder }
		required="required"
		className={ cssName } 
		name={name}
		autoComplete="your-email"
		/>
	);
}

export default Input;
