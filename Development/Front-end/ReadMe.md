# Frontend

This folder contains all the components we have when it comes to frontend development.

## Content

This part of the template contains of the following parts:
- A TypeScript project to develop our front-end scripts in TypeScript (ts folder)
- Folder for PCF development (PCF folder)
- Folder which contains all the webresources we have in the project (Webresources folder)

## Usage
To use the front-end project, open the "front-end" folder with Visual Studio Code. VS Code is better than VS Studio 2019/2020 etc. at highlighting front-end languages (TS/JS, CSS, HTML).

### Typescript
The idea is to write our scripts in TypeScript and transpile them to JavaScript when we are ready.

Read more about the basics of an TypeScript project [here](https://benediktbergmann.eu/2020/12/04/setting-up-a-typescript-project-for-dataverse/).

#### Getting started
First of all we have to open a terminal within Visual Studio code (Terminal --> New Terminal).
We then have to switch to the "ts" folder by executing the following command.
```Shell
npm install
```
This will download all the npm-packages.

#### Develop

You can find the code in the folder "src/code".
If you add new files you need to configure those as entries in the "webpack.config.shared.js" file. Otherwise they will not get transpiled.

#### Transpile/Build
In the "package.json" you can find all the different scripts you could use. Scripts will be executed in the terminal within VS Code. It is important that you are in the "ts" folder.
Every script can be executed with the following command.
```Shell
npm run <script name>
```

There are the following scripts.
- test --> To run all the TypeScript tests
- test-watch --> Will run all the tests whenever something changes in one of the files
- build --> Builds or transpiles our TypeScript files with development configuration
- dist --> Builds or transpiles our TypeScript files with production configuration (the result of that is what we should deploy)
- start --> Builds the files in dev configuration whenever one of the files changes
- format --> Runs an automated formater against our files to enforce formating rules. This is part of our build process as well.
- lint --> executes the linter to enforce standard rules. For example to use "const" insteaf of "var" if the variable is only set once. This is part of our build process as well.

When you build the project it will generate .js-files in our Webresources folder. Those can then be deployed using spkl.

#### Debugging
When you build the files in development configuration the system will include source map within your file ([Read more](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)).

## Deployment
For (automated) deployment we do use spkl for all parts of this template.

Make sure that all the webresources you would like to deploy are added to the spkl.json file in this folder.

See the ReadMe of the "Development" folder for more information.

## Tests
The Template project has a setup to create unit tests which can later be run in an automated manner. To achieve this we use Jest and xrm-mock. To run your tests you can use the test or test-watch script.
```Shell
npm run test
```
```Shell
npm run test-watch
```
or just use npm test
```Shell
npm test
```

If you have installed jest globally via
```Shell
npm install jest -g
```
You could also just execute jest to run all tests
```Shell
jest
```

### Run subsets of tests
To run a subset of tests you could just run jest followed by the name of the tests you would like to run. For example the following command to run all unit tests
```Shell
jest unit
```
Important: Jest needs to be installed globally for this to work.

### Test setup
Tests should always be as "near" as possible to the file they are testing. A best practice is to create a folder called "\_\_test\_\_" which includes all the tests.
The file should be called as the ts-file it is testing suffixed with .test and prefixed with the type of test (unit for unit tests and int for integration tests).
If you for example test the file called demo.ts the test file should be called:
unit.demo.test.ts

## Integration Tests
For integration tests we use [Dataverse-ify](https://github.com/scottdurow/dataverse-ify).
Make sure to set the correct host url in the file __config/test.yaml__.

## "Early Bound"
Like for our back-end C# code we can create early bound typings for TypeScript as well. The Template project has a setup for that and is using Scott Durows [Dataverse-ify](https://github.com/scottdurow/dataverse-ify).
### Usage
You can import the needed typings via a standard import as shown in the demo.ts file
```TypeScript
import { ContactAttributes } from "../dataverse-gen/entities/Contact";
```

This will allow you to access all the fields of Contact via IntelliSense. Which makes development much easier.
Another pro is that it will throw errors if a field was deleted but is still used in your TypeScript.

### Connection
Before you are able to generate the typings or change the configuration you have to connect to your environment. This is done via det following command, which will open a login popup. You have to change the url to the url of your environment in question

```Shell
npx dataverse-auth <Environment URL>
```

### Regenrate typings
To regenerate the typings you simple have to execute the following command.

```Shell
npx dataverse-gen
```

### Add/Change what to generate
There are two ways of changinge the configuration.
#### _Config file_
You could change the config file directly. This is located in the ts folder and is called ".dataverse-get.json".

#### _Dataverse-gen init_
By running the following command the init wizard will be started. Every selection made here will be added to the current configuration.
```Shell
npx dataverse-gen init
```

## WebAPI Wrapper
We do use [Dataverse-ify](https://github.com/scottdurow/dataverse-ify) as a wrapper for the WebAPI.

It does wrapp the WebAPI in a way thich resembles the CDSService we know from the C# SDK.
Here's some start info https://github-wiki-see.page/m/scottdurow/dataverse-ify/wiki/Quick-start
