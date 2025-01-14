export interface XMLResponse {
  UBLExtensions: UBLExtensions;
  UBLVersionID: string;
  CustomizationID: string;
  ProfileID: string;
  ProfileExecutionID: string;
  ID: string;
  UUID: string;
  IssueDate: Date;
  IssueTime: string;
  DueDate: Date;
  InvoiceTypeCode: string;
  DocumentCurrencyCode: string;
  LineCountNumeric: string;
  AccountingSupplierParty: AccountingSupplierParty;
  AccountingCustomerParty: AccountingCustomerParty;
  PaymentMeans: PaymentMeans;
  TaxTotal: TaxTotal;
  WithholdingTaxTotal: WithholdingTaxTotal;
  LegalMonetaryTotal: LegalMonetaryTotal;
  InvoiceLine: InvoiceLine[];
}

export interface AccountingCustomerParty {
  AdditionalAccountID: string;
  Party: AccountingCustomerPartyParty;
}

export interface AccountingCustomerPartyParty {
  PartyName: PartyName;
  PhysicalLocation: PhysicalLocation;
  PartyTaxScheme: PartyTaxScheme;
  PartyLegalEntity: PurplePartyLegalEntity;
  Contact: Contact;
}

export interface Contact {
  Telephone: string;
  ElectronicMail: string;
}

export interface PurplePartyLegalEntity {
  RegistrationName: string;
  CompanyID: string;
  CorporateRegistrationScheme: PartyName;
  ShareholderParty: ShareholderParty;
}

export interface PartyName {
  Name: string;
}

export interface ShareholderParty {
  PartecipationPercent: string;
}

export interface PartyTaxScheme {
  RegistrationName: string;
  CompanyID: string;
  TaxLevelCode: string;
  TaxScheme: Scheme;
  RegistrationAddress?: Address;
}

export interface Address {
  ID: string;
  CityName: string;
  PostalZone: string;
  CountrySubentity: string;
  CountrySubentityCode: string;
  AddressLine: AddressLine;
  Country: Country;
}

export interface AddressLine {
  Line: string;
}

export interface Country {
  IdentificationCode: string;
  Name: string;
}

export interface Scheme {
  ID: string;
  Name: string;
}

export interface PhysicalLocation {
  Address: Address;
}

export interface AccountingSupplierParty {
  AdditionalAccountID: string;
  Party: AccountingSupplierPartyParty;
}

export interface AccountingSupplierPartyParty {
  IndustryClassificationCode: string;
  PartyName: PartyName;
  PhysicalLocation: PhysicalLocation;
  PartyTaxScheme: PartyTaxScheme;
  PartyLegalEntity: FluffyPartyLegalEntity;
  Contact: Contact;
}

export interface FluffyPartyLegalEntity {
  RegistrationName: string;
  CompanyID: string;
  CorporateRegistrationScheme: Scheme;
}

export interface InvoiceLine {
  ID: string;
  InvoicedQuantity: string;
  LineExtensionAmount: string;
  FreeOfChargeIndicator: string;
  AllowanceCharge?: AllowanceCharge;
  TaxTotal: TaxTotal[];
  Item: Item;
  Price: Price;
}

export interface AllowanceCharge {
  ID: string;
  ChargeIndicator: string;
  AllowanceChargeReasonCode: string;
  AllowanceChargeReason: string;
  MultiplierFactorNumeric: string;
  Amount: string;
  BaseAmount: string;
}

export interface Item {
  Description: string;
  StandardItemIdentification: StandardItemIdentification;
}

export interface StandardItemIdentification {
  ID: string;
}

export interface Price {
  PriceAmount: string;
  BaseQuantity: string;
}

export interface TaxTotal {
  TaxAmount: string;
  RoundingAmount: string;
  TaxSubtotal: TaxTotalTaxSubtotal;
}

export interface TaxTotalTaxSubtotal {
  TaxableAmount?: string;
  TaxAmount: string;
  TaxCategory: TaxCategory;
  BaseUnitMeasure?: string;
  PerUnitAmount?: string;
}

export interface TaxCategory {
  Percent?: string;
  TaxScheme: Scheme;
}

export interface LegalMonetaryTotal {
  LineExtensionAmount: string;
  TaxExclusiveAmount: string;
  TaxInclusiveAmount: string;
  PrepaidAmount: string;
  PayableAmount: string;
}

export interface PaymentMeans {
  ID: string;
  PaymentMeansCode: string;
  PaymentDueDate: Date;
  PaymentID: string;
}

export interface UBLExtensions {
  UBLExtension: UBLExtension[];
}

export interface UBLExtension {
  ExtensionContent: ExtensionContent;
}

