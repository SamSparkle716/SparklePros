export const STORAGE_KEY = "sparkle_selected_service";

export const mainServices = [
  "Commercial Cleaning",
  "Residential Cleaning",
  "Industrial Cleaning",
  "Post Construction Cleaning",
  "Carpet Cleaning",
] as const;

export type MainService = typeof mainServices[number];

export const serviceDetails: Record<MainService, string[]> = {
  "Commercial Cleaning": [
    "Office Cleaning",
    "Medical / Clinic Cleaning",
    "Retail Cleaning",
    "Restaurant Cleaning",
    "Day Porter Services",
  ],
  "Residential Cleaning": [
    "Standard Home Cleaning",
    "Deep Clean",
    "Move-In / Move-Out",
    "Airbnb & Rental Turnovers",
  ],
  "Industrial Cleaning": [
    "Warehouse Cleaning",
    "Manufacturing / Plant Cleaning",
    "Floor Scrubbing / Degreasing",
    "Equipment Area Cleaning",
  ],
  "Post Construction Cleaning": [
    "Rough / Initial Clean",
    "Final Clean",
    "Touch-Up Clean",
  ],
  "Carpet Cleaning": [
    "Hot Water Extraction",
    "Low-Moisture Cleaning",
    "Spot / Stain Treatment",
    "Odor Treatment",
  ],
};

export const routeToServiceMap: Record<string, MainService> = {
  commercial: "Commercial Cleaning",
  residential: "Residential Cleaning",
  industrial: "Industrial Cleaning",
  "post-construction": "Post Construction Cleaning",
  carpet: "Carpet Cleaning",
};

export function getServiceFromPath(pathname: string): MainService | null {
  const lowerPath = pathname.toLowerCase();
  
  if (lowerPath.includes("post-construction")) {
    return "Post Construction Cleaning";
  }
  if (lowerPath.includes("carpet")) {
    return "Carpet Cleaning";
  }
  if (lowerPath.includes("industrial")) {
    return "Industrial Cleaning";
  }
  if (lowerPath.includes("residential")) {
    return "Residential Cleaning";
  }
  if (lowerPath.includes("commercial")) {
    return "Commercial Cleaning";
  }
  
  return null;
}

export function saveSelectedService(service: MainService): void {
  try {
    localStorage.setItem(STORAGE_KEY, service);
  } catch (e) {
    console.warn("Could not save selected service to localStorage");
  }
}

export function getSelectedService(): MainService | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && mainServices.includes(stored as MainService)) {
      return stored as MainService;
    }
  } catch (e) {
    console.warn("Could not read selected service from localStorage");
  }
  return null;
}

export function clearSelectedService(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn("Could not clear selected service from localStorage");
  }
}
