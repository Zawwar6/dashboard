"use client";

import React, { useState } from "react";
import { AccountToggle } from "./AccountToggle";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";
import { FiMenu, FiX } from "react-icons/fi";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="flex justify-between p-3   md:hidden">
        <h1 className="font-semibold">Dashboard</h1>
        <button onClick={() => setOpen(true)} className="flex items-start">
          <FiMenu size={20} />
        </button>
      </div>

      {/* 🔹 Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        {/* ❌ Close button (mobile) */}
        <div className="flex justify-end p-3 md:hidden">
          <button onClick={() => setOpen(false)}>
            <FiX size={20} />
          </button>
        </div>

        {/* 🔹 Content */}
        <div className="flex flex-col h-full">
          
          {/* Top Scrollable */}
          <div className="flex-1 overflow-y-auto p-3">
            <AccountToggle />
            <RouteSelect />
          </div>

          {/* Bottom */}
          <div className="border-t p-3">
            <Plan />
          </div>

        </div>
      </div>
    </>
  );
};