/* eslint-disable*/
import { IEntity } from "dataverse-ify";

// Entity EnvironmentVariableValue
export const environmentvariablevalueMetadata = {
  typeName: "mscrm.environmentvariablevalue",
  logicalName: "environmentvariablevalue",
  collectionName: "environmentvariablevalues",
  primaryIdAttribute: "environmentvariablevalueid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    iscustomizable: "ManagedProperty",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    componentstate: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    overwritetime: "DateOnly:UserLocal",
  },
  navigation: {
    EnvironmentVariableDefinitionId: ["mscrm.environmentvariabledefinition"],
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
export const enum EnvironmentVariableValueAttributes {
  ComponentState = "componentstate",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  EnvironmentVariableDefinitionId = "environmentvariabledefinitionid",
  EnvironmentVariableDefinitionIdName = "environmentvariabledefinitionidname",
  EnvironmentVariableValueId = "environmentvariablevalueid",
  EnvironmentVariableValueIdUnique = "environmentvariablevalueidunique",
  ImportSequenceNumber = "importsequencenumber",
  IntroducedVersion = "introducedversion",
  IsCustomizable = "iscustomizable",
  IsManaged = "ismanaged",
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
  SchemaName = "schemaname",
  SolutionId = "solutionid",
  statecode = "statecode",
  statuscode = "statuscode",
  SupportingSolutionId = "supportingsolutionid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  Value = "value",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface EnvironmentVariableValue extends IEntity {
  /*
  Component State componentstate For internal use only.
  */
  componentstate?: import("../enums/componentstate").componentstate | null;
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
  Environment Variable Definition [Required] LookupType Unique identifier for Environment Variable Definition associated with Environment Variable Value.
  */
  environmentvariabledefinitionid?: import("dataverse-ify").EntityReference;
  /*
   StringType
  */
  environmentvariabledefinitionidname?: string | null;
  /*
  Environment Variable Value UniqueidentifierType Unique identifier for entity instances
  */
  environmentvariablevalueid?: import("dataverse-ify").Guid | null;
  /*
   UniqueidentifierType For internal use only.
  */
  environmentvariablevalueidunique?: import("dataverse-ify").Guid | null;
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
  Schema Name [Required] StringType Unique entity name.
  */
  schemaname?: string;
  /*
  Solution UniqueidentifierType Unique identifier of the associated solution.
  */
  solutionid?: import("dataverse-ify").Guid | null;
  /*
  Status environmentvariablevalue_environmentvariablevalue_statecode Status of the Environment Variable Value
  */
  statecode?: import("../enums/environmentvariablevalue_environmentvariablevalue_statecode").environmentvariablevalue_environmentvariablevalue_statecode | null;
  /*
  Status Reason environmentvariablevalue_environmentvariablevalue_statuscode Reason for the status of the Environment Variable Value
  */
  statuscode?: import("../enums/environmentvariablevalue_environmentvariablevalue_statuscode").environmentvariablevalue_environmentvariablevalue_statuscode | null;
  /*
  Solution UniqueidentifierType For internal use only.
  */
  supportingsolutionid?: import("dataverse-ify").Guid | null;
  /*
  Time Zone Rule Version Number IntegerType For internal use only.
  */
  timezoneruleversionnumber?: number | null;
  /*
  UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  */
  utcconversiontimezonecode?: number | null;
  /*
  Value MemoType Contains the actual variable data.
  */
  value?: string | null;
  /*
  Version Number BigIntType Version Number
  */
  versionnumber?: number | null;
}
