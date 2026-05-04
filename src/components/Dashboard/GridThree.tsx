"use client";

import React from "react";
import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";

export const GridThree = () => {
  const data = [
    { id: 1, customer_id: "CUST-101", sku: "SKU-001", date: "2026-04-01", price: 120 },
    { id: 2, customer_id: "CUST-102", sku: "SKU-002", date: "2026-04-02", price: 85 },
    { id: 3, customer_id: "CUST-103", sku: "SKU-003", date: "2026-04-03", price: 210 },
    { id: 4, customer_id: "CUST-104", sku: "SKU-004", date: "2026-04-04", price: 99 },
    { id: 5, customer_id: "CUST-105", sku: "SKU-005", date: "2026-04-05", price: 150 },
  ];

  return (
    <div className="col-span-12 w-full p-4 rounded border border-stone-300 bg-white">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium text-lg">Expense</h3>
      </div>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[650px] w-full table-auto">

          {/* Table Head */}
          <thead>
            <tr className="text-sm font-normal text-stone-500 border-b">
              <th className="text-start p-2 whitespace-nowrap">Customer ID</th>
              <th className="text-start p-2 whitespace-nowrap">SKU</th>
              <th className="text-start p-2 whitespace-nowrap">Date</th>
              <th className="text-start p-2 whitespace-nowrap">Price</th>
              <th className="w-10"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`text-sm ${index % 2 ? "bg-stone-50" : ""}`}
              >
                <td className="p-2 whitespace-nowrap text-violet-600 underline flex items-center gap-1">
                  {item.customer_id}
                  <FiArrowUpRight />
                </td>

                <td className="p-2 whitespace-nowrap">
                  {item.sku}
                </td>

                <td className="p-2 whitespace-nowrap">
                  {item.date}
                </td>

                <td className="p-2 whitespace-nowrap font-medium">
                  ${item.price}
                </td>

                <td className="w-10">
                  <button className="hover:bg-stone-200 transition grid place-content-center rounded size-8">
                    <FiMoreHorizontal />
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
