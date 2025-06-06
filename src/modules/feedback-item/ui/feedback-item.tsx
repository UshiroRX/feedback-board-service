import { useState } from "react";
import {
  useFeedbackStore,
  type Feedback,
} from "../../../shared/model/feedback-store";
import { FeedbackEdit } from "./feedback-edit";

interface FeedbackItemProps {
  item: Feedback;
  isMyPage: boolean;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({
  item,
  isMyPage,
}) => {
  const like = useFeedbackStore((state) => state.like);
  const dislike = useFeedbackStore((state) => state.dislike);
  const deleteFeedback = useFeedbackStore((state) => state.deleteFeedback);

  const [showEdit, setShowEdit] = useState(false);

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "UI":
        return "bg-violet-100 text-violet-700 dark:bg-violet-800 dark:text-violet-100";
      case "feature":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-100";
      case "performance":
        return "bg-amber-100 text-amber-700 dark:bg-amber-800 dark:text-amber-100";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white";
    }
  };

  return (
    <>
      <div className="group transition-all duration-200 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="flex-1 space-y-2">
          <span
            className={`inline-block px-2 py-1 text-xs font-medium rounded ${getBadgeStyle(
              item.category
            )}`}
          >
            {item.category.toUpperCase()}
          </span>

          <p className="text-gray-800 dark:text-gray-100 text-base sm:text-lg font-medium leading-snug">
            {item.text}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>👍 {item.likes}</span>
            <span>👎 {item.dislikes}</span>
          </div>
        </div>

        <div className="flex gap-1 sm:gap-2 items-center text-sm">
          {!isMyPage && (
            <>
              <button
                onClick={() => like(item.id)}
                className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                👍
              </button>
              <button
                onClick={() => dislike(item.id)}
                className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                👎
              </button>
            </>
          )}

          {isMyPage && (
            <>
              <button
                onClick={() => setShowEdit(true)}
                className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteFeedback(item.id)}
                className="px-3 py-1 rounded-md border border-red-300 text-red-600 dark:border-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition"
              >
                🗑
              </button>
            </>
          )}
        </div>
      </div>

      {showEdit && <FeedbackEdit item={item} onClose={() => setShowEdit(false)} />}
    </>
  );
};
