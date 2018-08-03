import { combineReducers } from 'redux';
import introWizard from './introWizard';
import profile from './profile';

export default combineReducers({
    profile,
    introWizard
});