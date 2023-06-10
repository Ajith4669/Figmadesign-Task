import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import TablePage from "./components/tablepage";
import Preview from "./components/preview";
import Exportpdf from "./components/exportpdf";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<NavBar />}>
          <Route exact path="tablepage" element={<TablePage />} />
          <Route path="preview" element={<Preview />} />
          <Route path="exportpdf" element={<Exportpdf />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
