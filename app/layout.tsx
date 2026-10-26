import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liga Veteranos Vallès",
  description: "Versión mejorada de la web de la liga de veteranos del Vallès",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
