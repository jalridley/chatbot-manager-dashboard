'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ArrowDownUp } from 'lucide-react';
import { SortKey, SORT_OPTIONS } from '@/hooks/useFileSort';

type SortDropdownProps = {
  sortKey: SortKey;
  onSort: (key: SortKey) => void;
};

const SortDropdownMenu = ({ sortKey, onSort }: SortDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium shadow">
        <ArrowDownUp className="h-4 w-4" />
        Sort
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSort(option.value)}
          >
            <DropdownMenuCheckboxItem checked={sortKey === option.value}>
              {option.label}
            </DropdownMenuCheckboxItem>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdownMenu;
