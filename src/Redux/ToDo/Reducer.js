import { initialState } from './InitialState';
import { ADDED, AllCOMPLETED, CLEARCOMPLETED, COLORSELECTED, TOGOLED, DELETED } from './ActionTypes';


const Reducer = (state = initialState, action) => {

    const nextTodoId = (todos) => {
        const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
        return maxId + 1;
    }
    switch (action.type) {
        case ADDED:

            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                }
            ];
        case TOGOLED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                }
            });
        case AllCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            });

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);

        case DELETED:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }

};

export default Reducer;