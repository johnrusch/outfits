// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AcquisitionTypes = {
  "GIFT": "GIFT",
  "PURCHASE": "PURCHASE",
  "LEGACY": "LEGACY",
  "HANDMEDOWN": "HANDMEDOWN"
};

const { Garment, Outfit, OutfitGarment, S3Object, GarmentType } = initSchema(schema);

export {
  Garment,
  Outfit,
  OutfitGarment,
  AcquisitionTypes,
  S3Object,
  GarmentType
};