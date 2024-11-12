'use-client';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

type Action = {
  label: string;
  showCheckmark: boolean;
};

type BulkActionsToolbarProps = {
  actions: Action[];
  onActionSelect: (actionLabel: string) => void;
};

const BulkActionsToolbar = ({
  actions,
  onActionSelect,
}: BulkActionsToolbarProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium shadow">
          File actions
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {actions.map((action) => (
            <DropdownMenuItem
              key={action.label}
              onClick={() => onActionSelect(action.label)}
            >
              <DropdownMenuCheckboxItem checked={action.showCheckmark}>
                {action.label}
              </DropdownMenuCheckboxItem>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BulkActionsToolbar;