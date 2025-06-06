import { useState } from "react";
import { useFeedbackStore } from "../../../shared/model/feedback-store";
import { FeedbackItem } from "../../feedback-item/ui/feedback-item";
import { useLocation } from "react-router";

export const FeedbackList = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const userEmail = localStorage.getItem("userEmail");
  const location = useLocation();

  const isMyPage = location.pathname === "/my";

  const [sortMode, setSortMode] = useState<"default" | "popular">("default");

  const baseFeedbacks = isMyPage
    ? feedbacks.filter((fb) => fb.email === userEmail)
    : feedbacks.filter((fb) => fb.email !== userEmail);

  const filteredFeedbacks =
    sortMode === "popular"
      ? [...baseFeedbacks].sort((a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes))
      : baseFeedbacks;

  return (
    <div className="space-y-6">
      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {isMyPage ? "📌 Мои предложения" : "🌍 Все предложения"}
          </h2>
           <p className="text-sm text-gray-500">Всего: {baseFeedbacks.length} предложений</p>
          {!isMyPage && (
            <div className="flex gap-2">
              <button
                onClick={() => setSortMode("default")}
                className={`px-3 py-1 rounded-md text-sm border ${
                  sortMode === "default"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Все
              </button>
              <button
                onClick={() => setSortMode("popular")}
                className={`px-3 py-1 rounded-md text-sm border ${
                  sortMode === "popular"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Популярные
              </button>
            </div>
          )}
        </div>

        {filteredFeedbacks.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {filteredFeedbacks.map((fb) => (
              <li key={fb.id}>
                <FeedbackItem item={fb} isMyPage={isMyPage} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">
            {isMyPage
              ? "Вы ещё не добавляли предложений."
              : "Предложений пока нет."}
          </p>
        )}
      </section>
    </div>
  );
};
