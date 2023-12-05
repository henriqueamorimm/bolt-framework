Hello Bolt´s!

If you are here i am shure that you want to learn more about Bolt.js framework.

So, what is the Bolt.js principal function?

A: Our goal is to facilitate the manipulation of page titles and content, eliminating repetitive style applications.

And, what are the supported languages of the front-end (client) side?

A: HTML, CSS and JS.

What about the back-end (server) side?

A: PHP, JavaScript, TypeScript.


So now that you know the most asked questions, let´s introduce to "config.bolt" archive.

To start, we will have an similar base:

PROJECT-TITLE=>My Bolt Project   -- Here, you put your project name, it is autoexplicative.
PROJECT-DESCRIPTION=>An simple bolt project -- Same XD
PROJECT-LOGO=> -- Here you can put your application logo (URL), by default the Bolt Logo.

Now about the server-config, in "config.bolt":

PORT=>  -- The port where your application will open.
COMPONENTS=>src/components/*  -- I recommend that you don't touch this, components folder.

To finish the "config.bolt" archive, the style config:

BOOTSTRAP=>true  -- Here you put "true" or "false" if you want to use BootStrap in your pages.
SWEETALERT=>true -- Here you put "true" or "false" if you want to use SweetAlert in your pages.
HTML=> -- Here you put the directory of your main html archive. Ex: app/Home.html


Ok, now that your Bolt options are ready, let´s try the framework =)

1. Use the command: npm install fs http
2. Try execute the app: npm run bolt
3. Now, you will see an message like this: 


Bolt Framework @2023

Your Bolt Server started running on:
http://localhost:2210
Name: My Bolt Project
Description: An simple bolt project

Yeah! It´s working. Now let´s try the SweetAlert Lib,

You can try using the functions:

SuccessAlert()
ErrorAlert()
InfoAlert()

in the console.



It´s all that! Soon we have more updates including:

- components
- Dark/Light Mode



