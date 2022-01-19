import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Topbar from './Topbar';
import Monthly from './Monthly';
import Weekly from './Weekly';
import Yearly from './Yearly';
import Addweeklyincome from './Addweeklyincome';
import Addweeklyexpenditure from './Addweeklyexpenditure';
import Addmonthlyexpenditure from './Addmonthlyexpenditure';
import Addmonthlyincome from './Addmonthlyincome';
import Addyearlyincome from './Addyearlyincome';
import Addyearlyexpenditure from './Addyearlyexpenditure';
import Settings from './Settings';
import Weeklylist from './Weeklylist';
import Monthlylist from './Monthlylist';
import Yearlylist from './Yearlylist';
import Budgemanager from './Budgemanager';



function App() {
  return (
    <>
   
      <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
        <Topbar/>
        <div class="container-fluid">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/weekly" element={<Weekly/>}></Route>
            <Route path="/monthly" element={<Monthly/>}></Route>
            <Route path="/yearly" element={<Yearly/>}></Route>
            <Route path="/budgetmanager" element={<Budgemanager/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>

            <Route path="/add-weekly-income" element={<Addweeklyincome/>}></Route>
            <Route path="/add-monthly-income" element={<Addmonthlyincome/>}></Route>
            <Route path="/add-yearly-income" element={<Addyearlyincome/>}></Route>

            <Route path="/add-weekly-expenditure" element={<Addweeklyexpenditure/>}></Route>
            <Route path="/add-monthly-expenditure" element={<Addmonthlyexpenditure/>}></Route>
            <Route path="/add-yearly-expenditure" element={<Addyearlyexpenditure/>}></Route>

            <Route path="/weekly-list" element={<Weeklylist/>}></Route>
            <Route path="/monthly-list" element={<Monthlylist/>}></Route>
            <Route path="/yearly-list" element={<Yearlylist/>}></Route>
            
            
           
          </Routes>
        </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
