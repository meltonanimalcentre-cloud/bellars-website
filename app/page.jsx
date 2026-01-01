export const metadata = {
  title: "Bellars Grooming",
  description: "Premium grooming with a calm, caring touch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
