# Golisto React App Template

This project is a template that replicates a piece of the real Golisto React App structure.
The intended purpose of this template is letting potential interns, learn the structure in a lite-wight and safe environment.

## Getting started

Golisto uses yarn, so all commands in this file will reflect that.

To get started, simply install the packages with the following command:

```
yarn install
```

And then you're ready to start the project with the following command:

```
yarn start
```

## Project structure

The structure borrows heavily from the final structure of the now deprecated (react-redux-starter-kit)[https://github.com/davezuko/react-redux-starter-kit].

### Legacy

- Any `index.jsx` file without a description will have only one job: "Export all the components from the folder, that the rest of the app needs to know about"
- Any `<Name>.scss` file without a description, will contain all the styles of the `.jsx` file with the same name, and is imported by that same `.jsx` file. This is also always optional.

```
.
├─ /public                            # Static public assets (not imported anywhere in source code)
│   └─ index.html                     # The main entry-point of the application
└─ /src                               # Application source code
    ├─ index.jsx                      # Application bootstrap and rendering
    ├─ index.scss                     # Global styles. This is where one would add styles to html/body/etc.
    ├─ App.jsx                        # The root of the actual application. This handles global rendering logic, and renders the root route.
    ├─ /components                    # Global Reusable Components
    │   ├─ /Svg                       # This component contains all the Svgs used on the site, as react components.
    │   │   ├─ index.jsx
    │   │   ├─ LogoSvg.jsx            # The Golisto Logo
    │   │   └─ <Name>Svg.jsx          # Any other Svg you would want on the platform
    │   └─ /<ComponentName>           # Some other component. Can contain multiple jsx too, if they are tightly connected in use
    │       ├─ index.jsx
    │       ├─ <ComponentName>.jsx    # Main component rendering logic
    │       └─ <ComponentName>.scss
    ├─ /layouts                       # Components that dictate major page structure
    │   ├─ /CoreLayout                # This layout is the most root one, and will contain the entire app
    │   │   ├─ CoreLayout.jsx         # All rendering logic for the CoreLayout is contained here
    │   │   ├─ CoreLayout.scss
    │   │   └─ index.jsx
    │   └─ /<Name>Layout              # Some other layout that would make sense, ex. "FooterLayout"
    │       ├─ <Name>Layout.jsx       # Rendering logic for the layout, following the same structure as CoreLayout
    │       ├─ <Name>Layout.scss
    │       └─ index.jsx
    ├─ /routes                        # Contains all views on the platform
    │   ├─ index.jsx                  # Bootstraps all the routes and distributes them into the correct layouts
    │   ├─ HomeView                   # The Home view,
    │   │   ├─ index.jsx
    │   │   ├─ components             # Presentational React Components
    │   │   │  ├─ HomeView.jsx        # The main rendering logic for the view
    │   │   │  └─ HomeView.scss
    │   └─ <Name>View                 # Any other view you desire
    │       ├─ index.jsx
    │       ├─ components             # Presentational React Components. Can contain multiple JSX files, useful for splitting the view up
    │       │  ├─ <Name>View.jsx      # The main rendering logic for the view
    │       │  └─ <Name>View.scss
    │       ├─ routes †               # Fractal sub-routes
    │       ├─ assets †               # Assets required to render components
    └─ styles                         # Sass helpers and "settings", like variables and mixins

† optional
```

## Editor

I strongly suggest using VS Code or a compatible editor, so you can make use of the snippets and suggested extensions.
