# TMDA Flagship Website ![TMDA-Website](./tmda-imgs/SM-Telemedica-Logo-Final-225x47.png)

## Introduction
Site built on BEM (Block, Element, Modifier) model with SASS/SCSS partial files.
The final compiled files to be used in production are in the `dist` directory.

## Getting Started

*You will need Visual Studio Code (VS Code) installed on your machine.*

To get project up and running locally, go to the extensions section inside VS Code and install Live Sass Compiler and Live Server.
Once installed go into the Live Sass Comipler settings (or settings.json) and make sure it is reading from the desired output folder, in our case the "savePath" is reading from the "dist" folder.

"liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/dist",
        }
    ]

Once that is set up you can start having your sass files watched/compiled by clicking on the "Watch Sass" button at the bottom of VS Code. Every time you hit save the live sass compiler should automatically keep updating your final css file. To view your project on a browser click "Go Live" at the bottom right of VS Code.

## Technologies
Project was created using:
* VS Studio Code
  * Live Sass Compiler
  * Live Server
