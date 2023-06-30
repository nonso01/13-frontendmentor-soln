function Loader({loaded=false, count = 0}) {
	if(loaded) {
		return;
	}
	else {
		return (
			<div className="loader">
			<div className="counter"></div>
			</div>
		);
	}
}

export default Loader;
