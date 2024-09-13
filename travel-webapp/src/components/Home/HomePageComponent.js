"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchTravelPackages, fetchTravelPackagesByFilters } from "@/libs/HomePageApi/fetchTravelPackages";
import styles from "./HomePageComponent.module.css"; // Import the CSS module

export const HomePageComponent = ({ initialTravelPackages }) => {
  const [travelPackages, setTravelPackages] = useState(initialTravelPackages);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  // Function to fetch filtered travel packages
  const fetchFilteredPackages = async () => {
    try {
      const data = await fetchTravelPackagesByFilters(destination, departureDate);
      setTravelPackages(data);
    } catch (error) {
      console.error("Error fetching filtered packages:", error);
    }
  };

  // Handle form submission to apply filters
  const handleFilter = async (e) => {
    e.preventDefault();
    await fetchFilteredPackages();
  };

  // Handle clearing of filters
  const handleClear = async () => {
    setDestination("");
    setDepartureDate("");
    await fetchFilteredPackages(); // Fetch all packages again without filters
  };

  // Fetch initial data on component mount
  useEffect(() => {
    setTravelPackages(initialTravelPackages);
  }, [initialTravelPackages]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Travel Packages</h1>
      
      {/* Filter Form */}
      <form className={styles.filterForm} onSubmit={handleFilter}>
        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Filter</button>
          <button type="button" className={styles.clearButton} onClick={handleClear}>Clear</button>
        </div>
      </form>

      {/* Package List */}
      <ul className={styles.packageList}>
        {travelPackages.map((pkg) => (
          <li key={pkg.id} className={styles.packageItem}>
            <div className={styles.packageCard}>
              <Link href={`/travel-package/${pkg.attributes.slug}`}>
                <Image
                  src={`${baseUrl}${pkg.attributes.image.data[0].attributes.url}`}
                  alt={pkg.attributes.title}
                  className={styles.packageImg}
                  width={500}
                  height={300}
                />
                <div className={styles.packageContent}>
                  <h2 className={styles.packageTitle}>{pkg.attributes.title}</h2>
                  <p>Destination: {pkg.attributes.destination}</p>
                  <p>Price: ${pkg.attributes.price}</p>
                  <p>Duration: {pkg.attributes.duration}</p>
                  <p>Departure Date: {new Date(pkg.attributes.departure_date).toLocaleDateString()}</p>
                  <Link href={`/buy-package/${pkg.attributes.slug}`}>
                    <button className={styles.bookButton}>Book Package</button>
                  </Link>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};