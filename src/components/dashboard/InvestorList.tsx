import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { investors } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

export function InvestorList() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Investor Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Invested Amount</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Returns</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investors.map((investor) => (
              <TableRow key={investor.id}>
                <TableCell className="font-medium">{investor.name}</TableCell>
                <TableCell>${investor.invested.toLocaleString()}</TableCell>
                <TableCell>{investor.joinDate}</TableCell>
                <TableCell className="text-green-600 dark:text-green-400">
                  +{investor.returns}%
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{investor.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}