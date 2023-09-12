import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BookDetailPage from "../../pages/BookDetailPage";
import NotFoundPage from "../../pages/NotFoundPage";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
    </Routes>
  );
};
