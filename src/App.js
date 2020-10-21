import React from 'react';
import { Routing } from './routes/routing'
import { NavigationBar } from './components/navigationbar/navigationBar'

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
