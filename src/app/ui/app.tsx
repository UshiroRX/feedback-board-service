import { BrowserRouter, Route, Routes } from "react-router";
import { FeedbackLayout } from "../../modules/feedback-layout/ui/feedback-layout";
import FeedbackForm from "../../modules/feedback-form/ui/feedback-form";
import { FeedbackList } from "../../modules/feedback-list/ui/feedback-list";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackLayout />}>
            <Route path="/create" element={<FeedbackForm />}></Route>
            <Route path="/list" element={<FeedbackList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
