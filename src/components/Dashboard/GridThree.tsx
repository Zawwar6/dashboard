"use client";

import React from "react";
import { FiArrowUpRight, FiMoreHorizontal, FiTrendingUp } from "react-icons/fi";

export const GridThree = () => {
  const data = [
    { id: 1, customer_id: "CUST-101", sku: "SKU-001", date: "2026-04-01", price: 120 },
    { id: 2, customer_id: "CUST-102", sku: "SKU-002", date: "2026-04-02", price: 85 },
    { id: 3, customer_id: "CUST-103", sku: "SKU-003", date: "2026-04-03", price: 210 },
    { id: 4, customer_id: "CUST-104", sku: "SKU-004", date: "2026-04-04", price: 99 },
    { id: 5, customer_id: "CUST-105", sku: "SKU-005", date: "2026-04-05", price: 150 },
  ];

  return (
    <div className="col-span-12 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Enhanced Header */}
      <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center">
            <FiTrendingUp size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-stone-800">Recent Transactions</h3>
          </div>
        </div>

        <button className="text-sm font-medium text-violet-600 hover:text-violet-700 transition flex items-center gap-1">
          View All
          <FiArrowUpRight />
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <table className="min-w-[700px] w-full">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200">
              <th className="text-left p-5 font-medium text-stone-600">Customer</th>
              <th className="text-left p-5 font-medium text-stone-600">SKU</th>
              <th className="text-left p-5 font-medium text-stone-600">Date</th>
              <th className="text-right p-5 font-medium text-stone-600 pr-8">Amount</th>
              <th className="w-16"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-stone-100">
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="group hover:bg-violet-50/50 transition-all duration-200"
              >
                {/* Customer ID */}
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.customer_id.slice(-2)}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="font-medium text-stone-800 hover:text-violet-600 transition flex items-center gap-1 group-hover:underline"
                      >
                        {item.customer_id}
                        <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    </div>
                  </div>
                </td>

                {/* SKU */}
                <td className="p-5">
                  <span className="font-mono text-sm text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                    {item.sku}
                  </span>
                </td>

                {/* Date */}
                <td className="p-5 text-stone-600">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                {/* Price */}
                <td className="p-5 text-right pr-8">
                  <span className="font-semibold text-emerald-600 text-lg">
                    ${item.price.toFixed(2)}
                  </span>
                </td>

                {/* Action */}
                <td className="p-5">
                  <button className="w-9 h-9 hover:bg-stone-100 active:bg-stone-200 rounded-xl flex items-center justify-center text-stone-400 hover:text-stone-600 transition">
                    <FiMoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};