# Lexical Editor

**Core building blocks for Rich Text Editors with Lexical JS**<br />
High-quality, accessible, and customizable components for Rich Text Editors with Lexical JS

## Installation

### Install shadcn/ui

First, you will need to install and configure [shadcn/ui](https://ui.shadcn.com) in your project.<br />
Follow the installation guide in the shadcn/ui documentation.

### Install lexical editor block

Once shadcn/ui is set up, you can install `lexical editor` block using the shadcn CLI:

```bash
npx shadcn@latest add "https://lexical.kamilo.dev/r/lexical.json"
```

This command will install the whole editor including it's components and dependencies

### Insall lexical editor components

For installing individual components you can use the shadcn CLI as follows:

```bash
npx shadcn@latest add "https://lexical.kamilo.dev/r/[component].json"
```

### Usage

After installation, import and start using the components in your project:

```tsx
import { LexicalEditor } from "@/components/lexical/editor";
```