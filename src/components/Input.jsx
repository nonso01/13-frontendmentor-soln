function Input({type = "email",
	placeHolder = "@email",
	cssName,
	name
}) {
	return (
		<>
		<input 
		type={ type } 
		placeholder={ placeHolder }
		className={ cssName ? cssName : "input" } 
		name={name}
		/>
		</>
	);
}

export default Input;