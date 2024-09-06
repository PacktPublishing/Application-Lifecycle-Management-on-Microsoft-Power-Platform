# Application Lifecycle Management on Microsoft Power Platform

<a href="https://www.packtpub.com/en-in/product/application-lifecycle-management-on-microsoft-power-platform-9781835462324"> <img src="https://content.packt.com/_/image/xxlarge/B21721/cover_image_large.jpg" alt="Application Lifecycle Management on Microsoft Power Platform" itemprop="url" height="256px" align="right">

This is the code repository for [Application-Lifecycle-Management-on-Microsoft-Power-Platform](https://www.packtpub.com/en-in/product/application-lifecycle-management-on-microsoft-power-platform-9781835462324), published by Packt.

**A comprehensive guide to managing the deployment of your solutions**

## What is this book about?
This book is your ultimate guide to managing your Power Platform solutions effortlessly across environments using modern application lifecycle management tools such as Azure DevOps and GitHub.

This book covers the following exciting features:
* Understand the importance of ALM in the context of Microsoft Power Platform
* Leverage the Power Platform CLI to streamline ALM practices
* Develop a comprehensive strategy for managing Power Platform environments
* Explore techniques for defining robust Dataverse solutions for scalability and performance
* Apply ALM concepts to Microsoft Power Platform
* Use Managed Pipelines in managed Power Platform environments
* Implement a source code-centric approach with Azure DevOps Pipelines and GitHub Actions
  
If you feel this book is for you, get your [copy](https://a.co/d/3XXpVTA) today!

## Instructions and Navigations

The code will look like the following:

```
- task: PowerPlatformPublishCustomizations@2
  displayName: Publish Customizations
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '<Name of the dev ADO Service connection>'
    AsyncOperation: true
    MaxAsyncWaitTime: '60'
```

**Following is what you need for this book:**
If you are involved in managing the deployment of Microsoft Power Platform solutions, whether as a solution architect, developer, functional consultant, or DevOps specialist, this book is for you. Familiarity with Power Platform is recommended.

With the following software and hardware list you can run all code files present in the book (Chapter 1-13).

## Software and Hardware List
| Software/ Hardware required | OS required/ Other requirements |
| ------------------------------------ | ----------------------------------- |
| Azure DevOps or GitHub Account | Windows, macOS, or Linux |
| Two Dataverse Environments | Windows, macOS, or Linux |
| App Registration | https://benediktbergmann.eu/2022/01/04/setup-a-service-principal-in-power-automate/ |

## Related products
* Power Platform and the AI Revolution [[Packt]](https://www.packtpub.com/en-in/product/power-platform-and-the-ai-revolution-9781835086360) [[Amazon]](https://a.co/d/80PJk9W)
* Extending Dynamics 365 Finance and Operations Apps with Power Platform [[Packt]](https://www.packtpub.com/en-in/product/extending-dynamics-365-finance-and-operations-apps-with-power-platform-9781801811590) [[Amazon]](https://a.co/d/3uSEtrf)

## Get to Know the Author
**Benedikt Bergmann**
is the CEO of CRM Konsulterna Deutschland and develops solutions for Dynamics 365 and the Power Platform with his German precision and nearly 15 years of experience. He is a solution architect with a huge understanding of customers’ challenges and a real problem solver with very detailed knowledge about most of the Platform.

One area he is very invested in is everything around Application Lifecycle Management. In 2021, he was awarded Microsoft Most Valuable Professional in the Business Application area.







