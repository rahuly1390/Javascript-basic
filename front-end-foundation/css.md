# CSS

## Syntax

### Selector

CSS selectors are used to target specific HTML elements for styling. They allow you to define which elements you want to apply styles to.

### Declaration Block

The declaration block contains a set of declarations within curly braces (`{ }`). Each declaration defines a style for the selected elements.

### Declaration

A declaration includes a property and a value separated by a colon (`:`), followed by a semicolon (`;`).

- **Property:** The aspect of the element to style (e.g., `color`, `font-size`).
- **Value:** The style to apply to the property (e.g., `red`, `16px`).

Example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

---

## Using Stylesheets

### Inline CSS

Used for styling a single element directly in the HTML.

```html
<p style="color: red; font-size: 16px;">This is styled inline.</p>
```

### Internal CSS

Styles are applied to elements within the same HTML file, inside a `<style>` tag.

```html
<style>
  p {
    color: green;
  }
</style>
```

### External CSS

Styles are applied to multiple pages using a separate `.css` file.
Link the stylesheet in the HTML file:

```html
<link rel="stylesheet" href="styles.css" />
```

---

## Selectors

### Common

- **Element selector:** Targets all elements of a specific type.
  ```css
  p {
    color: blue;
  }
  ```
  Example HTML:
  ```html
  <p>This text will be blue.</p>
  ```
- **Class selector:** Targets elements with a specific class.
  ```css
  .button {
    background-color: yellow;
  }
  ```
  Example HTML:
  ```html
  <div class="button">Click me!</div>
  ```
- **ID selector:** Targets a single element with a specific ID.
  ```css
  #header {
    font-size: 20px;
  }
  ```
  Example HTML:
  ```html
  <h1 id="header">Welcome!</h1>
  ```

### Less Common

- **Attribute selector:** Matches elements based on attributes.
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  ```
  Example HTML:
  ```html
  <input type="text" placeholder="Enter text here" />
  ```
- **Pseudo-selectors:** Target elements based on a condition (e.g., `:hover`, `:nth-child`).
  ```css
  a:hover {
    color: red;
  }
  ```
  Example HTML:
  ```html
  <a href="#">Hover over this link.</a>
  ```
- **Pseudo-elements:** Style parts of elements (e.g., `::before`, `::after`).
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```
  Example HTML:
  ```html
  <p>This is an example paragraph.</p>
  ```

---

## CSS Combinators

A CSS selector can combine multiple simple selectors:

- **Descendant selector (space):** Matches all `<p>` elements inside a `<div>`.
  ```css
  div p {
    color: gray;
  }
  ```
  Example HTML:
  ```html
  <div>
    <p>This is gray.</p>
    <span>
      <p>This is also gray.</p>
    </span>
  </div>
  ```
- **Child selector (>):** Matches immediate `<p>` children of a `<div>`.
  ```css
  div > p {
    margin: 10px;
  }
  ```
  Example HTML:
  ```html
  <div>
    <p>This is styled.</p>
    <div>
      <p>This is not styled.</p>
    </div>
  </div>
  ```
- **Adjacent sibling selector (+):** Matches the first `<p>` that is immediately preceded by an `<h1>`.
  ```css
  h1 + p {
    font-size: 14px;
  }
  ```
  Example HTML:
  ```html
  <h1>Header</h1>
  <p>This is styled.</p>
  <p>This is not styled.</p>
  ```
- **General sibling selector (\~):** Matches all `<p>` siblings after an `<h1>`.
  ```css
  h1 ~ p {
    color: green;
  }
  ```
  Example HTML:
  ```html
  <h1>Header</h1>
  <p>This is green.</p>
  <p>This is also green.</p>
  ```

---

## Sizing Units

### Relative

