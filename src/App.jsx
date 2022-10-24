import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

// Components
import Main from "./pages/Main";
import Add from "./pages/Add";
import List from "./pages/List";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
