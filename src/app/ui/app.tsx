import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { FeedbackLayout } from "../../modules/feedback-layout/ui/feedback-layout";
import FeedbackForm from "../../modules/feedback-form/ui/feedback-form";
import { FeedbackList } from "../../modules/feedback-list/ui/feedback-list";
import { useEffect } from "react";

function App() {

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme-storage");
  if (savedTheme?.includes("dark")) {
    document.documentElement.classList.add("dark");
  }
}, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackLayout />}>
           <Route index element={<Navigate to="/create" replace />} />
            <Route path="/create" element={<FeedbackForm />}></Route>
            <Route path="/list" element={<FeedbackList />}></Route>
            <Route path="/my" element={<FeedbackList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
