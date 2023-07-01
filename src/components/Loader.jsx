import Heading from "./Heading";

function Loader({loaded=false, count = 0}) {
	if(loaded) {
		return;
	}
	else {
		return (
			<div 
			className="loader fx cn"
			style={{"--count": `${count}%`}}>
			<div className="counter fx cn">
			<Heading text={`${count}%`} />
			</div>
			</div>
		);
	}
}

export default Loader;
