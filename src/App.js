import {React} from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
