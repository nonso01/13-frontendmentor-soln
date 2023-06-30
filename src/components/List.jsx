
function List({}) {
	const listItems = [
        "Product discovery and building what matters",
        "Measuring to ensure updates are a success",
        "And much more!"
].map((v, k) => <li key={k}> {v} </li>)

	return (
		<div className="list">
		<ul> {listItems} </ul>
		</div>
	);
}

export default List;
