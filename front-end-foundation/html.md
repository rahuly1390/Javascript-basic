# HTML

---

## **Syntax**

### **Element**

An HTML document is made up of various elements. An element consists of an opening tag, content, and a closing tag.

```html
<p>This is a paragraph.</p>
```

- The `<p>` is the opening tag.
- "This is a paragraph." is the content.
- `</p>` is the closing tag.

### **Opening Tag**

The opening tag starts an element in HTML. It typically contains the element’s name and can have attributes.

```html
<a href="https://www.example.com">Click Here</a>
```

### **Content**

The content is the information inside the opening and closing tags.

```html
<p>This is the text content of the paragraph.</p>
```

### **Closing Tag**

The closing tag marks the end of an element in HTML. It’s usually the same as the opening tag, except it includes a forward slash before the tag name.

```html
<p>This is the end of the paragraph.</p>
```

### **Attribute**

Attributes are used to provide additional information about an HTML element. They are placed inside the opening tag.

```html
<a href="https://www.example.com">Example</a>
```

- `href` is an attribute specifying the target URL for the anchor (`<a>`) element.

### **Comments**

HTML comments are placed between `<!--` and `-->`. They are ignored by the browser but are useful for documenting the code.

```html
<!-- This is a comment -->
```

---

## **Common Elements**

### **Boilerplate (doctype, html, head, body)**

Every HTML document should begin with a `<!DOCTYPE>` declaration, followed by the `html`, `head`, and `body` tags.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
```

- `<!DOCTYPE html>` declares the document type and HTML version.
- `<html>` encapsulates the entire HTML document.
- `<head>` contains meta-information, like charset and title.
- `<body>` contains the actual content of the webpage.

### **Headings (`h1`, `h2`, etc.)**

Headings are used to structure content. There are six heading levels in HTML: `h1` to `h6`.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

- `h1` is the largest and most important.
- `h2` to `h6` are progressively smaller in size.

### **Paragraphs (`p`)**

The `<p>` element represents a paragraph of text.

```html
<p>This is a paragraph of text.</p>
```

### **Anchor (`a`)**

An anchor (`<a>`) tag is used to create hyperlinks. Anchor tags have the `href` attribute for defining the link destination.

```html
<a href="https://www.example.com">Click Here</a>
```

#### **Self-closing or Void Elements**

Some elements are self-closing, meaning they don’t require a closing tag. These are called void elements.

```html
<img src="image.jpg" alt="An image" />
```

The `<img>` tag doesn’t require a closing tag.

#### **Relative vs Absolute Paths**

- **Relative Paths**: Point to resources within the same website.
  ```html
  <a href="page2.html">Go to Page 2</a>
  ```
- **Absolute Paths**: Fully qualified paths including protocol and domain.
  ```html
  <a href="https://www.example.com/page2.html">Go to Page 2</a>
  ```

### **Attributes**

Attributes provide additional information about an element.

#### **Global Attributes**

- `id`, `class`, and `style` are common global attributes found in most HTML elements.

```html
<p id="first-paragraph" class="highlight" style="color: red;">This is a styled paragraph.</p>
```

#### **Local/Specific Attributes**

- `value`, `src`, `href` are examples of attributes used in specific elements.

```html
<form action="/submit">
  <input type="text" value="Default value" name="username" />
  <button type="submit">Submit</button>
</form>
```

### **Image (`img`)**

The `<img>` element is used to display images in a webpage. It is a self-closing tag with the `src` attribute specifying the image file location.

```html
<img src="image.jpg" alt="Description of image" />
```

- `src`: Specifies the image source.
- `alt`: Provides alternative text for the image if it can’t be displayed.

### **Break (`br`)**

The `<br>` tag is a self-closing tag used to insert a line break.

```html
<p>This is some text<br />And this is on a new line.</p>
```

### **Scalable Vector Graphics (SVG)**

SVG is a markup language for defining vector-based graphics. The `<svg>` tag is used to embed scalable images like icons.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

### **Lists**

HTML supports both ordered and unordered lists.

- **Ordered List (`ol`)**: Displays items in a numbered list.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

- **Unordered List (`ul`)**: Displays items with bullet points.

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

### **Div (`div`, block)**

The `<div>` element is a block-level container used to group content for styling and layout purposes.

```html
<div class="container">
  <p>This is content inside a div element.</p>
</div>
```

#### **Semantic Alternatives**

Modern HTML emphasizes semantic elements that better describe the page structure, such as:

- `<header>`: Represents the page header.
- `<main>`: Represents the main content.
- `<footer>`: Represents the page footer.
- `<nav>`: Represents navigation links.
- `<address>`: Represents contact information.

```html
<header>
  <h1>Website Title</h1>
</header>
<main>
  <p>Main content goes here.</p>
</main>
<footer>
  <address>Contact us at: email@example.com</address>
</footer>
```

### **Span (`span`, inline)**

The `<span>` tag is used to style a portion of text or a small section of content inside a block-level element. It is an inline element.

```html
<p>This is a <span class="highlight">highlighted</span> word.</p>
```

### **Tool: W3C Validation**

W3C provides an HTML validator to check if your HTML code follows the correct syntax and standards. You can check your HTML by pasting it into [W3C Validator](https://validator.w3.org/).

### **Tables**

The `<table>` element is used to represent tabular data, and it is composed of `<tr>`, `<th>`, and `<td>` tags.

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>
```

