import React, { useState } from "react";
import "./App.css";
import { randomInt } from "crypto";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<todo[]>([]);
	type todo = {
		inputValue: string;
		id: number;
		checked: boolean;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); //preventReload

		const newTodo: todo = {
			inputValue: inputValue,
			id: todos.length,
			checked: false,
		};
		setTodos([newTodo, ...todos]);
		setInputValue("");
	};

	const handleEdit = (id: number, inputValue: string) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.inputValue = inputValue;
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleChecked = (id: number, checked: boolean) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) todo.checked = !checked;
			return todo;
		});
		setTodos(newTodos);
	};
	const handleDelete = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<div>
				<h2>TodoList TS</h2>
				<form
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<input
						type="text"
						onChange={(e) => handleChange(e)}
						className="inputText"
					></input>
					<input type="submit" value="作成" className="submitButton"></input>
				</form>
				<ul className="todoList">
					{todos.map((todo) => (
						<li key={todo.id}>
							<input
								type="text"
								onChange={(e) => handleEdit(todo.id, e.target.value)}
								className="inputText"
								value={todo.inputValue}
								disabled={todo.checked}
							></input>
							<input
								type="checkbox"
								onChange={(e) => handleChecked(todo.id, todo.checked)}
							></input>
							<button onClick={() => handleDelete(todo.id)}>delete</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
