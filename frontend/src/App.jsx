import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Patients from "./pages/admin/Patients";

// simple temporary switch (baad me router lagayenge)
function App() {
  return (
    <div>
      {/* HOME PAGE */}
      <Home />

      {/* TEST (optional) */}
      {/* <Dashboard /> */}
      {/* <Patients /> */}
    </div>
  );
}

export default App;