import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Namaste  from "./pages/Namaste";
import  {NotFound}  from "./pages/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* "/" → Landing page with 2 buttons */}
        <Route index element={<Namaste />} />
        {/* Not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;