import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AllocationChart } from '@/components/dashboard/AllocationChart';
import { CommentSection } from '@/components/dashboard/CommentSection';
import { InvestorList } from '@/components/dashboard/InvestorList';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { RiskMetrics } from '@/components/dashboard/RiskMetrics';
import { TransactionHistory } from '@/components/dashboard/TransactionHistory';
import { CircleDollarSign } from 'lucide-react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-6 w-6" />
              <span className="text-lg font-bold">Hedge Fund Dashboard</span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container px-4 py-6">
          <div className="grid gap-6 md:grid-cols-4">
            <PerformanceChart />
            <AllocationChart />
            <RiskMetrics />
            <TransactionHistory />
            <InvestorList />
            <CommentSection />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;