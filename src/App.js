import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
function App() {
  return (
    <Provider store={Store}>
      <div>
        Teste
      </div>
    </Provider>
  );
}

export default App;
