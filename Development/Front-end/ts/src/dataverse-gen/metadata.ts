/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { contactMetadata } from "./entities/Contact";
import { environmentvariabledefinitionMetadata } from "./entities/EnvironmentVariableDefinition";
import { environmentvariablevalueMetadata } from "./entities/EnvironmentVariableValue";

export const Entities = {
  Account: "account",
  Contact: "contact",
  EnvironmentVariableDefinition: "environmentvariabledefinition",
  EnvironmentVariableValue: "environmentvariablevalue",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    contact: contactMetadata,
    environmentvariabledefinition: environmentvariabledefinitionMetadata,
    environmentvariablevalue: environmentvariablevalueMetadata,
  },
  actions: {
  }
};