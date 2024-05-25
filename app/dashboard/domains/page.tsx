import React from 'react';
import PageTitle from '@/components/dashboard/PageTitle';

export default function DomainsPage() {
  const subText: string = "Display all related content here.";

    return (
      <section className="h-full flex flex-col gap-4">
        <PageTitle subText={subText} />
      </section>
    );
}