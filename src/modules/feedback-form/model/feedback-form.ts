import { useFeedbackStore, type FeedbackCategory } from "../../../shared/model/feedback-store";


export const useFeedbackForm = () => {
  const addFeedback= useFeedbackStore((state) => state.addFeedback);

  const submit = (text: string, email: string, category: FeedbackCategory) => {
    if (text.trim()) {
      addFeedback(text.trim(), email.trim(), category);
    }
  };

  return {
    submit,
  };
};
