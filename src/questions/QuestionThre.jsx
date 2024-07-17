// @ts-nocheck

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * Create a Phone Number Input
 * Expected Outcome in the input: (999)123-45678
 */

const PhoneNumberInput = ({ maxLength = 10 }) => {
	const [inputText, setInputText] = useState("");
	const inputRef = useRef(null);
	const carretPositionRef = useRef(0);

	function onInputTextChange(e) {
		const target = e.target;
		const currentValue = target.value;
		const selectionStart = target.selectionStart;
		// \D means NOT DIGIT
		// Whatever input char is not digit, replace with empty string.
		const numbers = currentValue.replace(/\D/g, "");

		const size = numbers.length;

		if (size > maxLength) return;

		const formattedValue = [];
		for (let i = 0; i < size; i++) {
			if (size > 3 && i === 0) {
				formattedValue.push("(");
			}

			formattedValue.push(numbers[i]);

			if (size > 3 && i === 2) {
				formattedValue.push(")");
			}

			if (size > 6 && i === 5) {
				formattedValue.push("-");
			}
		}

		const diff = formattedValue.length - currentValue.length;
		if (selectionStart) {
			carretPositionRef.current = selectionStart + diff;
		}

		setInputText(formattedValue.join(""));
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.setSelectionRange(
				carretPositionRef.current,
				carretPositionRef.current
			);
		}
	}, [inputText]);

	return (
		<input
			ref={inputRef}
			value={inputText}
			placeholder={"Phone Number..."}
			onChange={onInputTextChange}
		/>
	);
};

PhoneNumberInput.propTypes = {
	maxLength: PropTypes.number,
};

const QuestionThre = () => {
	return (
		<div>
			<PhoneNumberInput maxLength={10} />
		</div>
	);
};

export default QuestionThre;
