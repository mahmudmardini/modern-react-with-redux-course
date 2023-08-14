import Button from "../components/Button";
import {useReducer} from "react";
import Panel from "../components/Panel.tsx";
import CounterTypes from "../contsants/counterTypes";

const reducer = (state, action) => {

    switch (action.type) {
        case CounterTypes.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            }
        case CounterTypes.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        case CounterTypes.ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        case CounterTypes.SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        default:
            throw Error(`unexpected action type: ${action.type}`)
    }
};

function CounterPage ({ initialCount= 0 }) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: '',
    })
    const increment = () => {
        dispatch({
            type: CounterTypes.INCREMENT_COUNT,
        })
    }

    const decrement = () => {
        dispatch({
            type: CounterTypes.DECREMENT_COUNT,
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;


        dispatch({
            type: CounterTypes.SET_VALUE_TO_ADD,
            payload: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: CounterTypes.ADD_VALUE_TO_COUNT,
        });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button className="text-gray-600" onClick={decrement}>Decrement</Button>
                <Button className="text-gray-600" onClick={increment}>Increment</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ''}
                       onChange={handleChange}
                       type="number"
                       className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button className="text-gray-600">Add it!</Button>
            </form>
        </Panel>
    );
}
export default CounterPage;
