### Blog App and Admin Panel

This project is built using **Next.js**, a React-based framework for building server-side rendered and static web applications.

### Step #1: Create a Next.js App

1. Open your integrated terminal in VS Code, To open the terminal in Visual Studio Code:

#### **Method 1: Using the Menu**

1. Open Visual Studio Code.
2. Click on the **View** menu in the top navigation bar.
3. Select **Terminal** from the dropdown.

#### **Method 2: Using a Keyboard Shortcut**

- Press **Ctrl + `** (backtick) on Windows/Linux or **Cmd + `** on macOS.  
  The backtick key (`) is usually located below the Esc key on your keyboard.

#### **What Happens Next?**

- A terminal window will appear at the bottom of the VS Code interface.

2. Run(write) the following command in the terminal to create a new Next.js app:

   ```bash
   npx create-next-app@latest blog-app-and-admin-panel
   ```

   - **Explanation**:
     - `npx create-next-app@latest` initializes a Next.js project with the latest version.
     - `blog-app-and-admin-panel` is the name of the project.

3. After running the command, you will be prompted to:

   - **Select a TypeScript setup**: I chose **No**, as we won't use TypeScript in this app.
   - **Choose a template**: I selected **Tailwind CSS**, as we are using it for styling.
   - **Decide whether to use ESLint**: I chose **Yes** for ESLint configuration to ensure code quality.
   - **Enable the src directory**: I chose **Yes**, as it improves file organization and scalability for the project.
   - **Include the experimental app directory**: I chose **Yes**, to leverage the App Router for routing and layouts, enhancing flexibility and performance.
   - **Customize the default import alias (@/\*)**: I chose **Yes**, customizing the import alias to improve clarity and align with project structure.

4. Once you complete the prompts, a new folder named `blog-app-and-admin-panel` will be created. This folder will include:

   - **`app/`**: Contains the App Router setup, including default files like `page.js`.
   - **`public/`**: A folder for static assets like images, logOs.
   - **`styles/`**: Default CSS files such as `globals.css` and `tailwind.css`.
   - **`package.json`**: Includes scripts and dependencies, as shown:

     ```json
     {
       "name": "blog-app-and-admin-panel",
       "version": "0.1.0",
       "private": true,
       "scripts": {
         "dev": "next dev",
         "build": "next build",
         "start": "next start",
         "lint": "next lint"
       },
       "dependencies": {
         "react": "19.0.0-rc-66855b96-20241106",
         "react-dom": "19.0.0-rc-66855b96-20241106",
         "next": "15.0.3"
       },
       "devDependencies": {
         "postcss": "^8",
         "tailwindcss": "^3.4.1",
         "eslint": "^8",
         "eslint-config-next": "15.0.3"
       }
     }
     ```

   - **`node_modules/`**: Contains all dependencies required for the project.

5. Now Navigate into the project folder and open it in new vs code window

- to Navigate into the project folder

```bash
cd blog-app-and-admin-panel

```

- to open the project folder in a new vs code window

```bash
code .
```

Congratulations! You now have a fully functional Next.js app with the App Router setup, ready to customize.

### Step #2: Cleanup the Main Page and Global Styles

1. Open `app/page.js` and delete all the default content. Replace it with:

   ```jsx
   export default function Home() {
     return <h1>Welcome to Blog App and Admin Panel</h1>;
   }
   ```

2. Open `styles/globals.css` and clear all existing styles. Add this as the starting point:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step #3: Open the Live Server

To start the live server for your app, run the following command in your terminal:

```bash
npm run dev
```

Once the server starts, you should see output similar to this:

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Now, open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

Alternatively, you can hold **Ctrl** (Windows/Linux) or **Cmd** (macOS) and click on the link `http://localhost:3000` to open it directly in your browser.

You should see the message in our app:

**"Welcome to Blog App and Admin Panel"**

Congratulations! Your application is now running locally. 🎉
**Note:** You can customize the content before or after running the live server—feel free to experiment!

Here’s how you can update **Step #4** to guide the user through changing `.js` files to `.jsx`:

### Step #4: Update this Files Extension `app/page.js` and `app/layout.js` to `.jsx` not `js`

If you're working with React components that use JSX syntax, it's a good practice to change the file extension from `.js` to `.jsx` to improve clarity and organization. Here's how you can do it:

1.  we will Rename the file from `page.js` to `page.jsx` to indicate that it contains JSX syntax.
    **To Rename in VS Code**:

- Right-click on the file in the file explorer in VC code and select **Rename**.
- Change the extension from `.js` to `.jsx`, and press **Enter**.

2. **Update Imports** :  
   If you’ve renamed any files, make sure to update all imports that refer to that file. For example, if you renamed `page.js` to `page.jsx`, make sure to change all imports like this:

   ```js
   import Home from "./page"; // Old import (if it was 'page.js')
   ```

   To:

   ```js
   import Home from "./page.jsx"; // Updated import for 'page.jsx'
   ```

   in our case here `app/page.jsx` and `app/layout.jsx` aren't imported in anywhere so we won't update any imports

3. **Why Change to `.jsx`?**

   - **Clarity**: `.jsx` makes it clear that the file contains JSX syntax, improving code readability and organization.
   - **Tooling**: Some linters, code editors, or build tools may work more effectively with `.jsx` extensions, though modern tools like Webpack and Create React App generally handle `.js` files with JSX syntax just fine.

Congratulations! You’ve successfully renamed your file to `.jsx` for better clarity and organization. 🎉

### Step #5: Update the Title Displayed in the Browser Tab

To update the title of the application that appears in the browser tab, follow these steps:

1. Open the `app/layout.jsx`.

2. Locate the `title` propert in metadata object.

3. Add or modify the `title` the desired title for your app.

   For example:

   ```jsx
   export const metadata = {
     title: "Blog App and Admin Panel", // I add my title here that will show in browser tab
     description: "A powerful app for managing blogs and admin tasks", // I add my description here that will search result
   };

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
   ```

Then go to the live server in the browser you will see your tilte at the top

Congratulations! The title in your browser tab is now updated. 🎉

Feel free to replace the title and description with content relevant to your project. 😊

### Step #6: Add the Outfit Font to Your Project

In this step, we'll integrate the **Outfit** font into your application and ensure the best performance and user experience by using `font-display: swap`. This will display text using a fallback font until the Outfit font has fully loaded, preventing any delay in showing content, Adding a custom Google font like Outfit enhances the visual appeal and typography of your app. Here's how you can do it:

#### Steps:

1. **Import the Outfit Font:**
   Start by importing the `Outfit` font from `next/font/google`. This utility allows you to seamlessly include Google Fonts in your project.

   ```javascript
   import { Outfit } from "next/font/google";
   ```

2. **Define the Outfit Font:**
   Create a constant for the `Outfit` font and Use the `Outfit` function to configure the font with subsets, weights, include the `display: "swap"` property in the configuration. This ensures that your app displays text immediately with a fallback font until the custom font loads.:

   ```javascript
   const outfit = Outfit({
     subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
     display: "swap", // Enables text rendering with a fallback font while the Outfit font loads
   });
   ```

3. **Remove default Fonts (Optional):**
   maybe when you install a new next.js app you will find by default fonts like `geistSans` or `geistMono`, you can remove their imports and definitions, These fonts won't be needed anymore as we're switching to Outfit, in our current project we will remove their imports and definitions.

4. **Update the `<body>` Class:**
   Replace the font classes in the `<body>` tag with the `className` generated by the Outfit font configuration.

   **Before:**

   ```javascript
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
   ```

   **After:**

   ```javascript
   <body className={outfit.className}>
   ```

5. **Finalize the Code:**
   Here’s how your updated `app/layout.jsx` file should look after integrating the Outfit font with `font-display: swap`:

   ```javascript
   import { Outfit } from "next/font/google";
   import "./globals.css";

   const outfit = Outfit({
     subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
     display: "swap",
   });

   export const metadata = {
     title: "StoryCraft",
     description:
       "Effortlessly create, customize, and manage your blogs with our advanced Blog App and Admin Panel. Designed for speed, flexibility, and user-friendly control to help you grow your online presence.",
   };

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body className={outfit.className}>{children}</body>
       </html>
     );
   }
   ```

6. **Verify in the Browser:**
   - Save your changes and restart the development server if necessary.
   - Open your application in the browser, and you’ll notice the new **Outfit** font applied throughout your app.

#### **Why Use `font-display: swap`?**

Adding `display: "swap"` ensures that:

- Text is displayed immediately with a fallback font while the custom font is loading.
- There’s no blank or invisible text (FOIT), improving the user experience.
- This practice is performance-friendly and aligns with SEO guidelines.

🎉 **Congratulations!** You've successfully added the Outfit font to your project with `font-display: swap`. Your app now looks professional and loads efficiently for users!, Feel free to explore other font weights or styles to tailor your app's design to your needs. 😊

### Step #7: Set Up Folder Structure

In this step, we organized the project by creating a **`components`** folder and an **`assets`** folder in the `src` directory. This structure helps maintain clean, organized, and scalable code, especially as your project grows.

#### **Folder Structure Overview**

Here’s what we added to the `src` directory:

```
src/
├── assets/
├── components/
```

---

#### **1. `components` Folder**

- **Purpose**: The `components` folder is used to store reusable React components. These components can be shared across the project, promoting modularity and consistency.

- **Examples of Components we will Add here**:
  - `Navbar.jsx` for a navigation bar.
  - `Footer.jsx` for the footer section.
  - `Button.jsx` for reusable button components.

---

#### **2. `assets` Folder**

- **Purpose**: The `assets` folder is where you store static files like images, logos, icons, or any other media used in the project.

- **Examples of Assets to Add**:
  - A `logo.png` file for the application logo.
  - Images for posts or articles.
  - Icons or SVG files used in the UI.

---

#### **Benefits of This Structure**

1. **Improved Organization**:

   - Separating components and assets makes it easier to locate files.

2. **Reusability**:

   - Having reusable components in one place promotes consistency and reduces redundant code.

3. **Scalability**:
   - As the project grows, this structure ensures clarity and avoids clutter in the codebase.

---

Congratulations! 🎉  
Your project now has a structured folder setup that will make development smoother and more efficient.

### Step #8: Install the React-Icons Library to Use Its Icons in Our Project

Icons play a vital role in enhancing the UI/UX of any web application. To add icons easily, we’ll use the **React-Icons** library, which provides a large collection of pre-built icons from popular icon packs.

---

#### **1. Install React-Icons**

Run the following command in your terminal to install the library:

```bash
npm install react-icons
```

---

#### **2. Why Use React-Icons?**

- **Variety**: Includes icons from popular libraries like FontAwesome, Material Design, Feather, and more.
- **Customizable**: Easy to style with CSS or inline styles.
- **Lightweight**: Only the icons you use are included in the final build.

---

#### **3. How to Use React-Icons**

1. **Import an Icon**:

   - After installation, you can import icons from the specific icon pack you want. For example, to import an icon from FontAwesome:
     ```jsx
     import { FaHome } from "react-icons/fa";
     ```

2. **Add the Icon to Your Component**:

   - Use the imported icon as a React component:
     ```jsx
     export default function Navbar() {
       return (
         <nav>
           <FaHome /> Home
         </nav>
       );
     }
     ```

3. **Style the Icon**:
   - Icons can be styled using inline styles, CSS classes or tailwind:
     ```jsx
     <FaHome style={{ color: "blue", fontSize: "24px" }} />
     ```

---

🎉 Congratulations! You’ve successfully installed and set up the **React-Icons** library. You’re now ready to add beautiful icons to your application.

### Step #9: Create `Navbar.jsx` Component

In this step, we’re designing the **Navbar**, which will act as a central navigation element for our application. 
The **Navbar** includes a logo, a "Get Start" button, and will later feature a **ThemeSwitch** icon for toggling 
between light and dark modes.

Let me First show you the **Final Output** then explain it to you step by step:

#### **Final Output**

The `Navbar` component structure looks like this:

```jsx
import React from "react";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

function Navbar() {
  return (
    <div className="py-3 px-5 md:px-12 lg:px-20 flex justify-between items-center border-b border-b-[var(--text)]">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={110}
          height={110}
          className="w-[110px] sm:w-auto"
        />
      </Link>
      {/* Button and ThemeSwitch Container*/}
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <button className="bg-[var(--secondary)] hover:bg-[var(--accent)] flex justify-center items-center  gap-1 sm:gap-2 py-1 px-3 sm:py-2 sm:px-6 rounded-md">
          Get Start
          <CiLocationArrow1 className="font-extrabold sm:text-2xl text-xl" />
        </button>
        {/* ThemeSwitch that we will create in the next steps will be here */}
      </div>
    </div>
  );
}

export default Navbar;
```

---

#### **What We Are Doing**

1. **Adding the Logo**:

   - We are using the `Image` component from Next.js to display a logo.
   - then we wrapped this image by `Link` Component to make this logo act as a link
   - Now This logo acts as a clickable link that redirects users to the homepage (`"/"`).

2. **Adding the "Get Start" Button**:

   - We’re creating a visually appealing button styled with Tailwind CSS.
   - The button uses an icon from the **React-Icons library** (`CiLocationArrow1`) for a modern look.
   - This button is styled to stand out and is intended to guide users to another page where they can **create a blog post** in the future.

3. **Preparing for the ThemeSwitch**:
   - We’ve left a placeholder comment(`ThemeSwitch`) under the button for a **ThemeSwitch component**, which will allow users to toggle between dark and light modes.
   - In the next steps, we will create this component and place its icon next to the "Get Start" button.

---

#### **Code Breakdown**

##### 1. **The Logo**

```jsx
<Link href="/">
  <Image
    src="/logo.png"
    alt=""
    width={110}
    height={110}
    className="w-[110px] sm:w-auto"
  />
</Link>
```

- The `Link` component wraps the logo and makes it clickable.
- The `Image` component ensures the logo is optimized and responsive.

##### 2. **The "Get Start" Button**

```jsx
<button className="bg-[var(--secondary)] hover:bg-[var(--accent)] flex justify-center items-center gap-1 sm:gap-2 py-1 px-3 sm:py-2 sm:px-6 rounded-md">
  Get Start
  <CiLocationArrow1 className="font-extrabold sm:text-2xl text-xl" />
</button>
```

- **Styling**:
  - We used Tailwind CSS for a modern, responsive design.
  - The button background changes color when hovered (`hover:bg-[var(--accent)]`).
  - Padding, gaps, and rounded edges improve usability and aesthetics.
- **Icon**:
  - We added the arrow icon (`CiLocationArrow1`) from React-Icons to enhance the button's design.
- **Future Use**:
  - This button will be linked to a page where users can create a blog post.

---

By completing this step, you’ve created a **functional and stylish Navbar** that provides navigation and prepares
for future features like theme switching. 🎉

---

#### **What’s Next?**

In **Step #10**, we will:

- Import This Navbar in The `layout.jsx` file to show this navabr in the whole application 

### step 10: Import This Navbar in The `layout.jsx` file to show this navabr in the whole application 

#### **1. Importing the Navbar Component**
In the `layout.jsx` file, you add this line of code: 

```javascript
import Navbar from "@/components/Navbar";
```

- **What This Does:**
  - This statement imports the `Navbar` component from the `components` folder.
  - The `@` symbol is an alias for the `src` directory in Next.js, making the import path shorter and more readable.

##### Why Did We Use the `@` Symbol Before the Path?

In our project, we added the `@` symbol before the import path, like this:

```javascript
import Navbar from "@/components/Navbar";
```

This is because during the setup process, we chose **Yes** when prompted to:

**"Customize the default import alias (@/*)"**

###### **Reason for Choosing Yes:**
1. **Improved Clarity**:
   - Using the `@` symbol makes import paths shorter and easier to read.
   - For example, instead of writing a long relative path like:
     ```javascript
     import Navbar from "../../components/Navbar";
     ```
     We can simply write:
     ```javascript
     import Navbar from "@/components/Navbar";
     ```

2. **Aligning with Project Structure**:
   - The `@` symbol is an alias for the `src` directory. This aligns imports with the structure of the project, making it more intuitive to locate files.

3. **Easier Refactoring**:
   - If you move files or folders, the `@` alias helps avoid issues with broken relative paths, simplifying the process of updating imports.
By customizing this setting, we enhanced our project's readability, maintainability, and scalability! 
---

#### **2. Why Import the Navbar in `layout.jsx`?**

- **Global Visibility**:
  - The `layout.jsx` file is the **root layout** for your application. Any component placed here, like the `Navbar`, will be displayed **on every page** of the app. This ensures the navbar is accessible wherever users navigate.

- **Consistency**:
  - Importing the `Navbar` here avoids duplicating its code in each individual page. This not only keeps the code clean but also ensures a consistent look and feel across the app.

- **Ease of Maintenance**:
  - If you ever need to update or modify the `Navbar`, you only need to edit the `Navbar` component in one place (`components/Navbar.jsx`). Changes will automatically apply to all pages.

- **User Experience**:
  - A persistent navbar allows users to quickly navigate between different parts of the app without scrolling or searching for navigation links.

- **Logical Placement**:
   - The `layout.jsx` file is specifically meant for defining shared UI elements like headers, footers, or navigation bars. The `Navbar` logically belongs here as part of the app's global structure.
---


#### **3.Where to Place the Navbar Component**

We placed the `Navbar` component in the `layout.jsx` file, specifically inside the `<body>` tag:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Navbar /> {/* Puting the Navbar Component here will make the navbar show above other pages content */}
        {children}
        {/*And in the next steps will put the footer Component here*/}
      </body>
    </html>
  );
}
```




**Final Explanation:**
By placing the Navbar in `layout.jsx`, it acts as a global header that will always appear at the top of every page in the application. This is a common approach in `Next.js` to create shared layouts.

### step #11: Apply Dark & light mode with no flicker

https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind#3-suppresshydrationwarning
