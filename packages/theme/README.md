# @rozsival/theme

Theming system with dark/light mode support.

## Features

- CSS custom properties for design tokens
- Light and dark mode with system preference detection
- Persistent theme preference in localStorage
- SSR-safe implementation

## Usage

### Import Styles

```tsx
// In your root layout or global CSS
import '@rozsival/theme/styles.css';
```

### Theme Provider

```tsx
import { ThemeProvider } from '@rozsival/theme';

export default function RootLayout({ children }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}
```

### Using the Theme

```tsx
import { useTheme } from '@rozsival/theme';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme (current: {resolvedTheme})
    </button>
  );
}
```

### Utility Function

```tsx
import { cn } from '@rozsival/theme';

// Merge class names with Tailwind conflict resolution
<div className={cn('p-4 bg-primary', isActive && 'bg-accent')} />;
```

## Design Tokens

All design tokens are defined as CSS custom properties in `styles.css`. Colors use HSL values for easy manipulation.
