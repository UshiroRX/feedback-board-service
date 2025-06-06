import { useForm } from "react-hook-form";

type FormInputs = {
  idea: string;
  name?: string;
  email?: string;
};

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">💡 Предложите улучшение</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Идея *</label>
        <textarea
          {...register("idea", { required: "Пожалуйста, введите идею." })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Опишите, как можно улучшить продукт..."
        />
        {errors.idea && (
          <p className="text-red-500 text-sm mt-1">{errors.idea.message}</p>
        )}

      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Имя (необязательно)</label>
        <input
          {...register("name")}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Ваше имя"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email (необязательно)</label>
        <input
          {...register("email")}
          type="email"
          className="w-full border border-gray-300 rounded p-2"
          placeholder="example@email.com"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
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
