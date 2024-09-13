import Image from "next/image";
import styles from "../../app/travel-package/[slug]/page.module.css"; // Import the CSS module

export const TravelDetails = ({pkg}) => {
    const imageUrl=process.env.NEXT_PUBLIC_IMAGE_URL;
   return( 
    <div className={styles.container}>
        <h1 className={styles.title}>{pkg.title}</h1>
        <Image
            src={`${imageUrl}${pkg.image.data[0].attributes.url}`}
            alt={pkg.title}
            className={styles.image}
            width={300}
            height={400}
        />
        <div className={styles.details}>
            <p><strong>Destination:</strong> {pkg.destination}</p>
            <p><strong>Price:</strong> ${pkg.price}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Description:</strong></p>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: pkg.description }} />
            <p><strong>Departure Date:</strong> {new Date(pkg.departure_date).toLocaleDateString()}</p>
        </div>
    </div>
)}