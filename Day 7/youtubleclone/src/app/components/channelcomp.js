"use client";

import { usePathname, useSearchParams, useRouter, useParams } from 'next/navigation';
import React from 'react';

export default function ChannelComp() {
  const params = useParams();
  const searchParams = useSearchParams();
  const a = searchParams.get("ct"); 
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <h1>My params are: {params.channel}</h1>
      <p>My path is: {pathname}</p>
      <button onClick={() => router.push('/my1stchannel')}>
        Take me to the page
      </button>
      <h1>My search name is: {a}</h1>
    </div>
  );
}