"use client";

import StatCard from "../components/StatCard";

import { ShoppingCart, DollarSign, Package } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
      <p>This is your admin dashboard.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          title="Total Items"
          value={1280}
          icon={<Package />}
          description="Jumlah produk tersedia"
        />
        <StatCard
          title="Total Profit"
          value={"Rp 12.400.000"}
          icon={<DollarSign />}
          description="Pendapatan bulan ini"
        />
        <StatCard
          title="Total Orders"
          value={329}
          icon={<ShoppingCart />}
          description="Transaksi yang telah diproses"
        />
      </div>
    </div>
  );
}
