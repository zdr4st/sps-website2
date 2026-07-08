"use client";

import { useState } from "react";
import { login } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin SPS Motor
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Silakan masuk untuk mengelola katalog dan simulasi kredit.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium">{error}</div>
            )}

            <div>
              <Button type="submit" className="w-full h-10 font-bold bg-primary hover:bg-primary/90 text-white">
                Masuk
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
