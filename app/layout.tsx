import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';


export const metadata = {
  title: 'Fabric Chowk',
  description: 'B2B Application for Fabrics',
  icon: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
