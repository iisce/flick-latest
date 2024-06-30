import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { MENU_LINKS } from '@/consts';
import Link from 'next/link';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './logo';
import MobileMenuButton from './mobile-menu-button';

export default function NavbarMobile() {
	return (
		<Sheet>
			<SheetTrigger
				asChild
				className='lg:hidden'
			>
				<Button
					size='icon'
					variant='outline'
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Logo />
				<div className='grid gap-2 py-4'>
					{MENU_LINKS.map((link, key) => (
						<MobileMenuButton
							key={key}
							title={link.title}
							url={link.url}
						/>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
