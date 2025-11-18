export default function Contact() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "10px",
          color: "#e24a85ff",
          fontWeight: "700",
        }}
      >
        Contact WanderLuxe
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "25px",
        }}
      >
        We’re here to help you plan your dream vacation .
        Reach out anytime!
      </p>

      <div
        style={{
          background: "#fff7f3",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "18px", margin: "5px 0", color: "#333" }}>
          <strong>Email:</strong> support@WanderLuxe.com
        </p>
        <p style={{ fontSize: "18px", margin: "5px 0", color: "#333" }}>
           <strong>Phone:</strong> +91 98765 43210
        </p>
      </div>

      <p
        style={{
          fontSize: "15px",
          color: "#444",
          lineHeight: "1.7",
        }}
      >
        If you have any questions or need help with bookings,  
        feel free to reach out.  
        We’re happy to help you plan your next adventure with WanderLuxe !!
      </p>
    </div>
  );
}
