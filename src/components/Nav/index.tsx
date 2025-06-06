'use client'
import {
  Home,
  Settings,
  User,
  MessageCircleMore,
  Heart,
  Bell
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'
import { useEffect, useRef } from 'react'
import { Switch } from '../ui/Switch'

const navLinks = [
  {
    path: '/dropdown',
    textLink: 'Messages',
    iconLink: MessageCircleMore,
    notification: 2
  },
  { path: '/radio', textLink: 'Likes', iconLink: Heart },
  { path: '/', textLink: 'Home', iconLink: Home },
  { path: '/drawer', textLink: 'Settings', iconLink: Settings },
  { path: '/login', textLink: 'Profile', iconLink: User }
]

export default function Header() {
  const pathName = usePathname()
  const navbarRef = useRef<HTMLDivElement>(null)
  const scrollYPos = useRef(0)

  useEffect(() => {
    const scroll = () => {
      const currentScroll = window.scrollY
      if (!navbarRef.current) return
      navbarRef.current.style.transform =
        currentScroll > scrollYPos.current
          ? `translateY(-80px)`
          : `translateY(0)`

      scrollYPos.current = currentScroll
    }
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <>
      <div
        ref={navbarRef}
        className='hidden md:block md:fixed top-0 w-full bg-background h-20 px-2 z-10 transition duration-300'
      >
        <nav className='h-full flex justify-between items-center'>
          <h2 className='flex-1'>Logo</h2>
          <ul className='flex flex-1 gap-2 text-foreground-secondary'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`relative flex items-center justify-center flex-1 after:absolute after:-bottom-2 after:scale-0 hover:text-foreground
                  after:w-full after:h-[1px] after:bg-foreground after:transition after:duration-300 transition-colors duration-300 ${
                    pathName === link.path && 'text-foreground after:scale-100'
                  }`}
              >
                <Link href={link.path} className=''>
                  <span className={`font-montserrat`}>{link.textLink}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-1 justify-end items-center gap-4'>
            <Switch />
            <Button variant='ghost' size='icon'>
              <Badge variant='notification' className='-right-2 -top-2'>
                2
              </Badge>
              <Bell />
            </Button>
            <Avatar className='border'>
              <AvatarImage
                src={'https://avatars.githubusercontent.com/u/104274788?v=4'}
                alt='foto perfil'
              />
              <AvatarFallback>WV</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </div>
      {/* Mobile navbar bottom */}
      <div
        className={`md:hidden w-dvw h-17 fixed bottom-0 rounded-t-3xl bg-button text-sm 
        z-10 shadow-[1px_-14px_0_0_theme(--color-background)]`}
      >
        <nav className='h-full'>
          <ul className='h-full flex items-center text-border'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`relative flex-1 ${
                  pathName === link.path && 'text-button-foreground'
                }`}
              >
                <Link
                  href={link.path}
                  className='grid place-items-center gap-1'
                >
                  <span className='relative inline-block z-10'>
                    <link.iconLink
                      className={`size-6 ${
                        pathName === link.path
                          ? '-translate-y-[18px]'
                          : 'translate-y-2'
                      } transition-all duration-200`}
                    />
                    {link.notification && (
                      <Badge
                        variant='notification'
                        className={`${
                          link.path === pathName ? 'opacity-0' : 'opacity-100'
                        } transition duration-200`}
                      >
                        {link.notification.toString()}
                      </Badge>
                    )}
                  </span>
                  <span
                    className={`font-montserrat ${
                      pathName === link.path
                        ? ' translate-y-0 opacity-100'
                        : ' translate-y-3 opacity-0'
                    } transition duration-300`}
                  >
                    {link.textLink}
                  </span>
                  <div
                    className={`${
                      pathName === link.path ? 'absolute' : 'hidden'
                    } -top-10 size-17 bg-button rounded-full border-6 border-background 
                      after:absolute after:w-7 after:h-5 after:bg-transparent after:-left-[32px] after:top-[23px]
                      after:rounded-tr-full after:shadow-[3px_-6px_0_0_theme(--color-background)]
                      before:absolute before:w-7 before:h-5 before:bg-transparent before:-right-[32px] before:top-[23px]
                      before:rounded-tl-full before:shadow-[-3px_-6px_0_0_theme(--color-background)]`}
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
