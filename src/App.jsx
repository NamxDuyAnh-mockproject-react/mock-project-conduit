import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import router from './Router/index'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
