import React  from 'react';
import InsightContainer from './containers/insights';
import DeviceContainer from './containers/devices';
import HeaderContainer from './containers/header';
import './App.css';

export default function App() {
  return (
    <div className="site-wrapper" >
      <HeaderContainer />
        <main>
            <div id="background-design" />
            <InsightContainer />
            <DeviceContainer />
        </main>
    </div>
  );
}