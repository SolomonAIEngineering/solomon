import { Skeleton } from "@v1/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@v1/ui/table";
import { Header } from "./header";

export function CategoriesSkeleton() {
  return (
    <div className="w-full">
      <Header />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>VAT</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[...Array(15)].map((_, index) => (
            <TableRow
              key={index.toString()}
              className="hover:bg-transparent h-[49px]"
            >
              <TableCell className="w-[50px]">
                <Skeleton className="size-4 rounded-md" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[20%] h-2" />
              </TableCell>
              <TableCell className="w-[65px]">
                <Skeleton className="w-5 h-1" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
