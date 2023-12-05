# Welcome to Bolt.js Framework

Hello Bolt's!

If you're here, you're eager to learn more about Bolt.js framework.
## Before Getting Started

Before exploring the configuration file, ensure you have the necessary setup:

### 1. Clone the Project

To get started, clone the Bolt.js Framework repository:

```
git clone https://github.com/henriqueamorimm/bolt-framework/
```

### 2. Install Node.JS
If you haven't already, install Node.js, which comes bundled with npm, from the <a href="https://nodejs.org">official website.</a>

### 3. Install Project Dependencies
Navigate to the project directory and install the required dependencies:
```
cd bolt-framework
npm install fs http
```
## What is the Bolt.js primary function? 🤔

Bolt.js is a powerful Node.js framework designed to streamline HTML page customization. Our goal is to facilitate the manipulation of page titles and content, eliminating repetitive style applications.

## What are the supported languages on the front-end (client) side? 🎨

- HTML
- CSS
- JavaScript

## What about the back-end (server) side? 🖥️

- PHP
- JavaScript
- TypeScript

Now that you've got the answers to the most common questions, let's introduce you to the "config.bolt" file.

To start, let's establish a base structure:

- `PROJECT-TITLE=>My Bolt Project`: Replace this with your project name; it's self-explanatory.
- `PROJECT-DESCRIPTION=>An simple Bolt project`: Similar explanation as above.
- `PROJECT-LOGO=>`: Here, you can specify your application logo's URL. By default, it's the Bolt Logo.

Now, let's dive into server configuration in the "config.bolt" file:
- `PORT=>`: Define the port where your application will open.
- `COMPONENTS=>src/components/*`: It's recommended not to modify this; it's the components folder.

To conclude the "config.bolt" file, here's the style configuration:

- `BOOTSTRAP=>true`: Set as "true" or "false" to include or exclude Bootstrap in your pages.
- `SWEETALERT=>true`: Set as "true" or "false" to include or exclude SweetAlert in your pages.
- `HTML=>`: Specify the directory of your main HTML file. Example: `app/Home.html`

With your Bolt options ready, let's try out the framework =)

1. Use the command: `npm install fs http`
2. Try running the app: `npm run bolt`
3. You'll see a message like this:
<img src="https://media.discordapp.net/attachments/1099520313856905367/1181437655641247784/image.png?ex=65810e8f&is=656e998f&hm=89b6f4dc6b5fbd2a3389081fe44d5de0fbac3fbb7927be1bf9eed88fa5716ae2&=&format=webp&quality=lossless">

Great! It's working. Now, let's try the SweetAlert library.

You can experiment with functions like:

- `SuccessAlert()`
- `ErrorAlert()`
- `InfoAlert()`

<img src="https://media.discordapp.net/attachments/1099520313856905367/1181437970339872778/image.png?ex=65810eda&is=656e99da&hm=6ef8f34c9f32fab9da84099ae15e2d58471bd05855527b4637d376bd62a57d9e&=&format=webp&quality=lossless&width=1172&height=676">

That's it for now! Stay tuned for more updates, including:

- Components
- Dark/Light Mode
- Auto-refresh

And more!

