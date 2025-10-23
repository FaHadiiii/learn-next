"use client";

import { useQuoteList } from "@/app/quote/_hooks/quote-queries";
import { Quote } from "@/app/quote/_types/quote.type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

export function QuoteList() {
  const { data, isLoading, error } = useQuoteList();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-28 rounded-xl" />
        ))}
      </div>
    );
  }
  if (error) return <p>Error loading quotes: {error.message}</p>;
  if (!data || data.length === 0) return <p>No quotes available</p>;

  return (
    <div className="space-y-4">
      {data.map((quote: Quote, index: number) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="border rounded-lg p-6 shadow-sm hover:bg-accent cursor-pointer transition">
              <blockquote className="text-lg italic mb-2">
                "{quote.q}"
              </blockquote>
              <footer className="text-sm text-gray-600">— {quote.a}</footer>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{quote.a}</DialogTitle>
              <DialogDescription className="text-base italic">
                “{quote.q}”
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
