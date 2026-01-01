import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/shadcn-ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/common/components/shadcn-ui/dialog';
import { Button } from '@/common/components/shadcn-ui/button';

const Delete_dialog = ({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  currentDepartment,
  confirmDelete,
}) => {
  return (
    <Dialog
      open={isDeleteDialogOpen}
      onOpenChange={setIsDeleteDialogOpen}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the <strong>{currentDepartment?.name}</strong>{' '}
            department? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={confirmDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Delete_dialog;
