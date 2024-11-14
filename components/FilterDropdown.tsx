'use-client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter } from 'lucide-react';

type FilterDropdownProps = {
  filterOptions: string[];
  onFilterSelect: (filter: string) => void;
  isDisabled?: boolean;
};

const FilterDropdown = ({
  filterOptions,
  onFilterSelect,
  isDisabled,
}: FilterDropdownProps) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0] || '');

  const handleSelect = (option: string) => {
    setSelectedFilter(option);
    onFilterSelect(option);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium shadow">
          <Filter className="h-4 w-4" />
          <span className="hidden md:block">Filter</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen rounded-none md:w-auto md:rounded-md">
          {filterOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleSelect(option)}
              disabled={isDisabled}
            >
              <DropdownMenuCheckboxItem checked={selectedFilter === option}>
                {option}
              </DropdownMenuCheckboxItem>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterDropdown;
