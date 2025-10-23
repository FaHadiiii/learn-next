import { AddQuote } from "./_components/add-quote";
import { QuoteList } from "./_components/quote-list";

export default function Quote() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold mb-6">Quote of the Day</h1>
        <AddQuote />
      </div>
      <QuoteList />
    </div>
  );
}
