import NavBar from '@/components/Header/NavBar';
import '../app/globals.css';
export const metadata = {
  title: "ABC Travels",
  description: "ABC travels is a leading travel agency in Nepal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}