import * as Demo from "../demoForm";
import { XrmMockGenerator } from "xrm-mock";
import { Entity, EntityCollection, setMetadataCache } from "dataverse-ify";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { contactMetadata } from "../../../dataverse-gen/entities/Contact";
import { Account, accountMetadata } from "../../../dataverse-gen/entities/Account";
import { MockDataverseClient } from "../../../mocks/MockDataverseClient";

/*
import EventContext = Xrm.Events.EventContext;
import FormContext = Xrm.FormContext;
*/

describe("Group of tests", () => {
    beforeEach(() => {
        XrmMockGenerator.initialise();
        XrmMockGenerator.Attribute.createString("firstname", "Joe");
        setMetadataCache(metadataCache);
    });

    it("adds 1 + 2 to equal 3", () => {
        // Arrange

        // Act

        // Assert
        expect(1 + 2).toBe(3);
    });

    it("should initially be called Joe", () => {
        // Arrange
        const eventContext = XrmMockGenerator.getEventContext();
        const formContext = eventContext.getFormContext();
        // Act

        // Assert
        const name = formContext.getAttribute("firstname").getValue();
        expect(name).toBe("Joe"); // Pass
    });

    it("should change name to Bob onLoad", () => {
        // Arrange
        const eventContext = XrmMockGenerator.getEventContext();
        const formContext = eventContext.getFormContext();

        // Act
        Demo.onLoad(eventContext);

        // Assert
        const name = formContext.getAttribute("firstname").getValue();
        expect(name).toBe("Bob"); // Pass
    });
    it("setFormNotification", async () => {
        //Arrange
        const eventContext = XrmMockGenerator.getEventContext();
        const formContext = eventContext.getFormContext();
        formContext.ui.setFormNotification = jest.fn();
        formContext.data.entity.getId = jest.fn().mockReturnValue("111");

        const mockServiceClient = new MockDataverseClient();
        mockServiceClient.retrieveMultiple = jest.fn().mockImplementation(() => {
            return new EntityCollection([
                {
                    logicalName: accountMetadata.logicalName,
                    name: "First Test Account",
                    id: "111",
                    primarycontactid: Entity.toEntityReference({ id: "111", logicalName: contactMetadata.logicalName }),
                } as Account,
                {
                    logicalName: accountMetadata.logicalName,
                    name: "Second Test Account",
                    id: "222",
                    primarycontactid: Entity.toEntityReference({ id: "111", logicalName: contactMetadata.logicalName }),
                } as Account,
            ]);
        });

        //Act
        await Demo.showNotification(formContext, mockServiceClient);

        //Assert
        expect(formContext.ui.setFormNotification).toHaveBeenCalledTimes(1);
        expect(formContext.ui.setFormNotification).toHaveBeenCalledWith(
            "There are 2 active Accounts related to this contact.",
            "INFO",
            "AmountChildAccounts",
        );
    });
});
