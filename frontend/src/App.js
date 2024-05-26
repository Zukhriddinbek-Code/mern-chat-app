import { Outlet } from "react-router-dom";
// import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
