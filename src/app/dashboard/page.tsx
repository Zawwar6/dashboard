"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
      router.push("/login");
    }
  }, []);

  return (
    <main className="grid gap-4 p-4 grid-cols-1 md:grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}