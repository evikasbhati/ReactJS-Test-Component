import './App.css';
import Collapsible_and_Closable from './Pages/Collapsible_and_Closable/Collapsible_and_Closable'
import Counter from './Pages/Counter/Counter';
import Sum from './Pages/Sum/Sum';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Test from './Pages/Test/Test';

const  App=()=>{
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/sum" element={<Sum/> }/>
        <Route path="/closeList" element={<Collapsible_and_Closable/>}/>
    </Routes>
    </Router>
    {/* <Test /> */}
    </>
  );
}

export default App;
