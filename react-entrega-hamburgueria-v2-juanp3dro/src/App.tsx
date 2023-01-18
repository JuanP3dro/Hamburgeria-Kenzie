import { RoutesBurger as Routes } from "./routes";
import Global from "./styles/global";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <Global />
      <UserProvider>
        <Routes />
      </UserProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
    </div>
  );
}

export default App;
