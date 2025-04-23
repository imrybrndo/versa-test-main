import Image from "next/image";

type StatCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
};

export default function StatCard({
  title,
  value,
  icon,
  description,
}: StatCardProps) {
  return (
    <div className="card bg-white shadow-md border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="text-3xl text-teal-500">{icon}</div>
        <div>
          <h2 className="text-sm text-gray-500">{title}</h2>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
}
