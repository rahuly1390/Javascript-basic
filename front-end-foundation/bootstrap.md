# Bootstrap

## Syntax

In Bootstrap, you apply predefined styles to HTML elements by adding one or more CSS classes to their `class` attribute. Bootstrap's utility classes and components are built on a consistent class naming convention, making it easy to style elements directly in your HTML.

```html
<element class="class-name"></element>
```

- **`element`**: The HTML element to which you want to apply styles (e.g., `<div>`, `<button>`).
- **`class-name`**: One or more class names, separated by spaces, that apply specific Bootstrap styles.

---

#### Example:

1. **Single Class**  
   Add a Bootstrap utility class to center-align text:

```html
<p class="text-center">This text is center-aligned.</p>
```

2. **Multiple Classes**  
   Combine classes to achieve multiple effects:

```html
<button class="btn btn-primary w-100">Click Me</button>
```

In this example:

- `btn`: Applies default button styling.
- `btn-primary`: Adds a primary color background to the button.
- `w-100`: Makes the button span the full width of its container.

---

#### Key Notes:

- Separate multiple class names with a **single space**.
- Bootstrap class names follow a predictable pattern (e.g., `text-*` for text alignment, `btn-*` for button styles).
- **Custom Styles**: If Bootstrap styles don't fully meet your needs, you can also create your custom classes and combine them with Bootstrap ones.

## Reference

