import { useState } from "react";
import { useFeedbackStore, type Feedback } from "../../../shared/model/feedback-store";

interface FeedbackEditProps {
  item: Feedback;
  onClose: () => void;
}

export const FeedbackEdit: React.FC<FeedbackEditProps> = ({ item, onClose }) => {
  const updateFeedback = useFeedbackStore((state) => state.updateFeedback);
  const [text, setText] = useState(item.text);
  const [category, setCategory] = useState(item.category);

  const handleSave = () => {
    updateFeedback(item.id, text, category);
    onClose(); // закрыть модалку
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-lg font-bold text-gray-800">✏️ Редактировать предложение</h2>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Идея</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Категория</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="UI">UI</option>
            <option value="feature">Feature</option>
            <option value="performance">Performance</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200"
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            💾 Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
