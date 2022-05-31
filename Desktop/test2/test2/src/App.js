import './App.css';
import Assign_1_Counter from './Pages/Assign_1_Counter/Assign_1_Counter'
import Assign_3_Close_List from './Pages/Assign_3_Close_List/Assign_3_Close_List';
import Sum from './Pages/Sum/Sum';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const  App=()=>{
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Assign_1_Counter/>}/>
        <Route path="/sum" element={<Sum/> }/>
        <Route path="/closeList" element={<Assign_3_Close_List/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
