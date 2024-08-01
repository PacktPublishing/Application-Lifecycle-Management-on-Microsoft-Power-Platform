import { ContactAttributes } from "../../dataverse-gen/entities/Contact";
import { DataverseClient, EntityCollection, IEntity, setMetadataCache, XrmContextDataverseClient } from "dataverse-ify";
import { metadataCache } from "../../dataverse-gen/metadata";
import { Account } from "../../dataverse-gen/entities/Account";

export async function onLoad(eventContext: Xrm.Events.EventContext): Promise<void> {
    console.log("some log");

    const formContext = eventContext.getFormContext();
    const service = new XrmContextDataverseClient(Xrm.WebApi);

    formContext.getAttribute(ContactAttributes.FirstName).setValue("Bob");

    await showNotification(formContext, service);
}

export async function showNotification(formContext: Xrm.FormContext, service: DataverseClient): Promise<void> {
    const openChildren = await getActiveChildAccounts(formContext.data.entity.getId(), service);

    if (openChildren !== null) {
        formContext.ui.setFormNotification(
            "There are " + openChildren.entities.length + " active Accounts related to this contact.",
            "INFO",
            "AmountChildAccounts",
        );
    }
}

async function getActiveChildAccounts(
    parentId: string,
    service: DataverseClient,
): Promise<EntityCollection<IEntity> | null> {
    setMetadataCache(metadataCache);

    const fetchXml = `<fetch>
        <entity name="account">
            <attribute name="primarycontactid" />
            <filter>
                <condition attribute="statecode" operator="eq" value="0" />
                <condition attribute="primarycontactid" operator="eq" value="${parentId}" />
            </filter>
            </entity>
        </fetch>`;
    return await service.retrieveMultiple<Account>(fetchXml);
}
