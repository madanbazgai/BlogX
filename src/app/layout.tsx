import './globals.css'


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
      <body >{children}</body>
    </html>
  )
}
