using NUnit.Framework;
using System;
using System.Reflection;
using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Bebe.Plugins.Account.UnitTests
{
    [TestFixture()]
    public class DemoPluginTests : DemoPlugin //Inherating to be able to test private or internal functions
    {
        #region Variables
        private XrmFakedContext _fakedContext;
        private IOrganizationService _service;
        #endregion

        [SetUp]
        public void SetUp()
        {
            _fakedContext = new XrmFakedContext
            {
                ProxyTypesAssembly = Assembly.GetAssembly(typeof(EarlyBound.Account))
            };

            _service = _fakedContext.GetOrganizationService();

            //Create needed data into fake Service
        }

        //Test if error is thrown
        [Test()]
        public void CreateofAccount_ShouldPrefixNameWithDemo()
        {
            //Prepare
            //Not using earlybound for target since it will be of type entity when it comes from Dataverse as well.
            var target = new Entity(EarlyBound.Account.EntityLogicalName);

            var paramCollection = new ParameterCollection
            {
                { "Target", target }
            };

            var executionContext = _fakedContext.GetDefaultPluginContext();
            executionContext.InputParameters = paramCollection;
            executionContext.MessageName = "Create";

            //Execute
            _fakedContext.ExecutePluginWith<DemoPlugin>(executionContext);

            //Assert
            Assert.IsTrue(target.GetAttributeValue<string>(EarlyBound.Account.PrimaryNameAttribute).StartsWith("Demo"));
        }
    }
}