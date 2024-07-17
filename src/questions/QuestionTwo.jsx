// @ts-nocheck

/**
 * Debouce Hook Tester
 */

import { useState } from "react";

const QuestionTwo = () => {
	const [text, setText] = useState();

	return (
		<div>
			<h2>Debounce Hook Tester</h2>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type something..."
			/>
			<p>Debounced value: </p>
		</div>
	);
};

export default QuestionTwo;
