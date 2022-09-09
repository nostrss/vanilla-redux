// import { createStore } from 'redux';
import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

/**
 * redux toolkit을 쓰지 않은 코드
 */
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

/**
 * redux toolkit을 쓰지 않은 코드
 */
// const store = createStore(reducer);

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
// const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
