export interface CommonItem {
  userId: string;
  createdDate: Date;
  updatedDate: Date;
}

export interface InitializedItem extends CommonItem {
  tempSecret: string;
}

export interface ActivatedItem extends CommonItem {
  secret: string;
  recoveryCodes: RecoveryCode[];
}

export interface RecoveryCode {
  value: string;
  used: boolean;
}

export interface ReRegisteringItem extends CommonItem {
  tempSecret: string;
  secret: string;
  recoveryCodes: RecoveryCode[];
}