- [Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Using Bootstrap

#### Including from a **Content Delivery Network (CDN)**

The easiest way to use Bootstrap is via a CDN, which hosts Bootstrap's CSS and JavaScript files for quick inclusion without downloading them locally.

**Steps:**

1. Add the `<link>` tag for Bootstrap CSS in your HTML `<head>`.
2. Add the `<script>` tag for Bootstrap’s JavaScript **bundle**, which includes both Bootstrap’s JS and Popper.js.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Example</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-center">Hello, Bootstrap!</h1>

    <!-- Bootstrap JavaScript Bundle (Includes Popper.js) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

---

#### Including the **CSS** in Your Project

For local development or a build process, you can download Bootstrap’s CSS files or install Bootstrap via a package manager.

**Steps for Local Inclusion:**

1. Download the **compiled CSS** files from [Bootstrap’s official site](https://getbootstrap.com).
2. Save the files in your project (e.g., in a `css/` directory).
3. Link the CSS file in your `<head>`:

```html
<link rel="stylesheet" href="css/bootstrap.min.css" />
```

````

---

#### Including the **Bootstrap JavaScript Bundle** in Your Project

Bootstrap’s JavaScript functionality requires **Popper.js**, which is included in `bootstrap.bundle.min.js`. Always use the bundle version to simplify setup.

**Steps for Local Inclusion:**

1. Install Bootstrap using npm:
```bash
npm install bootstrap
````

2. Link the **JavaScript Bundle** in your HTML right above the closing body tag of your page:

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

**Or Import via JavaScript Modules (for Webpack, Vite, etc.):**

```javascript
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

---

#### Notes:

- **Use `bootstrap.bundle.min.js`**, as it includes **both Bootstrap JS and Popper.js**.
- You do **not** need to separately include `popper.js` unless you need it for a custom setup.
- **CDN** is best for quick setup, while local or npm installation is better for production control.

## Containers

Containers are essential Bootstrap layout components that wrap content and define responsive behavior. They provide a consistent width for the layout while adjusting based on screen size.

---

### **`.container` (Fixed-width Container)**

The `.container` class creates a **responsive, fixed-width** container that adjusts its width at different breakpoints. It provides **a centered layout** with predefined max-widths for each viewport size.

#### **Example:**

```html
<div class="container">
  <h1>Fixed Container</h1>
  <p>This container has a maximum width that changes at different breakpoints.</p>
</div>
```

#### **Breakpoint-based Maximum Widths:**

| Breakpoint      | Max Width (px)    |
| --------------- | ----------------- |
| `xs` (<576px)   | 100% (full width) |
| `sm` (≥576px)   | 540px             |
| `md` (≥768px)   | 720px             |
| `lg` (≥992px)   | 960px             |
| `xl` (≥1200px)  | 1140px            |
| `xxl` (≥1400px) | 1320px            |

---

### **`.container-fluid` (Full-width Container)**

The `.container-fluid` class creates a **100% width container** that spans the full width of the viewport, **regardless of screen size**.

#### **Example:**

```html
<div class="container-fluid">
  <h1>Fluid Container</h1>
  <p>This container always takes the full width of the viewport.</p>
</div>
```

---

### **When to Use `.container` vs. `.container-fluid`**

| Use Case                                                                     | Recommended Container |
| ---------------------------------------------------------------------------- | --------------------- |
| You want a **fixed-width** container with automatic resizing per breakpoint  | `.container`          |
| You want content to span the **full width of the screen** at all times       | `.container-fluid`    |
| You're designing a **boxed layout** (content constrained to a centered area) | `.container`          |
| You're designing a **full-width layout** (for dashboards, admin panels)      | `.container-fluid`    |

---
### **Utility Classes**  

#### **Spacing (Margins and Padding)**  
Bootstrap provides spacing utilities for **margins (`m-*`)** and **padding (`p-*`)** using a scale from `0` to `5`.  

**Example:**
```html
<div class="m-3 p-4 border">Margin and Padding Example</div>
```
- `m-3`: Adds medium (`16px`) margin.  
- `p-4`: Adds large (`24px`) padding.  

👉 **Variations:**  
- `mt-*`, `mb-*`, `ms-*`, `me-*` (top, bottom, start, end margin).  
- `pt-*`, `pb-*`, `ps-*`, `pe-*` (top, bottom, start, end padding).  

### **Flex (Layout)**  
Bootstrap’s flex utilities (`d-flex`) provide powerful ways to manage the layout of your content. With these utilities, you can control the direction, alignment, distribution, and spacing of flex items.

#### **Basic Flex Example:**
```html
<div class="d-flex justify-content-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
- **`d-flex`**: Enables flexbox.  
- **`justify-content-between`**: Distributes the items evenly with space between them.  

#### **Vertical Alignment and Item Direction:**
You can align the items in various ways and adjust their stacking direction.
```html
<div class="d-flex align-items-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
- **`align-items-center`**: Vertically centers the items along the cross-axis.  
- **`flex-column`**: Stacks items vertically (along the main axis).
  
#### **Introducing the `gap` Class:**
The `gap` class is a useful utility for controlling the spacing between flex items. It helps you quickly set spacing between items along both axes, without having to apply margins manually.

**Example:**
```html
<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
- **`gap-3`**: Sets a gap of `1rem` (16px) between items.  
- The `gap` class can be used along with **horizontal** (`gap-x-*`) or **vertical** (`gap-y-*`) spacing options.

#### **Gap Variants:**
Bootstrap's `gap` utilities offer a range of predefined values for you to quickly manage the spacing between flex items:
- `gap-0`: No gap.  
- `gap-1`, `gap-2`, `gap-3`, etc.: Increasing spacing values (from `0.25rem` to `3rem`).  
- `gap-x-*`: Adds horizontal space.  
- `gap-y-*`: Adds vertical space.

**Example with Vertical Gap:**
```html
<div class="d-flex flex-column gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
- **`gap-2`**: Adds `0.5rem` of spacing vertically between the items when using `flex-column`.  

#### **Advanced Flex Layouts with `gap` Class:**
```html
<div class="d-flex flex-wrap gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```
- **`flex-wrap`**: Allows items to wrap into the next line when the container is too narrow.
- **`gap-4`**: Ensures there's consistent space between both rows and columns.

---

Using the `gap` class makes layout creation more efficient, reducing the need for custom CSS, while maintaining control over space distribution in the layout.


#### **Background**  
Background utilities (`bg-*`) allow quick styling.  

**Example:**
```html
<div class="bg-primary text-white p-3">Primary Background</div>
```
- `bg-primary`: Blue background.  
- `text-white`: Ensures readable text.  

👉 **Color options:** `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`.

---

#### **Text**  
Text utilities (`text-*`) help with alignment, styling, and responsiveness.  

**Example:**
```html
<p class="text-center text-uppercase fw-bold">Centered Uppercase Bold Text</p>
```
- `text-center`: Centers text.  
- `text-uppercase`: Uppercases text.  
- `fw-bold`: Makes text bold.  

👉 **Other options:**  
- `text-start`, `text-end` (alignment).  
- `text-muted` (lighter color).  
- `fs-1` to `fs-6` (font sizes).  


## **Components**  

#### **Buttons**  
Bootstrap provides pre-styled buttons with classes like `btn` and `btn-*` to denote color variants.  

**Example:**
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-outline-secondary">Outlined Button</button>
```
- **Variants:** `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`.  
- **Size:** `btn-lg`, `btn-sm`.  
- **States:** `disabled`, `active`.  

---

#### **Cards**  
Cards are flexible, extensible containers for content.  

**Example:**
```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

---

#### **Nav**  
The `nav` component helps create navigational elements.  

**Example:**
```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```
- Add `nav-pills` for pill-styled navigation.  
- Use `justify-content-center` for centered nav.  

---

#### **Dropdown**  
Dropdowns are interactive menus triggered by a button.  

**Example:**
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another Action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something Else</a></li>
  </ul>
</div>
```

---

#### **Badge**  
Badges are small, lightweight components for labeling or counters.  

**Example:**
```html
<h1>Example Heading <span class="badge bg-secondary">New</span></h1>
<button class="btn btn-primary">
  Notifications <span class="badge bg-light text-dark">4</span>
</button>
```
- **Variants:** `bg-primary`, `bg-secondary`, etc.  
- Combine with buttons or text for counters or labels.

### **Forms**  

#### **`form-label`**  
The `form-label` class is used to style `<label>` elements for form controls.  

**Example:**
```html
<div class="mb-3">
  <label for="inputEmail" class="form-label">Email address</label>
  <input type="email" class="form-control" id="inputEmail">
</div>
```
- Add `mb-3` (margin-bottom) for spacing between fields.

---

#### **`form-control`**  
The `form-control` class is applied to `<input>`, `<textarea>`, and similar elements for consistent styling.  

**Example:**
```html
<div class="mb-3">
  <input type="text" class="form-control" placeholder="Enter your name">
</div>
```
- Automatically provides a padded, border-styled input.  
- Combine with `form-control-lg` or `form-control-sm` for size variations.  

---

#### **Spacing**  
Bootstrap's spacing utilities (`m-*`, `p-*`) help manage margins and padding for form elements.

**Example:**
```html
<form class="p-4">
  <input type="text" class="form-control mb-3" placeholder="First name">
  <input type="text" class="form-control mb-3" placeholder="Last name">
</form>
```

---

#### **Select**  
Bootstrap provides styling for dropdown `<select>` elements using `form-select`.

**Example:**
```html
<div class="mb-3">
  <label for="inputState" class="form-label">Select your state</label>
  <select id="inputState" class="form-select">
    <option selected>Choose...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

---

#### **Checks & Radios**  
Use `form-check` for styled checkboxes and radio buttons.  

**Example:**
```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkExample">
  <label class="form-check-label" for="checkExample">
    Check this box
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="radioExample" value="option1" checked>
  <label class="form-check-label" for="radioExample">
    Select this radio
  </label>
</div>
```
- Add `form-check-inline` for inline alignment.  

---

#### **Validation**  
Bootstrap supports built-in validation states with `is-valid` and `is-invalid` classes.

**Example:**
```html
<div class="mb-3">
  <label for="inputName" class="form-label">Name</label>
  <input type="text" class="form-control is-valid" id="inputName" value="John Doe">
  <div class="valid-feedback">Looks good!</div>
</div>

<div class="mb-3">
  <label for="inputPassword" class="form-label">Password</label>
  <input type="password" class="form-control is-invalid" id="inputPassword">
  <div class="invalid-feedback">Password must be 8 characters long.</div>
</div>
```
- Combine `is-valid`/`is-invalid` with feedback elements for custom messages.

Here’s a real-world example of a **registration form** using Bootstrap’s form components, complete with labels, inputs, validation, spacing, checkboxes, and selects:

### **Registration Form Example**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h2>Register for an Account</h2>
    <form>
      <!-- Full Name -->
      <div class="mb-3">
        <label for="fullName" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" required>
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Please provide your name.
        </div>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
        <div class="valid-feedback">
          Valid email address.
        </div>
        <div class="invalid-feedback">
          Please enter a valid email.
        </div>
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" required>
        <div class="invalid-feedback">
          Password must be at least 8 characters.
        </div>
      </div>

      <!-- State Selection -->
      <div class="mb-3">
        <label for="state" class="form-label">Select your state</label>
        <select id="state" class="form-select" required>
          <option selected>Choose...</option>
          <option value="Ohio">Ohio</option>
          <option value="New York">New York</option>
          <option value="California">California</option>
        </select>
        <div class="invalid-feedback">
          Please select your state.
        </div>
      </div>

      <!-- Terms & Conditions -->
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="terms" required>
          <label class="form-check-label" for="terms">
            I agree to the <a href="#">terms and conditions</a>.
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### **Key Features:**

- **Form Fields with Labels**: Used `form-label` for field labels to improve readability.
- **Validation States**: Used `is-invalid` and `is-valid` for form validation and providing immediate feedback.
- **Checkbox**: Added an agreement checkbox that must be checked before the form can be submitted, with validation.
- **Select Dropdown**: Includes state selection with a `form-select` class.
- **Responsive Form Layout**: The form is wrapped in a `.container` to ensure proper spacing, and the button has a `btn-primary` class for styling.

This form will display an interactive experience where users get visual feedback immediately when required fields are missing or incorrect. You can apply actual form validation (e.g., email format check) or use JavaScript for further enhancement.

Let me know if you'd like any modifications or further details! 😊