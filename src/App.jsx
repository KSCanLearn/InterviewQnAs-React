// @ts-nocheck
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionThre from "./questions/QuestionThre";

function App() {
	return (
		<>
			<div>
				<Router>
					<div className="navbar">
						<Link to="/q1"> Q1</Link>
						<Link to="/q2"> Q2</Link>
						<Link to="/q3"> Q3</Link>
					</div>
					<Routes>
						<Route path="/q1" element={<QuestionOne />} />
						<Route path="/q2" element={<QuestionTwo />} />
						<Route path="/q3" element={<QuestionThre />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