export interface ExtensionContent {
  DianExtensions?: DianExtensions;
  Signature?: Signature;
}

export interface DianExtensions {
  InvoiceControl: InvoiceControl;
  InvoiceSource: InvoiceSource;
  SoftwareProvider: SoftwareProvider;
  SoftwareSecurityCode: string;
  AuthorizationProvider: AuthorizationProvider;
  QRCode: string;
}

export interface AuthorizationProvider {
  AuthorizationProviderID: string;
}

export interface InvoiceControl {
  InvoiceAuthorization: string;
  AuthorizationPeriod: AuthorizationPeriod;
  AuthorizedInvoices: AuthorizedInvoices;
}

export interface AuthorizationPeriod {
  StartDate: Date;
  EndDate: Date;
}

export interface AuthorizedInvoices {
  Prefix: string;
  From: string;
  To: string;
}

export interface InvoiceSource {
  IdentificationCode: string;
}

export interface SoftwareProvider {
  ProviderID: string;
  SoftwareID: string;
}

export interface Signature {
  '@attributes': SignatureAttributes;
  SignedInfo: SignedInfo;
  SignatureValue: string;
  KeyInfo: KeyInfo;
  Object: Object;
}

export interface SignatureAttributes {
  Id: string;
}

export interface KeyInfo {
  '@attributes': SignatureAttributes;
  X509Data: X509Data;
  KeyValue: KeyValue;
}

export interface KeyValue {
  RSAKeyValue: RSAKeyValue;
}

export interface RSAKeyValue {
  Modulus: string;
  Exponent: string;
}

export interface X509Data {
  X509Certificate: string;
}

export interface Object {
  '@attributes': SignatureAttributes;
  QualifyingProperties: QualifyingProperties;
}

export interface QualifyingProperties {
  '@attributes': QualifyingPropertiesAttributes;
  SignedProperties: SignedProperties;
}

export interface QualifyingPropertiesAttributes {
  Id: string;
  Target: string;
}

export interface SignedProperties {
  '@attributes': SignatureAttributes;
  SignedSignatureProperties: SignedSignatureProperties;
  SignedDataObjectProperties: SignedDataObjectProperties;
}

export interface SignedDataObjectProperties {
  DataObjectFormat: DataObjectFormat;
}

export interface DataObjectFormat {
  '@attributes': DataObjectFormatAttributes;
  MimeType: string;
  Encoding: string;
}

export interface DataObjectFormatAttributes {
  ObjectReference: string;
}

export interface SignedSignatureProperties {
  SigningTime: Date;
  SigningCertificate: SigningCertificate;
  SignaturePolicyIdentifier: SignaturePolicyIdentifier;
  SignerRole: SignerRole;
}

export interface SignaturePolicyIdentifier {
  SignaturePolicyId: SignaturePolicyID;
}

export interface SignaturePolicyID {
  SigPolicyId: SigPolicyID;
  SigPolicyHash: SigPolicyHash;
}

export interface SigPolicyHash {
  DigestMethod: CanonicalizationMethod;
  DigestValue: string;
}

export interface CanonicalizationMethod {
  '@attributes': CanonicalizationMethodAttributes;
}

export interface CanonicalizationMethodAttributes {
  Algorithm: string;
}

export interface SigPolicyID {
  Identifier: string;
  Description: any[];
}

export interface SignerRole {
  ClaimedRoles: ClaimedRoles;
}

export interface ClaimedRoles {
  ClaimedRole: string;
}

export interface SigningCertificate {
  Cert: CERT;
}

export interface CERT {
  CertDigest: SigPolicyHash;
  IssuerSerial: IssuerSerial;
}

export interface IssuerSerial {
  X509IssuerName: string;
  X509SerialNumber: string;
}

export interface SignedInfo {
  CanonicalizationMethod: CanonicalizationMethod;
  SignatureMethod: CanonicalizationMethod;
  Reference: Reference[];
}

export interface Reference {
  '@attributes': ReferenceAttributes;
  Transforms?: Transforms;
  DigestMethod: CanonicalizationMethod;
  DigestValue: string;
}

export interface ReferenceAttributes {
  Id?: string;
  URI: string;
  Type?: string;
}

export interface Transforms {
  Transform: CanonicalizationMethod;
}

export interface WithholdingTaxTotal {
  TaxAmount: string;
  RoundingAmount: string;
  TaxSubtotal: WithholdingTaxTotalTaxSubtotal;
}

export interface WithholdingTaxTotalTaxSubtotal {
  TaxableAmount: string;
  TaxAmount: string;
  TaxCategory: TaxCategory;
}
