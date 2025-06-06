import { useForm } from "react-hook-form";
import { useFeedbackForm } from "../model/feedback-form";

type FormInputs = {
  text: string;
  email: string;
  category: "UI" | "feature" | "performance";
};

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>();

  const { submit } = useFeedbackForm();

  const onSubmit = (data: FormInputs) => {
    localStorage.setItem("userEmail", data.email);
    submit(data.text, data.email, data.category);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl space-y-6 transition-all"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Предложите улучшение
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Идея *
        </label>
        <textarea
          {...register("text", { required: "Пожалуйста, введите идею." })}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
          rows={4}
          placeholder="Опишите, как можно улучшить продукт..."
        />
        {errors.text && (
          <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Категория *
        </label>
        <select
          {...register("category", { required: "Выберите категорию." })}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">-- Выберите --</option>
          <option value="UI">Интерфейс (UI)</option>
          <option value="feature">Новая фича</option>
          <option value="performance">Производительность</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">
            {errors.category.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="example@email.com"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
      >
        {isSubmitting ? "Отправка..." : "Отправить предложение"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm mt-2">
          ✅ Спасибо за ваше предложение!
        </p>
      )}
    </form>
  );
};

export default FeedbackForm;
