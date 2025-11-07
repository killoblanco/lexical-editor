import type { EditorThemeClasses } from "lexical"

export const editorTheme: EditorThemeClasses = {
  paragraph: "my-5",
  heading: {
    h1: "text-4xl mb-3.5",
    h2: "text-2xl mb-4",
    h3: "text-xl mb-2.5",
    h4: "mb-2",
  },
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "[text-decoration-line:underline_line-through]",
  },
}
