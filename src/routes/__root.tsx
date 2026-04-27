import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'

import { MoonStar, SunMedium } from 'lucide-react'
import React from 'react'

import appCss from '../styles.css?url'
import { Navbar } from '#/components/Navbar'
import { Footer } from '#/components/Footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'color-scheme',
        content: 'light dark',
      },
      {
        title: 'ZIASS Limited',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `
          (function () {
            try {
              var stored = localStorage.getItem('ziass-theme');
              var theme = stored === 'light' || stored === 'dark' ? stored : 'light';
              document.documentElement.classList.toggle('dark', theme === 'dark');
              document.documentElement.style.colorScheme = theme;
            } catch (e) {}
          })();
        `,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem('ziass-theme')
      const nextTheme =
        stored === 'light' || stored === 'dark'
          ? stored
          : 'light'

      setTheme(nextTheme)
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme
    } catch (error) {
      setTheme('light')
    }
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme((current) => {
      const nextTheme = current === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem('ziass-theme', nextTheme)
      } catch (error) {
        // Ignore storage failures.
      }

      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme

      return nextTheme
    })
  }, [])

  return (
    <RootDocument>
      <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0B1120] dark:text-slate-100">
        <Navbar />
        <main className="min-h-screen pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>

      <Scripts />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>{children}</body>
    </html>
  )
}
