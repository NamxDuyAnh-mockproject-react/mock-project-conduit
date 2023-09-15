import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { store } from './Store';
import router from './Router/index'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

}

export default App;
