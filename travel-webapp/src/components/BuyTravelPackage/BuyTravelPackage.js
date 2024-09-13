"use client";
import { bookTicket, updateAvailableSlots } from "@/libs/BuyTravelPackageApi/buyTravelApi";
import { useState } from "react";
import styles from "../../app/buy-package/[slug]/page.module.css"; // Import CSS for styling

const BuyForm = ({ travelPackage, travelPackageId }) => {
    const [formData, setFormData] = useState({
        userName: "", // Matching CMS field
        mobileNumber: "", // Matching CMS field
        address: "",
        numberOfTickets: 1, // Matching CMS field
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.numberOfTickets > travelPackage.available_slots) {
            setError("Not enough available slots.");
            return;
        }

        try {
            // Book the ticket
            await bookTicket({
                ...formData,
                travel_packages: travelPackageId, // Using the correct relation field from CMS
            });

            // Update the available slots
            const newAvailableSlots = travelPackage.available_slots - formData.numberOfTickets;
            await updateAvailableSlots(travelPackageId, newAvailableSlots);

            // Set success state
            setSuccess(true);
            setError("");

            // Reload the page after 2 seconds
            setTimeout(() => {
                window.location.reload(); // This will reload the page
            }, 2000); // 2000ms = 2 seconds

        } catch (error) {
            console.error("Booking error:", error);
            setError("Failed to book the package. Please try again.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Book Travel Package: {travelPackage.title}</h1>

            <div className={styles.details}>
                <p><strong>Destination:</strong> {travelPackage.destination}</p>
                <p><strong>Price:</strong> ${travelPackage.price}</p>
                <p><strong>Available Slots:</strong> {travelPackage.available_slots}</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName" // Matching CMS field
                        value={formData.userName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber" // Matching CMS field
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="numberOfTickets">Number of Tickets</label>
                    <input
                        type="number"
                        id="numberOfTickets"
                        name="numberOfTickets" // Matching CMS field
                        value={formData.numberOfTickets}
                        onChange={handleInputChange}
                        min="1"
                        max={travelPackage.available_slots}
                        required
                    />
                </div>

                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>Booking successful!</p>}

                <button type="submit" className={styles.submitButton}>
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BuyForm;