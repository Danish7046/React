React JS-1

Introduction

What is React?

➢ React is a JavaScript library and open source project created by Facebook

➢ React is used to build interactive user interfaces (UI) components.

➢ One of the most important aspects of React is the fact that you can create components,
which are like custom, reusable HTML elements, to quickly and efficiently build user
interfaces. React also streamlines how data is stored and handled, using state and props.

➢ Popular sites, such as Instagram, Facebook, Uber, Codecademy etc uses ReactJS.

➢ The user interface (UI) is the point of human-computer and communication in device.

This can include display screens, keyboard, a mouse and the appearance of a desktop.
History

➢ React was first designed by Jorden Walke, a software engineer at Facebook.

➢ It was first deployed for Facebook News feed around 2011.

➢ In 2013, React was open sourced at JS conference.

About React
➢ Component based approach: A component is one of the core building blocks of
React. In other words, we can say that every application you will develop in react will
be made up of pieces called components. Components make the task of building UIs
much easier.

➢ Uses a declarative approach: Declarative programming is a programming paradigm
that expresses the logic of a computation without describing its control flow.

➢ DOM (Document Object Model) updates are handled gracefully.

➢ Reusable code.

Setup of React JS
Step 1: Install Node.js installer for windows.

Step 2: Open command prompt or terminal in VS code to check whether it is completely
installed or not.

The command –> node -v
If the installation went well it will give you the version you have installed

Step 3: Now Create a new folder where you want to make your react app using the below
command:
mkdir react

Note: The react in the above command is the name of the folder and can be anything.

Move inside the same folder using the below command:
cd react

Step 4: Now, go inside folder(react).

The npm stands for Node Package Manager and it is the default package manager
for Node.js. It gets installed into the system with the installation of node.js.
The npx stands for Node Package Execute and it comes with the npm, when you installed
npm above 5.2.0 version then automatically npx will be installed. It is an npm package
runner that can execute any package that you want from the npm registry without even
installing that package.

Using the NPX package runner to execute a package can also help reduce the pollution
of installing lots of packages on your machine.

In npx you can create a react app without installing the package:
`npx create-react-app myApp`

This command is required in every app’s life cycle only once.

Run below command if not able to create a react app using above command.
`npm install -g create-react-app`

create-react-app myapp
By creating a react app folder structure will be looked as shown in next topic called
“Folder Structure” image.

Step 5: Now, go to myApp(Created react app) folder
cd myApp

Step 6: To start your app run the below command:
npm start

Once you run the above command, a new tab will open in your browser showing React logo
as shown below:

Folder Structure:

Once a react app gets created, The folder structure looks as below.

• node_modules
In this folder, you will get various folders of all the
required dependencies & packages that may be used for
building your react app. For example – Webpack, Babel,
JSX, Jest & more. You not need to modify the
node_module. It is already configured with the react app.

• Public Folder
The public folder contains static files such as index.html,
javascript library files, images, and other assets, etc.
which you don’t want to be processed by webpack. Files
in this folder are copied and pasted as they are directly
into the build folder. Only files inside the `public` folder
can be referenced from the HTML.

Webpack in react is a JavaScript module bundler that is commonly used with React to bundle
and manage dependencies. It takes all of the individual JavaScript files and other assets in a
project, such as images and CSS, and combines them into a single bundle that can be loaded by
the browser.

If you put assets in the public folder and you have to give their reference in your project, then
you will have to use a special variable that is called PUBLIC_URL.

A file that remains in the public folder, will be accessible by %PUBLIC_URL%.

For example –

<link rel=”icon” href=”%PUBLIC_URL%/favicon.ico” />
When you run the npm build command to deploy your project, create-react-app will convert
%PUBLIC_URL% to the right absolute path of your application. So that it can work well if
you use host/client-side routing at a non-root URL

1. favicon.ico
This the default react icon that always remains in the public folder. you can also put
here your own project icon but the icon extension must be .ico and the icon name may
be anything.

You can remove favicon.ico when you place a new favicon for your project/website.
When you open your app in the web browser, you will see an icon in the tab on the left
side. It is the symbol of your application. So, you should not leave it.

3. index.html
This is the index file that displays when the react app opens in the web browser. It
contains the HTML template of the react application.
index.html file is the root file of the react app. Everything will be rendered through it on
the front end. So, Don’t try to change & remove this file from the public folder.
Note – index.html must exist in the public folder and you must not delete it otherwise you
will get an error.

5. logo192.png & logo512.png
These are the logos of react js. It is placed just for the initial view of react app. you can
remove/leave it depends on you.

7. manifest.json
Manifest.json provides the metadata like short_name, name & icons in the form of
JSON for a react application. It may be installed on the mobile or desktop. So that you
can directly open the react application with its installed favicon.
Due to the manifest.json file, users get a notification to install react application on their
mobile or desktop.
You must not remove manifest.json but you can modify JSON values according to your
project

9. robots.txt
The robot.txt file is given just for SEO purposes. As a developer, you need not do
anything with this file. This file is not related to development.

• Src Folder
In the src folder, You can put all the js, CSS, images, components file & other assets of
your projects.
By default, we get the following files that are necessary to understand their usages. you can
create your own files according to these files for developing your projects.

1. App.css
App.css file contains a default CSS code and import into the App.js file. It is also
global, you can import another file. You can create your own CSS file like App.css
but make sure that its name must start with the uppercase letter. Ex – Myapp.css

3. App.js
App.js is a parent component file of your react app. It is imported into the index.js file
to render content/HTML in the root element that remains in public/HTML.
You can also create your own component file according to App.js but make sure that
its extension must be .js and its name must start with an uppercase letter.
for example – Myapp.js

5. App.test.js
App.test.js gives us a testing environment. Basically, it’s written code to protect the
react application to be crashed.

We also need not modify & remove this file from the react application.

7. index.css
index.css file contains some default css code for index.js. You can modify/add some
new CSS code according to your project design pattern.

9. index.js
index.js file is an entry point of react app. Means that all the component renders
through this file to the index.html.

Basically, your application executes properly with the help of index.js. Even all the js
files of components are imported in this file.

for example – As App.js file is imported with using import App from './App' . you
also have to import your own Myapp.js file using the import Myapp from './Myapp';

11. logo.svg
This is the default logo of react js. You can remove it and place your project logo.

13. reportWebVital.js
reportWebVital.js is related to the speed of your application. You also need not to do
anything with this file.

15. setupTest.js
In this file, @testing-library/jest-dom is imported. You need not modify and remove it
from the application.

• .gitignore
gitignore file is used to ignore those files that have not to be pushed to the git.
By default, dependencies, testing folders/files are defined in the .gitignore. When you push
your app to the git, these folders/files will not be pushed.

• package-lock.json
package-lock.json file maintains a version of installed dependencies.

• package.json
All the dependencies are defined in this file. It maintains which dependencies are necessary
for our application.

• README.md
In this file, Some instructions are written to configure and set up the react application. Even
you can also write more instructions for your project that will help the developer to
configure it easily.
