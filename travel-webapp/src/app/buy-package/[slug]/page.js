// src/app/travel-package/buy/[slug]/page.js
import { fetchTravelPackagesBySlug } from "@/libs/HomePageApi/fetchTravelPackages";
import styles from "./page.module.css"; // Import CSS for styling
import BuyForm from "@/components/BuyTravelPackage/BuyTravelPackage";

const BuyTravelPackage = async ({ params }) => {
  const { slug } = params;
  const travelPackageDetails = await fetchTravelPackagesBySlug(slug);
  
  if (!travelPackageDetails || !travelPackageDetails?.[0]?.id) {
    return <div className={styles.error}>Travel package not found</div>;
  }

  const travelPackage = travelPackageDetails[0].attributes;

  return (
    <BuyForm travelPackage={travelPackage} travelPackageId={travelPackageDetails?.[0]?.id} />
  );
};

export default BuyTravelPackage;