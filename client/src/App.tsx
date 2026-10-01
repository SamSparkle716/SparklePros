import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import EntryGate from "@/pages/EntryGate";
import Commercial from "@/pages/Home";
import ResidentialHome from "@/pages/ResidentialHome";
import RoutineCommercialCleaning from "@/pages/RoutineCommercialCleaning";
import CommercialCarpetCleaning from "@/pages/CommercialCarpetCleaning";
import CommercialPowerWashing from "@/pages/CommercialPowerWashing";
import PostConstructionCleaning from "@/pages/PostConstructionCleaning";
import RoutineResidentialCleaning from "@/pages/residential/RoutineResidentialCleaning";
import DeepCleaning from "@/pages/residential/DeepCleaning";
import MoveInMoveOut from "@/pages/residential/MoveInMoveOut";
import ResidentialCarpetCleaning from "@/pages/residential/ResidentialCarpetCleaning";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={EntryGate} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/commercial/services/routine-cleaning" component={RoutineCommercialCleaning} />
      <Route path="/commercial/services/carpet-cleaning" component={CommercialCarpetCleaning} />
      <Route path="/commercial/services/power-wash" component={CommercialPowerWashing} />
      <Route path="/commercial/services/post-construction" component={PostConstructionCleaning} />
      <Route path="/contact" component={Contact} />
      <Route path="/residential" component={ResidentialHome} />
      <Route path="/residential/services/routine-cleaning" component={RoutineResidentialCleaning} />
      <Route path="/residential/services/deep-cleaning" component={DeepCleaning} />
      <Route path="/residential/services/move-in-move-out" component={MoveInMoveOut} />
      <Route path="/residential/services/carpet-cleaning" component={ResidentialCarpetCleaning} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