---

## **Conventions**

### **Folder Names, File Names**

- Folder and file names should be lowercase and use dashes to separate words.

```bash
my-website/
├── index.html
├── about-us.html
└── contact-page.html
```

### **HTML Tags**

- All HTML tags should be written in lowercase.

```html
<h1>Welcome</h1>
<p>This is a paragraph.</p>
```

---

Let me know if you need any further refinements or additions to these topics!

<!-- ## Labs

- Exercise 1
- Exercise 2 -->

Certainly! Here’s the content for your **Form Elements** topic:

---

## **Form Elements**

### **Form**

The `<form>` element is used to create interactive forms that allow users to enter data. Forms include various input elements like text fields, radio buttons, checkboxes, and buttons. Forms can submit data to a server for processing.

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>
```

- **action**: Defines where the form data will be sent upon submission.
- **method**: Specifies how the data will be sent (e.g., GET, POST).

### **Input**

The `<input>` element is used to create interactive controls in a form. Depending on the type attribute, it can represent various types of input fields like text boxes, password fields, checkboxes, and more.

#### **Text**

The text input field allows users to input a string of text.

```html
<input type="text" id="username" name="username" />
```

#### **Password**

The password input field masks the user's input as they type.

```html
<input type="password" id="password" name="password" />
```

- The value entered is not shown; instead, dots or asterisks are displayed.

#### **Checkbox**

The checkbox input type is used for selection of multiple options.

```html
<input type="checkbox" id="subscribe" name="subscribe" value="yes" />
<label for="subscribe">Subscribe to newsletter</label>
```

- Multiple checkboxes can be used in a form to allow selecting more than one option.

#### **Radio**

Radio buttons are used to select only one option from a group of options.

```html
<input type="radio" id="male" name="gender" value="male" />
<label for="male">Male</label>
<br />
<input type="radio" id="female" name="gender" value="female" />
<label for="female">Female</label>
```

- `name` attribute groups radio buttons together, ensuring that only one radio button can be selected at a time.

### **Label**

The `<label>` element is used to define a label for an input element. This helps with accessibility and improves the user experience by allowing users to click on the label to focus on the related input field.

```html
<label for="username">Username:</label> <input type="text" id="username" name="username" />
```

- **for**: Links the label to the corresponding input field via its `id`.

### **Button**

The `<button>` element is used to create clickable buttons in a form. The type attribute defines the button's behavior. Common values are "submit" and "reset."

```html
<button type="submit">Submit Form</button> <button type="reset">Reset Form</button>
```

- `submit`: Submits the form data.
- `reset`: Resets all form elements to their initial values.

### **Dropdown (Select > Option)**

A dropdown list is created using the `<select>` element, where each available option is represented by an `<option>` element. It’s typically used for allowing users to choose from multiple items.

```html
<select name="cars" id="carSelect">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

- **`<select>`**: Creates the dropdown menu.
- **`<option>`**: Represents an individual item in the dropdown list.

---

### **Tool: Emmet**

Emmet is a tool that allows developers to type shorthand HTML and automatically expand it into full tags. For example:

### Example 1: HTML Boilerplate

```html
html:5
```

Emmet expands to:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### Example 2: Simple Tag (Single Element)

Shorthand:

```html
a#link
```

Emmet expands to:

```html
<a id="link"></a>
```

Explanation:

- `a`: Creates an anchor tag.
- `#link`: Assigns an `id` of "link" to the anchor.

### Example 3: Medium Complexity (List with Items)

Shorthand:

```html
ul>li*3
```

Emmet expands to:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Explanation:

- `ul`: Creates an unordered list (`<ul>`).
- `>li*3`: Adds 3 list items inside the unordered list.

---

<!-- ## Labs

- Exercise 3 -->

<!--
## Exercise 1 (layout.html)

Create a layout template including the common elements used in all pages.

1. Create a folder named **prs-design** and open it in Visual Studio Code
1. Create `layout.html`
1. Add Boilerplate (`doctype`, `html`, `head`, `body`)
1. Create an element to represent each area of the site (`header`, `main`, `nav`, "content" `section`)
1. Add this `svg` logo to the `header` followed by the name of the application "Purchase Request System"
   - https://logoipsum.com/artwork/245
   - click the copy icon and paste the `svg` code into your page
1. Add a link `a` with the content **Sign In**
1. Add these pages at the root of your project folder
   - Vendors (vendors.html, vendor-create.html, vendor-edit.html)
1. Add list `ul` of anchor `a` links inside `nav`
   - Requests (#)
   - Products (#)
   - Vendors (#)
   - Users (#)
1. Add a heading `h2` to the "main content" `section` of the page with the content **Home**

## Exercise 2 (vendors.html)

1. Add a heading `h2` to the "main content" `section` of the page with the content **Vendors**
1. Add a link `a` with the content **Create a vendor** that navigates to `vendor-create.html`
1. Create a card `div` for a vendor with an `address` element inside
1. Inside the `address` include:
   - vendor name in a `span`
   - vendor abbreviation in a `span`
   - surround/group the name and abbreviation in a div
   - vendor address with lines separated by `br`

## Exercise 3 (vendor-create.html) -->
