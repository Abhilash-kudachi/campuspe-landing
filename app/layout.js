import "./globals.css";

export const metadata = {
  title: "CampusPe — Make your campus life easier",
  description: "Discover student-friendly financial tools and offers with CampusPe."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
