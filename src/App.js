import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div
        className="grid place-items-center bg-teal-100 h-screen px-6 font-sans"
      >
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />

          <ToDoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