- `rem` (relative to root font size, default is 16px): Ideal for responsive and consistent typography.
- `%` (relative to parent element): Best for flexible layouts.
- `em` (relative to the element's font size): Useful for proportional spacing and scaling.

### Absolute

- `px` (pixels, fixed size): Best for precision but lacks responsiveness.
- `pt` (points, typically for print): Rarely used in web design.
- `in` (inches, rarely used for screens): Avoid unless working with physical measurements.

### Usage Recommendation

- **Use **************\*\*****************`rem`**************\*\*\*\*************** for font sizes\*\* to maintain consistent scaling across the app.
- **Use **************\*\*****************`%`**************\*\*\*\*************** for widths\*\* when creating responsive layouts.
- **Use **************\*\*****************`px`**************\*\*\*\*************** sparingly\*\* for small elements like borders or icons when precision is necessary.

### Example

```css
body {
  font-size: 1rem; /* Defaults to 16px */
}
.container {
  width: 100%; /* Responsive to parent width */
}
.card {
  padding: 1em; /* Scales proportionally to font size */
  border: 2px solid #333; /* Fixed size border */
}
```

---

## Box Model

### Components

The box model consists of the following areas for every element:

- **Content:** The actual content of the element (text, images, etc.).
- **Padding:** Space between the content and the border. Adds extra spacing inside the element.
- **Border:** The outer edge of the element.
- **Margin:** Space between the element's border and other elements on the page.

### Example

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

### HTML

```html
<div class="box">This is a box model example.</div>
```

---

## Display

### Display Types

- **Inline:** Elements do not start on a new line and only take up as much width as necessary.
- **Block:** Elements start on a new line and take up the full width available.
- **Inline-block:** Behaves like `inline`, but height and width properties can be set.
- **Flex:** A flexible layout model that arranges items in rows or columns.
- **Grid:** A two-dimensional layout system for arranging items in rows and columns.

### Example

```css
.inline-box {
  display: inline;
}
.block-box {
  display: block;
  width: 100%;
}
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

### HTML

```html
<div class="inline-box">Inline</div>
<div class="block-box">Block</div>
<div class="flex-container">
  <div>Flex Item 1</div>
  <div>Flex Item 2</div>
</div>
```

---

## Flexbox

### Overview

Flexbox is a layout model for aligning and distributing elements in a container, even if their sizes are dynamic.

### Example

```css
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.flex-item {
  flex: 1;
}
```

### HTML

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

### DevTools

Use browser DevTools to visualize and debug Flex

---

## CSS Grid

### Overview

CSS Grid is a powerful two-dimensional layout system for the web. It allows designers and developers to define grid structures and place items within those grids efficiently.

### Key Features

- Define rows and columns with precise control.
- Place items anywhere in the grid layout.
- Create nested grids for complex layouts.

### Example

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: 100px auto; /* Fixed first row, flexible second */
  gap: 10px; /* Space between grid items */
}

.grid-item {
  background-color: lightblue;
  border: 1px solid black;
  text-align: center;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

---

## Media Queries

### Overview

Media Queries are used to apply styles based on the characteristics of the user's device, such as its screen size, orientation, or resolution. They are essential for creating responsive web designs.

### Key Features

- Adjust layouts for different screen sizes.
- Create device-specific styles.
- Combine multiple conditions for complex rules.

### Example

```css
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (orientation: landscape) {
  .landscape-only {
    display: block;
  }
}
```

### HTML

```html
<p>Resize the browser to see the effect of media queries!</p>
<div class="landscape-only">This is visible only in landscape orientation.</div>
```

---

## Text & Typography

### Key Properties

1. **font-family:** Specifies the typeface. Always provide a fallback (e.g., "Arial, sans-serif").
2. **font-size:** Controls the text size. Use `rem` for consistent scaling.
3. **line-height:** Adjusts the vertical space between lines of text.
4. **font-weight:** Sets the thickness of text (e.g., `bold`, `normal`, `lighter`).

### Custom Fonts

Use Google Fonts or upload custom font files:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
```

### Example

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: bold;
  color: #333;
}
```

### HTML

```html
<h1>This is a heading</h1>
<p>Custom font and styles applied to this text.</p>
```

---

## Colors

### Methods

1. **HEX:** Compact, reliable, and widely supported.

   ```css
   color: #ff5733;
   ```

2. **RGB:** Allows control over opacity using `rgba`.

   ```css
   color: rgb(255, 87, 51);
   background-color: rgba(255, 87, 51, 0.5);
   ```

3. **HSL:** Makes it easier to create color schemes.
   ```css
   color: hsl(11, 100%, 60%);
   ```

### Recommendations

- Use brand colors sparingly as accents.
- Start with grayscale for layouts, then introduce colors.
- Ensure high contrast for better accessibility.

### Example

```css
header {
  background-color: #333; /* Dark gray */
  color: #fff; /* White text */
}

