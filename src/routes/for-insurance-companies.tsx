import { createFileRoute } from "@tanstack/react-router";
import ForInsuranceCompanies from "@/pages/business/ForInsuranceCompanies";

export const Route = createFileRoute("/for-insurance-companies")({
  component: ForInsuranceCompanies,
});
