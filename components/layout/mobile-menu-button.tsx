'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { usePathname } from 'next/navigation';

export default function MobileMenuButton(link: { url: string; title: string }) {
	const pathName = usePathname();
	return (
		<Link
			className={cn(
				navigationMenuTriggerStyle(),
				'w-full justify-start uppercase',
				pathName === link.url &&
					'font-bold text-primary bg-secondary'
			)}
			href={link.url}
		>
			{link.title}
		</Link>
	);
}
