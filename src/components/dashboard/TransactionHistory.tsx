import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { transactions, comments as initialComments } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';

export function TransactionHistory() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);

  const handleAddComment = (transactionId: number) => {
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      type: 'transaction',
      transactionId,
      author: 'Current User',
      content: newComment,
      timestamp: new Date().toISOString(),
      avatar: 'CU',
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const transactionComments = (transactionId: number) =>
    comments.filter(
      (comment) =>
        comment.type === 'transaction' && comment.transactionId === transactionId
    );

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>
                  <Badge variant={tx.type === 'BUY' ? 'default' : 'destructive'}>
                    {tx.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{tx.asset}</TableCell>
                <TableCell>${tx.amount.toLocaleString()}</TableCell>
                <TableCell>${tx.price}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={tx.status === 'completed' ? 'secondary' : 'outline'}
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                        onClick={() => setSelectedTransaction(tx.id)}
                      >
                        <MessageSquare className="h-4 w-4" />
                        {transactionComments(tx.id).length > 0 && (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                            {transactionComments(tx.id).length}
                          </span>
                        )}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Comments for {tx.type} {tx.asset}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Textarea
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                          />
                          <Button
                            className="self-end"
                            onClick={() => handleAddComment(tx.id)}
                            disabled={!newComment.trim()}
                          >
                            Add
                          </Button>
                        </div>
                        <ScrollArea className="h-[300px] pr-4">
                          <div className="space-y-4">
                            {transactionComments(tx.id).map((comment) => (
                              <div
                                key={comment.id}
                                className="flex gap-4 rounded-lg border p-4"
                              >
                                <Avatar>
                                  <AvatarFallback>{comment.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium">
                                      {comment.author}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {formatDistanceToNow(
                                        new Date(comment.timestamp),
                                        { addSuffix: true }
                                      )}
                                    </p>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {comment.content}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}