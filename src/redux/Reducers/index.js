import { combineReducers } from 'redux';
import contentInfo from './contentInfo';
import contentHome from './contentHome';
import contentMessge from './contentMessge';
import contentSchedule from './contentSchedule';


const appReducers = combineReducers({
    contentInfo,
    contentHome,
    contentMessge,
    contentSchedule
  
});

export default appReducers;