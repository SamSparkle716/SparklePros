import { useLocation } from "wouter";
import { getServiceFromPath, saveSelectedService, type MainService } from "@/data/services";

export function useServiceSelection() {
  const [location] = useLocation();

  const handleCtaClick = () => {
    const service = getServiceFromPath(location);
    if (service) {
      saveSelectedService(service);
    }
  };

  return { handleCtaClick };
}

export function createCtaClickHandler(pathname: string): () => void {
  return () => {
    const service = getServiceFromPath(pathname);
    if (service) {
      saveSelectedService(service);
    }
  };
}
