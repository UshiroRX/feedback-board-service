import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackLayout />}>
            <Route path="/create" element={<FeedbackCreate />}></Route>
            <Route path="/list" element={<FeedbackList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
