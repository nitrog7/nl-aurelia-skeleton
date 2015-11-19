NL Aurelia Skeleton
=======================

A simple skeleton to start you off on your Aurelia project.

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm install -g gulp           # Install Gulp
$ npm install -g jspm           # Install JSPM
$ jspm install                  # Install JSPM modules listed in ./package.json
$ gulp                          # Compile and launch
```

Usage
-----

#### `gulp` also `gulp dev`
Runs dev server and watches the files in the src directory. Compiles at runtime. The dev server can be found at `localhost:9000`.

#### `gulp compile`
Compiles the source files (ES6 > ES5 and SCSS > CSS), removes comments, and minifies. Then saves them into the release folder (/dist). Production builds will fail on eslint errors (but not on warnings).

#### `gulp test`
Runs unit tests with Karma using Jasmine specs.

#### `gulp bundle`
Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle the app:

#### `gulp unbundle`
You can also unbundle.

## Configuration
The configuration is done by ```/build/config.js``` file.

##### Optional
Under ```options``` of ```dist/aurelia``` add ```rev: true``` to add bundle file revision/version.

### Configuration

Basic project configuration can be found in `~/build/config.js`. Here you'll be able to redefine your src and dist directories, as well as tweak what ports the server will run on.

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── build                    # All build-related configuration
│   ├── tasks                # Gulp configuration files
|   ├── config.js            # Project configuration settings
├── src                      # Application source code
|   ├── styles               # CSS styles
|   ├── views                # Components that live at a route
|   ├── index.html           # Initial HTML page
|   └── main.js              # Application bootstrap and rendering
└── karma.conf.js            # Karma configuration settings
```

Styles
------

All `.scss` imports will be run through the autoprefixer when compiled into CSS.

Testing
-------

To add a unit test, simply create `.spec.js` file anywhere in '/test/unit'. All imports will be relative to the "/src" directory. The entry point for Karma uses JSPM's custom require to load all these files, and Jasmine will be available to you within your test without the need to import them.

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Make sure your app runs and is accessible

  ```shell
  gulp
  ```

5. In another console run the E2E-Tests

  ```shell
  gulp e2e
  ```

## Exporting bundled production version
A gulp task is already configured for that. Use the following command to export the app:

  ```shell
    gulp export
  ```
The app will be exported into ```export``` directory preserving the directory structure.
#### Configuration
The configuration is done by ```bundles.json``` file.
In addition, ```export.json``` file is available for including individual files.

Troubleshooting
---------------

Nothing yet. Having an issue? Report it and I'll get to it as soon as possible!
