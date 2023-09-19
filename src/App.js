import './Presentation/Assets/Styles/App.css';

import { Route, Routes} from 'react-router-dom';
import Footer from './Presentation/Layout/Footer/Index';
import Header from './Presentation/Layout/Header/Index';
import Dashboard from './Presentation/Pages/Dashboard/Index';
import Charts from './Presentation/Pages/Charts/Index';
import Log from './Presentation/Pages/Log/Index';
import Alarms from './Presentation/Pages/Alarms/Index';
import Setting from './Presentation/Pages/Setting/Index';


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/log' element={<Log />} />
          <Route path='/alarms' element={<Alarms />} />
          <Route path='/setting' element={<Setting />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
