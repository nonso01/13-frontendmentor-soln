function Loader({loaded=false}) {
	if(loaded) {
		return;
	}
	else {
		return (
			<div className="loader"> </div>
		);
	}
}

export default Loader;
