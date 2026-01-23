# @rozsival/ui

Shadcn-inspired component library built on Radix UI primitives.

## Components

| Component  | Description                          |
| ---------- | ------------------------------------ |
| Button     | Primary action element with variants |
| Card       | Content container with header/footer |
| Input      | Text input field                     |
| Textarea   | Multi-line text input                |
| Link       | Styled anchor element                |
| Navigation | Responsive navigation system         |

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@rozsival/ui';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><IconComponent /></Button>
```

## Navigation

```tsx
import {
  Navigation,
  NavigationBrand,
  NavigationLinks,
  NavigationItem,
  NavigationToggle,
  useNavigation,
} from '@rozsival/ui';

export function Header() {
  const { open, setOpen } = useNavigation();

  return (
    <Navigation>
      <NavigationBrand>Logo</NavigationBrand>
      <NavigationLinks mobileOpen={open}>
        <NavigationItem active>Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
      </NavigationLinks>
      <NavigationToggle open={open} onOpenChange={setOpen} />
    </Navigation>
  );
}
```

## Theming

Components use CSS custom properties from `@rozsival/theme`. Import the theme styles in your app:

```tsx
import '@rozsival/theme/styles.css';
```
