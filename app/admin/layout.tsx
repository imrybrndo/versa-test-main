"use client";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-teal-500 text-white transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="p-4 text-xl font-bold border-b border-teal-400">
          Bikinin Admin Panel
        </div>
        <ul className="menu p-4">
          <li>
            <Link href="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/item/">Item</Link>
          </li>
          <li>
            <Link href="#">Settings</Link>
          </li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="navbar bg-white shadow px-4 lg:px-6">
          <div className="flex-1">
            <button
              className="lg:hidden btn btn-ghost"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <span className="text-lg font-semibold ml-2 text-teal-700">
              Admin Dashboard
            </span>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.pravatar.cc/100" alt="User" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="#">Profile</Link>
                </li>
                <li>
                  <Link href="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
