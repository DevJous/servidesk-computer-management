import { auth } from '@/auth';
import { Header } from '@/components/main-layout-2/Header';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="min-h-full">
      <div className="bg-indigo-600">
        <Header
          user={{
            email: session.user.email,
          }}
        />
      </div>

      {children}
    </div>
  );
}
