'use client';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Stack from '@mui/material/Stack';
import { usePathname } from 'next/navigation';

import ThemeRegistry from '@/theme/ThemeRegistry';
import useAppDimensions from '@/hooks/useAppDimensions';
import './globals.css';
import NavbarDesktop from '@/components/navbar/NavbarDesktop';
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Alexandre Moreira',
//   description: 'Producer, musician, songwriter.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile, maxWidthDesktop, paddingXDesktop, paddingXMobile } =
    useAppDimensions();
  const pathname = usePathname();

  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'css' }}>
        <body className={inter.className}>
          <Stack
            // className={
            //   isMobile ? 'layout-container-mobile' : 'layout-container-desktop'
            // }
            direction="column"
            display="flex"
            flexGrow={1}
            justifyContent="flex-start"
            // maxWidth={isMobile ? '100vw' : maxWidthDesktop}
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            {pathname !== '/' && <NavbarDesktop />}

            {children && children}
          </Stack>
        </body>
      </ThemeRegistry>
    </html>
  );
}
