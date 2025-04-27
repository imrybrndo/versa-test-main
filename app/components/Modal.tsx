"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (item: { name: string; category: string; price: number }) => void;
  defaultItem: {
    name: string;
    category: string;
    price: number;
  } | null;
};

export default function Modal({ open, onClose, onSave, defaultItem }: Props) {
  const [form, setForm] = useState({ name: "", category: "", price: 0 });
  useEffect(() => {
    if (defaultItem) {
      setForm(defaultItem);
    } else {
      setForm({ name: "", category: "", price: 0 });
    }
  }, [defaultItem, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {defaultItem ? "Edit Item" : "Tambah Item"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Kategori"
            className="input input-bordered w-full"
            value={form.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Harga"
            className="input input-bordered w-full"
            value={form.price}
            onChange={handleChange}
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="btn btn-primary">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
