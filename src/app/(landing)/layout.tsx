import { LandingFooter } from '@/components/landing-layout/LandingFooter';
import { LandingHeader } from '@/components/landing-layout/LandingHeader';
import React from 'react';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingHeader />
      <main className="flex-auto">{children}</main>
      <LandingFooter />
    </>
  );
}
