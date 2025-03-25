import clsx, { ClassValue } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

import { CONTRACT } from '@/constant/contract';

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function constructMetadata({
  title = CONTRACT.symbol,
  description = CONTRACT.name,
  image = CONTRACT.logo1,
  icons = '/favicon.ico',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

  return {
    title,
    description,
    keywords: `Cryptocurrency, Memecoin, Tokenomics, ${CONTRACT.name}, ${CONTRACT.symbol}`,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@twitter',
    },
    icons,
    metadataBase: new URL(baseUrl),
  };
}
