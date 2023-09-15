import "./globals.css";

export const metadata = {
  title: "Midas Stones",
  description: "Plateforme de vente de pierre précieuses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
