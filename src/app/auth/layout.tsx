import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import '@/styles/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="relative isolate overflow-hidden h-screen bg-violet-600">
      <div className="absolute h-full w-full inset-0 -z-10 opacity-95">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          fill
        />
      </div>
      {children}
    </div>
  );
}
