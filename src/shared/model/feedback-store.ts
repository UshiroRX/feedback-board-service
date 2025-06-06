import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FeedbackCategory = "UI" | "feature" | "performance";

export interface Feedback {
  id: number;
  text: string;
  email: string;
  category: FeedbackCategory;
  likes: number;
  dislikes: number;
}

interface FeedbackState {
  feedbacks: Feedback[];
  addFeedback: (
    text: string,
    email: string,
    category: FeedbackCategory
  ) => void;
  like: (id: number) => void;
  dislike: (id: number) => void;
  deleteFeedback: (id: number) => void;
  updateFeedback: (id: number, newText: string, newCategory: string) => void;
}

// Zustand Store
export const useFeedbackStore = create<FeedbackState>()(
  persist(
    (set) => ({
      feedbacks: [
        {
          id: 1,
          text: "Сделать тёмную тему",
          email: "some1@gmail.com",
          category: "UI",
          likes: 0,
          dislikes: 0,
        },
        {
          id: 2,
          text: "Добавить Telegram",
          email: "some2@gmail.com",
          category: "feature",
          likes: 0,
          dislikes: 0,
        },
      ],

      addFeedback: (text, email, category) => {
        const newFeedback: Feedback = {
          id: Date.now(),
          text,
          email,
          category,
          likes: 0,
          dislikes: 0,
        };
        set((state) => ({
          feedbacks: [...state.feedbacks, newFeedback],
        }));
      },

      like: (id: number) => {
        set((state) => ({
          feedbacks: state.feedbacks.map((fb) =>
            fb.id === id ? { ...fb, likes: (fb.likes ?? 0) + 1 } : fb
          ),
        }));
      },

      dislike: (id: number) => {
        set((state) => ({
          feedbacks: state.feedbacks.map((fb) =>
            fb.id === id ? { ...fb, dislikes: (fb.dislikes ?? 0) + 1 } : fb
          ),
        }));
      },

      deleteFeedback: (id: number) => {
        set((state) => ({
          feedbacks: state.feedbacks.filter((fb) => fb.id !== id),
        }));
      },
      updateFeedback: (id: number, newText: string, newCategory: string) => {
        set((state) => ({
          feedbacks: state.feedbacks.map((fb) =>
            fb.id === id ? { ...fb, text: newText, category: newCategory } : fb
          ),
        }));
      },
    }),
    {
      name: "feedback-storage", // ключ в localStorage
    }
  )
);
