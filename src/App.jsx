import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { store } from './Store';
import router from './Router/index'
import { Provider } from 'react-redux';
function App() {
<<<<<<< HEAD

 return (
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
=======
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    

>>>>>>> main
  );

}

export default App;
