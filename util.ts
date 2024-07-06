import { GarmentType } from "./API";

export const formatGarmentType = (type: GarmentType) => {
  switch (type) {
    case "SHIRT":
      return "Shirts";
    case "PANTS":
      return "Pants";
    case "JACKET":
      return "Jackets";
    case "DRESS":
      return "Dresses";
    case "SKIRT":
      return "Skirts";
    case "BLOUSE":
      return "Blouses";
    case "SWEATER":
      return "Sweaters";
    case "SHORTS":
      return "Shorts";
    case "VEST":
      return "Vests";
    case "COAT":
      return "Coats";
    case "SWEATSHIRT":
      return "Sweatshirts";
    case "UNDERWEAR":
      return "Underwear";
    case "SOCKS":
      return "Socks";
    default:
      return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }
};
