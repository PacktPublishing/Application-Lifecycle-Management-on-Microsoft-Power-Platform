using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Runtime.Remoting.Services;
using Bebe.EarlyBound;

namespace Bebe.Plugins.Account
{
    public class DemoPlugin : IPlugin
    {
        public DemoPlugin(string unsecure, string secure)
        {

        }

        public DemoPlugin()
        {

        }

        public void Execute(IServiceProvider serviceProvider)
        {
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity targetEntity)
            {
                if (targetEntity.Attributes.Contains(EarlyBound.Account.PrimaryNameAttribute))
                {
                    targetEntity.Attributes[EarlyBound.Account.PrimaryNameAttribute] = "Demo " + targetEntity.Attributes[EarlyBound.Account.PrimaryNameAttribute];
                } else
                {
                    targetEntity.Attributes[EarlyBound.Account.PrimaryNameAttribute] = "Demo";
                }
            }
        }
    }
}
