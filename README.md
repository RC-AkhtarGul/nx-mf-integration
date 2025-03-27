# Running Dynamic Micro-Frontend (MF)

To serve the `dashboard` with dynamic remotes:

```bash
nx serve dashboard --devRemotes="login,todo"
```

---

## Setting Up a React.js Workspace

1. Create a new Nx workspace:
  ```bash
  npx create-nx-workspace@latest nx-mf-demo
  cd nx-mf-demo
  npm i @nrwl/react
  ```

2. Generate a host application:
  ```bash
  npx nx g @nrwl/react:host shell --remotes=remote
  nx serve shell
  ```

---

## Adding Material-UI Styles

Install Material-UI and related dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

---

## Adding a Single Remote Application

To add a remote application (e.g., `job`):

```bash
npx nx g @nrwl/react:remote --name=job --host=@nx-mf-integration/shell --verbose
```

---

## Building Applications

To build multiple projects in parallel:

```bash
nx run-many --target=build --projects=shell,dashboard,job,details,list,login --parallel
```

---

## Adding CORS Policy for Production

1. Create a `public` folder on each remote project.
2. Add a `_header` file inside the `public` folder.
3. Update the `project.json` file to include the `public` folder in the assets:

```json
"assets": [
  "login/src/favicon.ico",
  "login/src/assets",
  {
   "input": "login/public",
   "glob": "**/*",
   "output": "."
  }
]
```
