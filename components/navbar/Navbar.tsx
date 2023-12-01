'use client';

import React from 'react';

import useAppDimensions from '@/hooks/useAppDimensions';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export interface NavLinkProps {
  title: string;
  link: string;
}

export default function Navbar() {
  const { isMobile } = useAppDimensions();

  const navLinks: NavLinkProps[] = [
    { title: 'my music', link: '/my-music' },
    { title: 'music I recorded', link: '/music-i-recorded' },
    { title: 'about me', link: '/about-me' },
    { title: 'my studio', link: '/my-studio' },
    { title: 'contact me', link: '/contact-me' },
  ];

  if (!isMobile) {
    return <NavbarDesktop navLinks={navLinks} />;
  }
  return <NavbarMobile navLinks={navLinks} />;
}
