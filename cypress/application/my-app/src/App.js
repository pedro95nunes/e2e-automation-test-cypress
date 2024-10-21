
import React from 'react';

function App() {
  const handleClick = (buttonId) => {
    alert(`Button ${buttonId} clicked!`);
  };

  return (
    <div>
      <button data-testid="button-1" onClick={() => handleClick(1)}>Button 1</button>
      <button data-testid="button-2" onClick={() => handleClick(2)}>Button 2</button>
    </div>
  );
}

export default App;