import {  createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	isLoading : true,
	todos : []
}

const todos = createSlice({
  name : "todoData",
  initialState,
  reducers: {
      ADD : (state, action) => {
				const { payload : todoElement } = action;
				state.todos.push(todoElement);
			},
			DELETE : (state, action) => {
			},
			SAVE : ({payload : {data}}) => {
				saveDataToDB('/todos', data);
			},
			GETDATA : async (state, {payload : {uri}}) => {
				try{
					const data = await getDataToDB(uri);
					console.log(data);
					if(data){
						return {...data, isloading : false};
					}
					else {
						return initialState;
					}
				}
				catch{
					
				}
				finally{
					state.isLoading = false;
				}
			}
  }
})

const saveDataToDB = (uri, data) => {
	const xhr = new XMLHttpRequest();
	const formedData = JSON.stringify(data);
	xhr.open('POST', `${uri}`);
	xhr.setRequastHeader('content-type', 'application.json');
	xhr.send(formedData);
	xhr.onload = () => {
		if(xhr.status === 200 || xhr.status === 201){
			console.log("Data is completely posted");
		}
		else{
			console.error('Error', xhr.status, xhr.statusText);
		}
	}
}

const getDataToDB = (uri) => {
  return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest(); 
	  xhr.open('GET', `https://mytodo.choi2.repl.co/${uri}`);
  	xhr.send();
  	xhr.onload = () => {
		if(xhr.status === 200 || xhr.status === 201){
			console.log(`Data is completely Got data : ${xhr.response}`);
			resolve(JSON.parse(xhr.response));
		}
		else{
			reject(new Error(xhr.status));
		}
	}
	});
}

export const {ADD, DELETE, SAVE, GETDATA} = todos.actions;

export const store= configureStore({
	reducer : todos.reducer
});