import React, { useState } from 'react';

const App = ({ children }) => {
  const [value, setValue] = useState('1');

  return (
    <div className="container">
      {value}
      {children}
    </div>
  );
};

export default App;
