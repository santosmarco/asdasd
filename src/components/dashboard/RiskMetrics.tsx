import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { riskMetrics } from '@/lib/mock-data';
import { ArrowUpDown, BarChart2, Percent, TrendingUp } from 'lucide-react';

export function RiskMetrics() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Risk Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Sharpe Ratio</span>
            </div>
            <p className="text-2xl font-bold">{riskMetrics.sharpeRatio}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <BarChart2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Volatility</span>
            </div>
            <p className="text-2xl font-bold">{riskMetrics.volatility}%</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <ArrowUpDown className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Beta</span>
            </div>
            <p className="text-2xl font-bold">{riskMetrics.beta}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Percent className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Alpha</span>
            </div>
            <p className="text-2xl font-bold">{riskMetrics.alpha}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}