.highlight {
  color: rgb(255, 0, 0); /* Bright red */
}
```

### HTML

```html
<header>This is a header.</header>
<p class="highlight">This text is highlighted in red.</p>
```

---

## Specificity

### Overview

Specificity determines which CSS rule takes precedence when multiple rules target the same element. It is calculated as a numerical weight based on the type of selectors used.

### Numerical Ranking of Selectors

- **Inline Styles**: Highest specificity (e.g., `style="color: red;"` has the most weight).
- **ID Selectors**: Higher specificity than class selectors (e.g., `#header`).
- **Class Selectors**: Includes class names, attributes, and pseudo-classes (e.g., `.button:hover`).
- **Element Selectors**: Basic HTML tags (e.g., `p`, `h1`).
- **Universal Selector** and Inheritance: Lowest specificity (e.g., `*` or inherited styles).

### Specificity Examples

```css
/* Specificity order: */
#header { color: red; }    /* ID Selector: High Specificity */
.button { color: blue; }   /* Class Selector: Medium Specificity */
h1 { color: green; }       /* Element Selector: Low Specificity */

/* Inline Style: Overrides everything */
<div id="header" class="button" style="color: orange;">Styled Header</div>
```

### Diagrams

[SpeciFISHity.com](https://specifishity.com/) is a great way to visualize specificity


### DevTools

Modern browsers provide tools to inspect the cascade and understand why a rule is applied:

- **Google Chrome**: Right-click -> Inspect -> Styles.
- **Firefox**: Similar tools under the "Inspector" tab.

---

## The Cascade

### Overview

The CSS cascade determines how rules from different sources are applied when multiple styles affect the same element. Factors include origin, importance, specificity, and the order in the stylesheet.

### Cascade Layers

1. **Inline Styles:** Defined directly on an HTML element. Has the highest priority.
   ```html
   <div style="color: red;">This is inline-styled text.</div>
   ```
2. **Internal Styles:** Defined in a `<style>` tag in the `<head>` of the document.
   ```html
   <style>
     p {
       color: blue;
     }
   </style>
   <p>This is styled using internal CSS.</p>
   ```
3. **External Stylesheets:** Defined in linked CSS files.
   ```html
   <link rel="stylesheet" href="styles.css" />
   ```
4. **Browser Defaults:** Built-in styles provided by the browser. These are overridden by authored styles unless explicitly reset.
   ```css
   /* Example browser default */
   h1 {
     font-size: 2em;
   }
   ```

### The Order of Precedence

1. Inline styles
2. Internal styles
3. External styles
4. Browser defaults
5. Specificity determines which style applies for conflicting rules.
6. For rules with the same specificity, the last declared wins.

### Cascade Example

```css
/* External stylesheet */
h1 { color: green; }

/* Internal stylesheet */
<style>
h1 { color: blue; }
</style>

/* Inline style */
<h1 style="color: red;">This text is red.</h1>
```

### Browser DevTools

Use DevTools to trace cascading rules and pinpoint conflicts. It displays overridden styles crossed out, making it clear why certain styles are applied.
