import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page() {
  // waterfall pattern
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* loading.tsx kullanabilirdik ama component'lerden birinin veri alımı yavaşsa bu daha uzun süre beklememize yol açar */}
        {/* bu yüzden her component kendi Suspense'i ile sarılabilir. Böylece kullanıcı içinde daha işlevli bir UI oluşturulur. */}
        {/* sayfanın gereksinimi, tasarımı vb. isterlerine göre loading.tsx veya suspense kullanılabilir. */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
