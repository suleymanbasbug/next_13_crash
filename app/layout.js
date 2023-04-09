import "./globals.css";

export const metadata = {
  title: "SBasbug",
  description: "Next 13 Crash",
  keywords: "web development, web design, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
