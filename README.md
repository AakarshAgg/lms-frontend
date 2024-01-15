# LMS Frontend

### Setup instruction

1. Clone the project

```
   git clone
```

2. Move into the directory

```
   cd lms-frontend-hn
```
3. install dependencies

```
   npm i
```

4. run the server

```
npm run dev
```


### Setup instructions for tailwind
[Tailwind official instruction doc](https://tailwindcss.com/docs/guides/vite)

1.install Tailwind css
```
npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file
```
npx tailwindcss init -p
```

3. Add file extensions to tailwind config file in the contents property
```
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```

4. Add the Tailwind directives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-chartjs-2 chart.js daisyui axios react-icons react-hot-toast @tailwindcss/line-clamp
```