import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { StatCardType } from '@/app/components/statCard';
import { getSummaryCategories } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 px-5 pb-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
