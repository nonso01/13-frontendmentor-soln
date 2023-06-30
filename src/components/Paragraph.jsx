function Paragraph({ text="description", error=false}) {
	return (
		<p className={ error ? "error" : "p"}>
		{ text }
		</p>
	);
}

export default Paragraph;
