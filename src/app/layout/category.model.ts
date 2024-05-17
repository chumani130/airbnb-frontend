import { IconName } from "@fortawesome/free-regular-svg-icons";

export type CategoryName = "ALL" | "AMAZING_VIEWS" | "TREEHOUSE" | "BEACH" 
| "FARMS" | "TINY_HOMES" | "CONTAINERS" | "CAMPING" | "CASTLE" | "SKIING"
| "CAMPERS" | "ARTIC" | "BOAT" | "BED_AND_BREAKFAST" | "EARTH_HOMES"
| "TOWER" | "CAVES" | "LUXES" | "CHEFS_KITCHEN" | "LAKE" | "OMG"

export interface Category {
    icon: IconName,
    displayName: string,
    technicalName: CategoryName,
    activated: boolean;
}