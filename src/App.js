import './App.css';
import 'antd/dist/antd.css';

import { useState } from 'react';
import LightMode from './Components/LightMode';
import DarkMode from './Components/DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchTheme = () => {
    console.log('change theme');
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <LightMode darkMode={darkMode} handleSwitchTheme={handleSwitchTheme} />
      <DarkMode darkMode={darkMode} handleSwitchTheme={handleSwitchTheme} />
    </div>
  );
}

export default App;
