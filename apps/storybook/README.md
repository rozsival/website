# @rozsival/storybook

Component showcase and documentation using Storybook.

## Development

```bash
# Start Storybook
pnpm dev

# Build static Storybook
pnpm build

# Run interaction tests
pnpm test
```

## Features

- **Visual testing**: See all component variants
- **A11y testing**: Automatic accessibility checks
- **Interaction testing**: Test component behavior
- **Theme switching**: Toggle between light and dark mode
- **Auto-documentation**: Generated from TypeScript types

## Adding Stories

Create a new file in `stories/` with the `.stories.tsx` extension:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '@rozsival/ui';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    // props
  },
};
```

## Structure

```
├── .storybook/
│   ├── main.ts      # Storybook configuration
│   └── preview.tsx  # Global decorators and parameters
├── stories/
│   ├── button.stories.tsx
│   ├── card.stories.tsx
│   └── input.stories.tsx
└── styles/
    └── globals.css
```
