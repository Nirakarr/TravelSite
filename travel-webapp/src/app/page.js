import { HomePageComponent } from "@/components/Home/HomePageComponent";
import { fetchTravelPackages } from "@/libs/HomePageApi/fetchTravelPackages";
const HomePage = async () => {
  const travelPackages = await fetchTravelPackages();
  return (
      <HomePageComponent initialTravelPackages={travelPackages} />
  );
};

export default HomePage;
