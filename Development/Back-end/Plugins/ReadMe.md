# Plugins
This folder contains all the Plugin projects we have in the solution.

# Separate projects
One big project containing all the plugins will grow bigger and bigger over time. This leads to a lot of work when trying to maintain the project. One problem with that approach is that one either deploys all plugins or none of them, because it only generates one dll at the end.
This could lead to problems when changes or new functionality doesn't get tested fast enough but fixes where made as well. In that one can't deploy the fix without introducing untested stuff.

Therefore we create a plugin project per entity/table. This will result in an assembly per entity/table as well.
If there are plugins ranging different entities a case to case decison has to be made. For example a "Common" plugin could be created.

---

# Setup a new plugin project

1. Create project
    1. In the solution, navigate to `Back-end/Plugins`, create a new project from this location.
    1. Select template `Class Library (.NET Framework)` (this will be changed in the future).
    1. Set name as the logicname of the table/entity. The rest will be found in the namespace.
    1. Select the folder: `[customer]\Development\Back-end\Plugins`.
    1. Select **Framework**: `.NET Framework 4.7.1` (this will be higher in the future).
    1. Click Create.
1. Remove the first class file (probably called `Class1.cs`)
1. Edit the Properties of this project:
    1. In **Application** tab, set **Assembly name** and **Default namespace** prefix with `[customer].Plugins.`
    1. In **Signing** tab, sign it with a common file for this customer - if not found, create a new one and then save a copy of it in the Plugins folder to be used for future projects.
1. Add **References** to
    1. Shared Projects
        * `CRMK.CrmSdk.Base`
        * `CRMK.CrmSdk.Plugin`
        * `EarlyBound`
    1. Assemblies
        * `System.Runtime.Caching`
1. Select **Manage NuGet Packages...**
    1. Browse and find `Microsoft.CrmSdk.CoreAssemblies` and add it.
1. Create a new **Class** to your project.
    1. Set a proper name, e.g. `[tablename]Validate`, using display names, without dots etc.
    1. Change the class to `public`.
    1. Inherit the class `PluginBase`. Errors occur, but VS is kind to us, just set the cursor on this class, press `<ctrl>+.` and it will help us.
    1. To be sure we are in the correct context, set the expected:
        * `ExpectedEntity`
        * `ExpectedMessages`

_**Now we are ready to create the logics!**_

[Read more on the ReadMe in the CRMK.Codebase](https://dev.azure.com/crmkonsulterna/CRMK-Internal/_git/CRMK.Codebase)

---

# Test

Every Plugin project has a corresponding test project within the "Test" folder.

Currently we use [FakeXrmEasy](https://dynamicsvalue.com/home) to mock Dataverse within our tests.

---

# Deployment
For (automated) deployment we use spkl for all parts of this template. See the ReadMe of the "Development" folder for more information.

---

# Example plugin code

```csharp
using CRMK.CrmSdk.Plugin;
using CRMK.EarlyBound;
using Microsoft.Xrm.Sdk;

namespace CRMKS.Plugins.crmks_ledger
{
    public class LedgerValidate : PluginBase
    {
        public override MessageName[] ExpectedMessages => new[] { MessageName.Create, MessageName.Update };

        public override string ExpectedEntity => crmks_Ledger.EntityLogicalName;

        public override void Execute(PluginContainer container)
        {
            var ledger = container.Entities.Complete<crmks_Ledger>();
            if (ledger?.crmks_LedgerType == null)
            {
                throw new InvalidPluginExecutionException("Ledgers need a type.");
            }
            if (container.Entities.Pre<crmks_Ledger>() is crmks_Ledger preledger &&
                preledger.crmks_LedgerType != ledger.crmks_LedgerType)
            {
                throw new InvalidPluginExecutionException("Ledger Type cannot be changed.");
            }
        }
    }
}
```