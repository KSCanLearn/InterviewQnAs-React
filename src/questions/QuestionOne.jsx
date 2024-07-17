// @ts-nocheck

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

	return (
		<div>
			<input type="text" placeholder="Search here..." />
			{fruits.map((val, i) => {
				return <p key={i}> {val}</p>;
			})}
		</div>
	);
};

export default QuestionOne;
