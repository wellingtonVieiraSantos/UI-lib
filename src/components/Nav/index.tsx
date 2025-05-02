'use client'
import { Home, Search, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'

const navLinks = [
  { path: '/', textLink: 'Home', iconLink: Home },
  { path: '/login', textLink: 'Profile', iconLink: User },
  { path: '/drawer', textLink: 'Settings', iconLink: Settings }
]

export default function Header() {
  const pathName = usePathname()

  return (
    <>
      <div className='hidden md:block md:fixed top-0 w-full h-15 bg-primary px-2 z-9999'>
        <nav className='h-full flex justify-between items-center'>
          <h2 className='flex-1'>Logo</h2>
          <ul className='flex flex-1 gap-2 text-terciary/50'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`relative flex items-center justify-center flex-1 after:absolute after:-bottom-2 after:scale-0 
                  after:w-full after:h-[1px] after:bg-terciary after:transition after:duration-300 transition-colors duration-300 ${
                    pathName === link.path && 'text-terciary after:scale-100'
                  }`}
              >
                <Link href={link.path} className=''>
                  <span className={``}>{link.textLink}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-1 justify-end items-center gap-2'>
            <Button
              variantButton='border'
              icon={Search}
              onlyIcon
              sizeButton='md'
            />
            <Button
              variantButton='ghost'
              icon={User}
              onlyIcon
              sizeButton='lg'
            />
          </div>
        </nav>
      </div>
      {/* Mobile navbar bottom */}
      <div
        className={`md:hidden w-dvw h-18 fixed bottom-0 bg-primary rounded-t-2xl text-[12px] z-10 shadow-after`}
      >
        <nav className='h-full'>
          <ul className='h-full flex justify-around items-center text-terciary/30'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`relative flex-1 ${
                  pathName === link.path && 'text-terciary '
                }`}
              >
                <Link
                  href={link.path}
                  className='grid place-items-center gap-1'
                >
                  <link.iconLink
                    size={26}
                    className={`${
                      pathName === link.path && '-translate-y-[18px]'
                    } transition-all duration-200 z-10`}
                  />
                  <span
                    className={` ${
                      pathName === link.path
                        ? ' translate-y-1 opacity-100'
                        : ' translate-y-5 opacity-0'
                    } transition duration-300`}
                  >
                    {link.textLink}
                  </span>
                  <div
                    className={`${
                      pathName === link.path ? 'absolute' : 'hidden'
                    } -top-10 size-18 bg-button-secondary rounded-full border-6 dark:border-secondary
                      after:absolute after:size-7 after:bg-transparent after:-left-[30px] after:top-[22px]
                      after:rounded-tr-full after:shadow-[1px_-14px_0_0_theme(--color-terciary)] dark:after:shadow-[0px_-14px_0_0_theme(--color-secondary)]
                      before:absolute before:size-7 before:bg-transparent before:-right-[30px] before:top-[22px]
                      before:rounded-tl-full before:shadow-[-1px_-14px_0_0_theme(--color-terciary)] dark:before:shadow-[0px_-14px_0_0_theme(--color-secondary)]`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
