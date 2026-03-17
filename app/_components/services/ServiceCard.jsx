import React from "react";

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
