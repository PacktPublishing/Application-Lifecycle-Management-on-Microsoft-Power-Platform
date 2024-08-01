# Application Lifecycle Management in Power Platform
Repository for the Application Lifecycle Management in Power Platform book.

## Prerequisites
- Azure DevOps or GitHub Account
- Two Dataverse environments (one for source and one for target)
- App Registration
  - Follow this instruction: https://benediktbergmann.eu/2022/01/04/setup-a-service-principal-in-power-automate/


## Prebuild Pipelines
In the `Pipelines` folder you will find all the pipelines that we created throughout the book.

## Buid Tools
The pre build pipelines are using the following build tools:

https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools

## Connection
All the pre build pipelines are using App Registrations to connect to the Dataverse environments.
The Pipelines for ADO are using a service connection to connect to the Dataverse environments.
For GH you will need to create environment variables containing the connection information (URL, Client ID, Client Secret, Tenant ID).

## Folder structure
The pipelines are building on a certain folder structure which is explained in the following link:

https://benediktbergmann.eu/2021/04/27/folder-structure-of-a-dataverse-project/

## Demo Code
This repo does contain demo code for a Plugin as well as a TypeScript/JavaScript file. For both there are some UnitTests as well.

## Author
The author of this book and repository is Benedikt Bergmann
[LinkedIn](https://www.linkedin.com/in/benedikt-bergmann/)
[Twitter/X](https://x.com/BergmannBene)
[Blog](https://benediktbergmann.eu)
[Email](mailto:alm@benediktbergmann.eu)