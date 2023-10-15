import React from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGalleryList from './components/ImageGallery/ImageGalleryList'
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="App">
    <ImageGalleryList />
    <ToastContainer /> {/* Add this component to render the toasts */}
  </div>
);

export default App;
