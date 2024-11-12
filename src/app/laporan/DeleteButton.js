"use client";

import React from "react";
import { deleteReport } from "@/utils/query";
import { useRouter } from "next/navigation";

const DeleteButton = ({id}) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteReport(id);
    router.refresh();
  };
  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-900"
    >
      Hapus
    </button>
  );
  return
};

export default DeleteButton;
