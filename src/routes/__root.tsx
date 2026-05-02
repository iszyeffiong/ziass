import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'

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
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png?v=2',
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
  notFoundComponent: () => <NotFound />,
})

function RootComponent() {
  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem('ziass-theme')
      const nextTheme =
        stored === 'light' || stored === 'dark'
          ? stored
          : 'light'

      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme
    } catch (error) {
      // Ignore
    }
  }, [])

  return (
    <RootDocument>
      <div
        className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0B1120] dark:text-slate-100"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen pt-24" suppressHydrationWarning>
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-24 h-24 bg-[var(--brand-light)] rounded-3xl flex items-center justify-center mb-8 animate-bounce">
        <span className="text-4xl font-bold text-[var(--brand)]">404</span>
      </div>
      <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
      <p className="text-[var(--text-muted)] max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-8 py-4 bg-[var(--brand)] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[var(--brand)]/20 transition-all"
      >
        Back to Home
      </a>
    </div>
  )
}
