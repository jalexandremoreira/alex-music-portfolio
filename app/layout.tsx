'use client';
import Stack from '@mui/material/Stack';
import { Sintony } from 'next/font/google';
import { usePathname } from 'next/navigation';

import './globals.css';
import NavbarDesktop from '@/components/navbar/NavbarDesktop';
import ThemeRegistry from '@/theme/ThemeRegistry';

export const sintony = Sintony({
  subsets: ['latin-ext'],
  variable: '--font-sintony',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const bgColor =
    pathname === '/about-me' || pathname === '/my-studio'
      ? 'primary.800'
      : pathname === '/contact-me'
      ? 'primary.main'
      : 'primary.700';

  return (
    <html lang="en">
      <body className={sintony.className}>
        <ThemeRegistry options={{ key: 'css' }}>
          <Stack
            // className={
            //   isMobile ? 'layout-container-mobile' : 'layout-container-desktop'
            // }
            direction="column"
            display="flex"
            flex={1}
            justifyContent="flex-start"
            bgcolor={bgColor}
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            {pathname !== '/' && <NavbarDesktop />}

            {children && children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
