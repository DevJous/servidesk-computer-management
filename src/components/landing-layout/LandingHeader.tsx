'use client';

import LogoServidesk from '@/../public/logo.png';
import { Container } from '@/components/Container';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillTelephonePlusFill } from 'react-icons/bs';

export function LandingHeader() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-2">
          <Link
            href="/public"
            aria-label="Home"
            className="flex gap-2 items-center"
          >
            <Image src={LogoServidesk} alt="Logo" className="h-12 w-12" />
            <h1 className="text-3xl font-bold text-[#354f50]">ServiDesk</h1>
          </Link>

          <div className="hidden lg:flex items-center lg:gap-10">
            <p className="text-[#354f50] font-semibold inline-flex items-center gap-x-1.5">
              <BsFillTelephonePlusFill
                className="-ml-0.5 h-6 w-6 fill-violet-800"
                aria-hidden="true"
              />
              24/7 soporte:{' '}
              <Link
                href="tel:1-800-700-6200"
                className="text-[#354f50] font-semibold"
              >
                1-800-700-6200
              </Link>
            </p>

            <p className="text-[#354f50] font-semibold inline-flex items-center gap-x-1.5">
              <EnvelopeIcon
                className="-ml-0.5 h-6 w-6 fill-violet-800"
                aria-hidden="true"
              />
              Correo:{' '}
              <Link
                href="mailto:servidesk@dermolink.org"
                className="text-[#354f50] font-semibold"
              >
                servidesk@dermolink.org
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-300 px-3 py-2 font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-800"
            >
              <UserCircleIcon
                className="-ml-0.5 h-6 w-6 fill-violet-800"
                aria-hidden="true"
              />
              Login
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
}
