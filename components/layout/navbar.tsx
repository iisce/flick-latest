import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './logo';
import { NavbarLinks } from './navbar-links';
import NavbarMobile from './navbar-mobile';

export default function Navbar(): JSX.Element {
	return (
		<header className={`drop-shadow bg-primary-light`}>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
				aria-label='Global'
			>
				<Logo />
				<NavbarLinks />
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<Button asChild>
						<Link
							href={'/contacts'}
							className='gap-1.5'
						>
							Contact
							<ArrowRight className='h-4 w-4' />
						</Link>
					</Button>
				</div>
				<NavbarMobile />
			</nav>
		</header>
	);
}
