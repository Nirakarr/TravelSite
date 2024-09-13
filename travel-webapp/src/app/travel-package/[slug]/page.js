// src/app/travel-package/[slug]/page.js
import { fetchTravelPackagesBySlug } from "@/libs/HomePageApi/fetchTravelPackages";
import { TravelDetails } from "@/components/TravelDetails/TravelDetails";

const TravelPackageDetails = async ({ params }) => {
    const { slug } = params;
    const travelPackageDetails = await fetchTravelPackagesBySlug(slug);
    if (!travelPackageDetails || !travelPackageDetails?.[0]?.id) {
        return <div className={styles.error}>Travel package not found</div>;
    }

    const pkg = travelPackageDetails[0].attributes;

    return (
        <TravelDetails pkg={pkg} />
    );
};

export default TravelPackageDetails;
