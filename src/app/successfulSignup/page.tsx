import { CheckCircle } from "lucide-react";

export default function SuccessfulSignupPage() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
          <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Registration successful!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for your registration. Complete registration by confirming
          your email! We have sent you a letter :)
        </p>
      </div>
    </div>
  );
}
