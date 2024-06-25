import React from 'react';
import TablaProductos from './TablaProductos';
import { PRODUCTOS } from './data';

const App = () => {
  return (
    <div className="app">
      <h1>Ánima Café</h1>
      <TablaProductos productos={PRODUCTOS} />
    </div>
  );
};

export default App;
