import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AcquisitionTypes {
  GIFT = "GIFT",
  PURCHASE = "PURCHASE",
  LEGACY = "LEGACY",
  HANDMEDOWN = "HANDMEDOWN"
}

type EagerS3Object = {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerGarmentType = {
  readonly type: string;
  readonly description?: string | null;
}

type LazyGarmentType = {
  readonly type: string;
  readonly description?: string | null;
}

export declare type GarmentType = LazyLoading extends LazyLoadingDisabled ? EagerGarmentType : LazyGarmentType

export declare const GarmentType: (new (init: ModelInit<GarmentType>) => GarmentType)

type EagerGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: number | null;
  readonly type?: GarmentType | null;
  readonly datePurchased?: string | null;
  readonly brand?: string | null;
  readonly color?: string | null;
  readonly size?: string | null;
  readonly material?: string | null;
  readonly acquisition?: AcquisitionTypes | keyof typeof AcquisitionTypes | null;
  readonly store?: string | null;
  readonly photo?: S3Object | null;
  readonly outfits?: (OutfitGarment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: number | null;
  readonly type?: GarmentType | null;
  readonly datePurchased?: string | null;
  readonly brand?: string | null;
  readonly color?: string | null;
  readonly size?: string | null;
  readonly material?: string | null;
  readonly acquisition?: AcquisitionTypes | keyof typeof AcquisitionTypes | null;
  readonly store?: string | null;
  readonly photo?: S3Object | null;
  readonly outfits: AsyncCollection<OutfitGarment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Garment = LazyLoading extends LazyLoadingDisabled ? EagerGarment : LazyGarment

export declare const Garment: (new (init: ModelInit<Garment>) => Garment) & {
  copyOf(source: Garment, mutator: (draft: MutableModel<Garment>) => MutableModel<Garment> | void): Garment;
}

type EagerOutfit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Outfit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateWorn: string;
  readonly rating?: number | null;
  readonly Garments?: (OutfitGarment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOutfit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Outfit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateWorn: string;
  readonly rating?: number | null;
  readonly Garments: AsyncCollection<OutfitGarment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Outfit = LazyLoading extends LazyLoadingDisabled ? EagerOutfit : LazyOutfit

export declare const Outfit: (new (init: ModelInit<Outfit>) => Outfit) & {
  copyOf(source: Outfit, mutator: (draft: MutableModel<Outfit>) => MutableModel<Outfit> | void): Outfit;
}

type EagerOutfitGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OutfitGarment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly garmentId?: string | null;
  readonly outfitId?: string | null;
  readonly garment: Garment;
  readonly outfit: Outfit;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOutfitGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OutfitGarment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly garmentId?: string | null;
  readonly outfitId?: string | null;
  readonly garment: AsyncItem<Garment>;
  readonly outfit: AsyncItem<Outfit>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OutfitGarment = LazyLoading extends LazyLoadingDisabled ? EagerOutfitGarment : LazyOutfitGarment

export declare const OutfitGarment: (new (init: ModelInit<OutfitGarment>) => OutfitGarment) & {
  copyOf(source: OutfitGarment, mutator: (draft: MutableModel<OutfitGarment>) => MutableModel<OutfitGarment> | void): OutfitGarment;
}