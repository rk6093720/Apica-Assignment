import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Dashboard from './Dashboard';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default MainRoutes;
