# Koru Assignment Application


## Overview

This application used Node.js, AngularJs, AngularJs Route and Bootsrap.


## Development with `Shweta Rajput`

The following docs describe how you can run this application.

### Installing Dependencies

The application relies upon various JS libraries, such as AngularJS, and Node.js tools,
such as [Karma][karma] and [Protractor][protractor]. You can install these by running:

```
npm install
```

This will also download the AngularJS files needed for the current step of the tutorial and copy
them to `app/lib`.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.

## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  lib/...                --> 3rd party JS/CSS libraries, including AngularJS and jQuery (copied over from `node_modules/`)
  images/...             --> image files
  view/                  --> all the source code of the modules
    login/...             --> files for the `login` module, including JS source code, HTML templates
    home/...              --> files for the `home` module, including JS source code, HTML templates
  data.json              --> static JSON files with login data (used JSON Server as the dummy Backend API) 
  app.css                --> default stylesheet
  app.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> 3rd party libraries and development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the AngularJS Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
package-lock.json        --> Npm specific metadata, including versions of installed development tools dependencies
```

## Contact

For more information on AngularJS, please check out https://angularjs.org/.
For contact the developer, mailto:rajputshweta021@gmail.com

