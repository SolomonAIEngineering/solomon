/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IkwhXosMsQY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@v1/ui/alert-dialog";
import { Button } from "@v1/ui/button";
import { Trash, XCircleIcon } from "lucide-react";

/**
 * Props for the DeleteItemModal component.
 */
type Props = {
  /**
   * Callback function to be executed when the delete action is confirmed.
   * This function should handle the actual deletion logic in the parent component.
   */
  onDelete: () => void;
};

/**
 * DeleteItemModal component
 *
 * This component renders a modal dialog for confirming item deletion.
 * It includes a trigger button and a confirmation dialog.
 *
 * @component
 * @example
 * ```tsx
 * const handleDelete = () => {
 *   // Deletion logic here
 * };
 *
 * return <DeleteItemModal onDelete={handleDelete} />;
 * ```
 *
 * @param {Props} props - The properties passed to the component
 * @param {() => void} props.onDelete - Callback function for handling the delete action
 *
 * @returns {JSX.Element} The rendered DeleteItemModal component
 */
export function DeleteItemModal({ onDelete }: Props): JSX.Element {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Item</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <XCircleIcon className="mr-2 h-4 w-4" strokeWidth={0.5} />
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>
            <Trash className="mr-2 h-4 w-4" strokeWidth={0.5} />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
