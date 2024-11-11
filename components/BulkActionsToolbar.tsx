import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface BulkActionsToolbarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onToggleFavorite: () => void;
}

export const BulkActionsToolbar = ({
  selectedCount,
  onClearSelection,
  onToggleFavorite,
}: BulkActionsToolbarProps) => {
  return (
    <div className="flex space-x-6">
      <div className="flex items-center space-x-2">
        <Checkbox id="select-all" aria-label="Select all files" />
        <label htmlFor="select-all" className="text-sm font-medium">
          {selectedCount} selected
        </label>
      </div>
      {/* TODO: after testing add disabled state when no items are selected disabled={selectedCount === 0} */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium shadow">
          Actions
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onToggleFavorite}>Star</DropdownMenuItem>
          <DropdownMenuItem onClick={onToggleFavorite}>Unstar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
