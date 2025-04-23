"use client";

import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ItemPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Kopi Hitam", category: "Minuman", price: 15000 },
    { id: 2, name: "Nasi Goreng", category: "Makanan", price: 25000 },
    { id: 3, name: "Teh Manis", category: "Minuman", price: 12000 },
  ]);

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setModalEditOpen(true);
  };

  const handleDelete = (item: any) => {
    setSelectedItem(item);
    setModalDeleteOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manajemen Item</h1>
        <button
          className="btn btn-sm btn-primary gap-2"
          onClick={() => setModalAddOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Tambah Item
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra bg-white">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>Rp {item.price.toLocaleString()}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-sm btn-warning btn-outline"
                      onClick={() => handleEdit(item)}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      className="btn btn-sm btn-error btn-outline"
                      onClick={() => handleDelete(item)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>  
        </table>
      </div>

      {/* Modal Tambah */}
      {modalAddOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Tambah Item</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama item"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Kategori"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                placeholder="Harga"
                className="input input-bordered w-full"
              />
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setModalAddOpen(false)}
                >
                  Batal
                </button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      {/* Modal Edit */}
      {modalEditOpen && selectedItem && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Item</h3>
            <form className="flex flex-col gap-4">
              <input
                defaultValue={selectedItem.name}
                type="text"
                placeholder="Nama item"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={selectedItem.category}
                type="text"
                placeholder="Kategori"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={selectedItem.price}
                type="number"
                placeholder="Harga"
                className="input input-bordered w-full"
              />
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"   
                  onClick={() => setModalEditOpen(false)}
                >
                  Batal
                </button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      {/* Modal Hapus */}
      {modalDeleteOpen && selectedItem && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Hapus Item</h3>
            <p>
              Yakin ingin menghapus <strong>{selectedItem.name}</strong>?
            </p>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => setModalDeleteOpen(false)}
              >
                Batal
              </button>
              <button className="btn btn-error">Hapus</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
