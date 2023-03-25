import './globals.css'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata = {
  title: 'TestNextJS13',
  description: 'A project for NextJS13 study ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.classname}`}>
        <nav class='bg-[#8cc0e0]'>
          <ul class="flex">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="">Home</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="about">About</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="contact">Contact</a>
            </li>
          </ul>
        </nav>  
        {children}
      </body>
    </html>
  )
}
