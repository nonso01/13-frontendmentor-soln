import Button from "./Button";
import Input from "./Input";
import Paragraph from "./Paragraph";

function Form({ handleSubmit, handleInput, error}) {
	return (
		<div className="form">

		<form method="" className="fx col btw">

		<div className="fx btw">
		<Paragraph text={"Email address"} />
		{ error ? (
			<Paragraph
			error={error}
			text={"Valid email required"} />
		) : <Paragraph text={""} /> 
		}
		</div>

		<Input 
		placeHolder={"email@company.com"}
		handleInput={handleInput}
		error={error}/>

		<Button
		text={"Subscribe to monthly newsletter"} 
		handleSubmit={handleSubmit}/>

		</form>

		</div>
	);
}

export default Form;
