import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div>
				<h2>TodoList TS</h2>
				<form onSubmit={() => {}}>
					<input type="text" onChange={() => {}} className="inputText"></input>
					<input type="submit" value="作成" className="submitButton"></input>
				</form>
			</div>
		</div>
	);
}

export default App;
