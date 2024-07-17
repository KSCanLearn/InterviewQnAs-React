// @ts-nocheck

/**
 * Debouce Hook Tester
 * Expected Outcome: Have a delay to display the debounced value
 */

import { useState, useEffect } from "react";

// by right should be in another file
const useDebounce = (text = "", delay = 1000) => {
	const [debounceText, setDebounceText] = useState(text);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setIsLoad(true);
		const timer = setTimeout(() => {
			// Fetch API call to get something
			// Refer to this: https://www.youtube.com/watch?v=VdAlFWBUGV4 for having AbortController
			setDebounceText(text);
			setIsLoad(false);
		}, delay);

		return () => {
			clearTimeout(timer);
			setIsLoad(false);
		};
	}, [text, delay]);

	return [debounceText, isLoad];
};

const QuestionTwo = () => {
	const [text, setText] = useState("");
	const [debounceText, isLoad] = useDebounce(text, 2000);

	return (
		<div>
			<h2>Debounce Hook Tester</h2>
			<input
				type="text"
				onChange={(e) => setText(e.target.value)}
				placeholder="Type something..."
			/>
			<p>Debounced value: {text.length > 0 && isLoad ? "Waiting..." : debounceText}</p>
		</div>
	);
};

export default QuestionTwo;
