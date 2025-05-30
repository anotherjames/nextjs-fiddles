import FplTable from '@/app/ui/fpl-action';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-9xl text-pink-300`}>
        FPL data; hi Ben!
      </h1>
      <Suspense fallback={<span>Loading...</span>}>
        <FplTable></FplTable>
      </Suspense>
    </main>
  );
}
