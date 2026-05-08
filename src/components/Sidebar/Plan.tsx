"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Plan = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    router.push("/");
  };

  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Enterprise</p>
          <p className="text-stone-500">Pay as you go</p>
        </div>

        <button
          onClick={handleLogout}
          className="px-2 py-1.5 font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-colors rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};