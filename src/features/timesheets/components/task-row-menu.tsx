// task-row-menu.tsx
"use client";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function TaskRowMenu({
  onEdit,
  onDelete,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-md
          transition
          hover:bg-gray-100
          focus:outline-none
        "
      >
        <MoreHorizontal className="h-4 w-4 text-gray-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-[150px]
          rounded-xl
          border
          border-[#E5E7EB]
          bg-white
          p-1.5
          shadow-lg
        "
      >
        {/* Edit */}
        <DropdownMenuItem
          onClick={onEdit}
          className="
            flex
            cursor-pointer
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            text-[13px]
            font-medium
            text-[#111827]
            outline-none
            transition
            hover:bg-gray-100
            focus:bg-gray-100
          "
        >
          <Pencil
            size={15}
            className="text-[#2563EB]"
          />

          Edit
        </DropdownMenuItem>

        {/* Delete */}
        <DropdownMenuItem
          onClick={onDelete}
          className="
            flex
            cursor-pointer
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            text-[13px]
            font-medium
            text-[#DC2626]
            outline-none
            transition
            hover:bg-red-50
            focus:bg-red-50
          "
        >
          <Trash2
            size={15}
            className="text-[#DC2626]"
          />

          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}