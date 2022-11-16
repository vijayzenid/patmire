import logo from './logo.svg';
import './assets/css/style.css';
import './assets/css/media.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Coming_soon from './pages/coming_soon'

function App() {
  return (
      <>
        <Coming_soon/>
        <ToastContainer 
        theme="colored"
        />
      </>
  );
}

export default App;
