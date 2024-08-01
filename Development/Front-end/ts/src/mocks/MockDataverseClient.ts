/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataverseClient, IEntity, Guid, EntityReference, WebApiExecuteRequest, EntityCollection } from "dataverse-ify";

export class MockDataverseClient implements DataverseClient {
    create(_entity: IEntity): Promise<string> {
        throw new Error("Method not implemented.");
    }
    update(_entity: IEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(_entityName: string | IEntity, _id?: Guid): Promise<void> {
        throw new Error("Method not implemented.");
    }
    retrieve<T extends IEntity>(_entityName: string, _id: string, _columnSet: boolean | string[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    retrieveMultiple<T extends IEntity>(_fetchxml: string): Promise<EntityCollection<T>> {
        throw new Error("Method not implemented.");
    }
    associate(
        _entityName: string,
        _entityId: string,
        _relationship: string,
        _relatedEntities: EntityReference[],
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }

    disassociate(
        _entityName: string,
        _entityId: string,
        _relationship: string,
        _relatedEntities: EntityReference[],
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }

    execute<T>(_request: WebApiExecuteRequest): Promise<T | undefined> {
        throw new Error("Method not implemented.");
    }

    executeMultiple<T>(_request: WebApiExecuteRequest[]): Promise<T[] | undefined> {
        throw new Error("Method not implemented.");
    }
}
