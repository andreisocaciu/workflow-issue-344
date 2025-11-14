import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow ArrayBuffer Error Reproduction',
  description: 'Minimal reproduction of ArrayBuffer error',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

