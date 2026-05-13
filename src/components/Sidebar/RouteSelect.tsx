"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
  FiMenu,
  FiX,
} from "react-icons/fi";

export const RouteSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Menu</h2>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-white shadow"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0
          h-screen md:h-auto
          w-[260px] md:w-full
          bg-white md:bg-transparent
          z-50 md:z-auto
          border-r md:border-none
          p-4 md:p-0

          transform transition-transform duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Mobile Close */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>

          <button onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* Routes */}
        <div className="space-y-1">
          <Route Icon={FiHome} selected={true} title="Dashboard" />
          <Route Icon={FiUsers} selected={false} title="Team" />
          <Route Icon={FiPaperclip} selected={false} title="Invoices" />
          <Route Icon={FiLink} selected={false} title="Integrations" />
          <Route Icon={FiDollarSign} selected={false} title="Finance" />
        </div>
      </div>
    </>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`
        w-full flex items-center gap-3.5 
        px-5 py-3.5 rounded-2xl text-[15px] font-medium
        transition-all duration-200 active:scale-[0.98]
        ${
          selected
            ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
            : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
        }
      `}
    >
      <Icon 
        className={`text-2xl transition-transform duration-200
          ${selected ? "text-white" : "text-stone-500 group-hover:scale-110"}`}
      />

      <span className="flex-1 text-left tracking-tight">{title}</span>

      {/* Active Dot */}
      {selected && (
        <div className="ml-auto w-2 h-2 rounded-full bg-white shadow-sm" />
      )}
    </button>
  );
};