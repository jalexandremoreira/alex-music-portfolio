'use client';
import Stack from '@mui/material/Stack';
import { Sintony } from 'next/font/google';
import { usePathname } from 'next/navigation';

import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import ThemeRegistry from '@/theme/ThemeRegistry';
import theme from '@/theme';

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

  const { palette } = theme;

  const bgColor =
    pathname === '/about-me' || pathname === '/my-studio'
      ? palette.primary[800]
      : pathname === '/contact-me' || pathname === '/business-card'
      ? palette.primary.main
      : palette.primary[700];

  return (
    <html lang="en">
      <body className={sintony.className} style={{ backgroundColor: bgColor }}>
        <ThemeRegistry options={{ key: 'css' }}>
          <Stack
            direction="column"
            display="flex"
            flex={1}
            justifyContent="flex-start"
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            {pathname !== '/' && pathname !== '/business-card' && <Navbar />}

            {children && children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
