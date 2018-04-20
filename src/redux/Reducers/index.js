import { combineReducers } from 'redux';
import contentInfo from './contentInfo';
import contentHome from './contentHome';

const appReducers = combineReducers({
    contentInfo,
    contentHome
  
});

export default appReducers;