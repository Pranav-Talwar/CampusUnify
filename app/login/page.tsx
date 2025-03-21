"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      router.push("/auth/error");
    } else if (result?.ok) {
      // Ensure we wait for Firebase auth to complete
      await auth.authStateReady();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center p-8  ">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome to <span className="text-blue-300">CampusUnify</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Your one-stop platform for campus connectivity and collaboration.
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="items-center justify-center gap-3 bg-white text-gray-900 px-6  py-2 rounded-lg shadow-lg hover:bg-gray-200 "
        >
            <div className="flex">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span className="font-semibold text-lg">Sign in with Google</span></div>
        </button>
      </div>
    </div>
  );
}