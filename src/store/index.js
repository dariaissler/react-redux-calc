import { createStore} from 'redux';
import calculateReducer from './reducers/calculateReducer';

export default createStore(
    calculateReducer,
    window.__REDUX_DEVTOOLS_EXTENSION___&& window.__REDUX_DEVTOOLS_EXTENSION___()
)