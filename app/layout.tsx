import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndaHouse Global - Ahora somos globales",
  description: "Expandimos nuestros horizontes para ofrecerte las mejores oportunidades inmobiliarias a nivel mundial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
