'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, getLocaleName, getLocaleFlag, locales } from '@rozsival/i18n';
import { useMessages } from '@rozsival/i18n/client';
import { useTheme } from '@rozsival/theme';
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@rozsival/ui';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const { t } = useMessages();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Navigation links configuration
  const navLinks = [
    { href: `/${locale}`, label: t('common.navigation.home') },
    { href: `/${locale}/story`, label: t('common.navigation.story') },
    { href: `/${locale}/cv`, label: t('common.navigation.cv') },
    { href: `/${locale}/blog`, label: t('common.navigation.blog') },
    { href: `/${locale}/contact`, label: t('common.navigation.contact') },
  ];
  
  // Get alternate locale for language switcher
  const alternateLocale = locales.find((l) => l !== locale) ?? 'en';
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            {t('common.siteName')}
          </Link>
        </div>
          
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || (link.href.includes('/blog') && pathname.includes('/blog'))
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/${alternateLocale}${pathnameWithoutLocale}`}>
              <span className="mr-2">
                {getLocaleFlag(alternateLocale)}
              </span>
              {getLocaleName(alternateLocale)}
            </Link>
          </Button>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            // eslint-disable-next-line formatjs/no-literal-string-in-jsx
            aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          {/* Mobile Menu (Sheet) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                {/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left">{t('common.siteName')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-sm font-medium ${
                      pathname === link.href || (link.href.includes('/blog') && pathname.includes('/blog'))
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
