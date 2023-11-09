import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPostController from "./pages/ListPost/ListPostController";
import AddPostController from "./pages/AddPost/AddPostController";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListPostController />} />
          <Route path="/add-post" element={<AddPostController />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
