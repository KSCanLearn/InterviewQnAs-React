// @ts-nocheck

import { useState } from "react";

/**
 * Search Filter
 *
 */

const QuestionOne = () => {
	const fruits = [
		"Apples",
		"Apricot",
		"BananBlackberry",
		"Blueberry",
		"Boysenberry",
		"Canary Melon",
		"Cantaloupe",
	];

	const [searchInput, setSearchInput] = useState("");
	const fruitsFiltered = fruits.filter((val) =>
		val.toLocaleLowerCase().includes(searchInput)
	);

	return (
		<div>
			<input
				type="text"
				placeholder="Search here..."
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			{searchInput}
			{fruitsFiltered.map((val, i) => {
				return <p key={i}> {val}</p>;
			})}
		</div>
	);
};

export default QuestionOne;
