## Blog App and Admin Panel

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
   - **Enable the src directory**: I chose **Yes**, as it helps organize files better and it will help us if we need scalable app.
   - **Include the experimental app directory**: I chose **Yes**, to use the App Router for routing and layouts.

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

Your Step 3 explanation is clear, but a few adjustments can enhance its flow, professionalism, and clarity. Here's a refined version:

### Step 3: Open the Live Server

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

You should see the message:

**"Welcome to Blog App and Admin Panel"**

Congratulations! Your application is now running locally. 🎉


### Step 4: 
