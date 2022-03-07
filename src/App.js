import logo from './logo.svg';
import './App.css';
import ForumContext from './ForumContext';
import ForumForm from './ForumForm';
import { useReducer } from 'react';
import ReducerForum from './ForumReducer';
import Forum from './Forum';
function App() {
  
  const myForums = [{}]
  const [state, dispatch] = useReducer(ReducerForum, myForums)
  const valuesAll = {state, dispatch}
  return (
    <div className="App">
      <Forum></Forum>
      <ForumContext.Provider value={valuesAll}>
                <ForumForm
                 time= {new Date().toString()}
                 date={new Date().getDate().toString()}
                 month={new Date().getMonth().toString()}
                 year={new Date().getFullYear( ).toString()}
                 ></ForumForm>
            </ForumContext.Provider>
             
    </div>
  );
}

export default App;
