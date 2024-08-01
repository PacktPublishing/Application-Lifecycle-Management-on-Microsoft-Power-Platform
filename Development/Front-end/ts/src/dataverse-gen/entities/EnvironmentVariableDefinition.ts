/* eslint-disable*/
import { IEntity } from "dataverse-ify";

// Entity EnvironmentVariableDefinition
export const environmentvariabledefinitionMetadata = {
  typeName: "mscrm.environmentvariabledefinition",
  logicalName: "environmentvariabledefinition",
  collectionName: "environmentvariabledefinitions",
  primaryIdAttribute: "environmentvariabledefinitionid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    iscustomizable: "ManagedProperty",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    componentstate: "Optionset",
    secretstore: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    type: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    overwritetime: "DateOnly:UserLocal",
  },
  navigation: {
    ParentDefinitionId: ["mscrm.environmentvariabledefinition"],
    createdby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    ownerid: ["mscrm.principal"],
    owningbusinessunit: ["mscrm.businessunit"],
    owningteam: ["mscrm.team"],
    owninguser: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum EnvironmentVariableDefinitionAttributes {
  ApiId = "apiid",
  ComponentState = "componentstate",
  ConnectionReferenceId = "connectionreferenceid",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  DefaultValue = "defaultvalue",
  Description = "description",
  DisplayName = "displayname",
  EnvironmentVariableDefinitionId = "environmentvariabledefinitionid",
  EnvironmentVariableDefinitionIdUnique = "environmentvariabledefinitionidunique",
  Hint = "hint",
  ImportSequenceNumber = "importsequencenumber",
  IntroducedVersion = "introducedversion",
  IsCustomizable = "iscustomizable",
  IsManaged = "ismanaged",
  IsRequired = "isrequired",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OverwriteTime = "overwritetime",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParameterKey = "parameterkey",
  ParentDefinitionId = "parentdefinitionid",
  ParentDefinitionIdName = "parentdefinitionidname",
  SchemaName = "schemaname",
  SecretStore = "secretstore",
  SolutionId = "solutionid",
  statecode = "statecode",
  statuscode = "statuscode",
  SupportingSolutionId = "supportingsolutionid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Type = "type",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  ValueSchema = "valueschema",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface EnvironmentVariableDefinition extends IEntity {
  /*
  API Id StringType
  */
  apiid?: string | null;
  /*
  Component State componentstate For internal use only.
  */
  componentstate?: import("../enums/componentstate").componentstate | null;
  /*
  Connection Reference LookupType Unique identifier for Connection Reference associated with Environment Variable Definition.
  */
  connectionreferenceid?: import("dataverse-ify").EntityReference | null;
  /*
  Created By LookupType Unique identifier of the user who created the record.
  */
  createdby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  createdbyname?: string | null;
  /*
   StringType
  */
  createdbyyominame?: string | null;
  /*
  Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  */
  createdon?: Date | null;
  /*
  Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  */
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  createdonbehalfbyname?: string | null;
  /*
   StringType
  */
  createdonbehalfbyyominame?: string | null;
  /*
  Default Value MemoType Default variable value to be used if no associated EnvironmentVariableValue entities exist.
  */
  defaultvalue?: string | null;
  /*
  Description MemoType Description of the variable definition.
  */
  description?: string | null;
  /*
  Display Name [Required] StringType Display Name of the variable definition.
  */
  displayname?: string;
  /*
  Environment Variable Definition UniqueidentifierType Unique identifier for entity instances
  */
  environmentvariabledefinitionid?: import("dataverse-ify").Guid | null;
  /*
   UniqueidentifierType For internal use only.
  */
  environmentvariabledefinitionidunique?: import("dataverse-ify").Guid | null;
  /*
  Hint MemoType For internal use only.
  */
  hint?: string | null;
  /*
  Import Sequence Number IntegerType Sequence number of the import that created this record.
  */
  importsequencenumber?: number | null;
  /*
  Introduced Version StringType Version in which the form is introduced.
  */
  introducedversion?: string | null;
  /*
  Customizable ManagedPropertyType Tells whether the component can be customized.
  */
  iscustomizable?: number | null;
  /*
  Is Managed BooleanType Indicates whether the solution component is part of a managed solution.
  */
  ismanaged?: boolean | null;
  /*
  Is Required [Required] BooleanType For internal use only.
  */
  isrequired?: boolean;
  /*
  Modified By LookupType Unique identifier of the user who modified the record.
  */
  modifiedby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  modifiedbyname?: string | null;
  /*
   StringType
  */
  modifiedbyyominame?: string | null;
  /*
  Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  */
  modifiedon?: Date | null;
  /*
  Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  */
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  modifiedonbehalfbyname?: string | null;
  /*
   StringType
  */
  modifiedonbehalfbyyominame?: string | null;
  /*
  Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  */
  overriddencreatedon?: Date | null;
  /*
  Record Overwrite Time DateTimeType For internal use only. DateOnly:UserLocal
  */
  overwritetime?: Date | null;
  /*
  Owner OwnerType Owner Id
  */
  ownerid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType Name of the owner
  */
  owneridname?: string | null;
  /*
   EntityNameType Owner Id Type
  */
  owneridtype?: string | null;
  /*
   StringType Yomi name of the owner
  */
  owneridyominame?: string | null;
  /*
  Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  */
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  owningbusinessunitname?: string | null;
  /*
  Owning Team LookupType Unique identifier for the team that owns the record.
  */
  owningteam?: import("dataverse-ify").EntityReference | null;
  /*
  Owning User LookupType Unique identifier for the user that owns the record.
  */
  owninguser?: import("dataverse-ify").EntityReference | null;
  /*
  Parameter Key StringType
  */
  parameterkey?: string | null;
  /*
  Parent Definition LookupType Unique identifier for Environment Variable Definition associated with Environment Variable Definition.
  */
  parentdefinitionid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  parentdefinitionidname?: string | null;
  /*
  Schema Name StringType Unique entity name.
  */
  schemaname?: string | null;
  /*
  SecretStore environmentvariabledefinition_environmentvariabledefinition_secretstore Environment variable secret store.
  */
  secretstore?: import("../enums/environmentvariabledefinition_environmentvariabledefinition_secretstore").environmentvariabledefinition_environmentvariabledefinition_secretstore | null;
  /*
  Solution UniqueidentifierType Unique identifier of the associated solution.
  */
  solutionid?: import("dataverse-ify").Guid | null;
  /*
  Status environmentvariabledefinition_environmentvariabledefinition_statecode Status of the Environment Variable Definition
  */
  statecode?: import("../enums/environmentvariabledefinition_environmentvariabledefinition_statecode").environmentvariabledefinition_environmentvariabledefinition_statecode | null;
  /*
  Status Reason environmentvariabledefinition_environmentvariabledefinition_statuscode Reason for the status of the Environment Variable Definition
  */
  statuscode?: import("../enums/environmentvariabledefinition_environmentvariabledefinition_statuscode").environmentvariabledefinition_environmentvariabledefinition_statuscode | null;
  /*
  Solution UniqueidentifierType For internal use only.
  */
  supportingsolutionid?: import("dataverse-ify").Guid | null;
  /*
  Time Zone Rule Version Number IntegerType For internal use only.
  */
  timezoneruleversionnumber?: number | null;
  /*
  Type [Required] environmentvariabledefinition_environmentvariabledefinition_type Environment variable value type.
  */
  type?: import("../enums/environmentvariabledefinition_environmentvariabledefinition_type").environmentvariabledefinition_environmentvariabledefinition_type;
  /*
  UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  */
  utcconversiontimezonecode?: number | null;
  /*
  Value Schema MemoType For internal use only.
  */
  valueschema?: string | null;
  /*
  Version Number BigIntType Version Number
  */
  versionnumber?: number | null;
}
