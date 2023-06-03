import Header from '@/components/Header'
import '../globals.css'
import Banner from '@/components/Banner'


export const metadata = {
  title: 'BlogX',
  description: 'This is the blog app developed by Madan Bazgai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <Header />
        <Banner />
        {children}</body>
    </html>
  )
}
