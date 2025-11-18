export default function About() {
  return (
    <div
      style={{
        maxWidth: "750px",
        margin: "60px auto",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
        lineHeight: "1.7",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "10px",
          color: "#e62384ff",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        About WanderLuxe
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#444",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Your journey begins with style, comfort, and a little bit of magic !
      </p>

      <div
        style={{
          background: "#fff7f3",
          padding: "22px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "16px", color: "#333" }}>
          WanderLuxe is a modern and aesthetic travel planning platform built to
          help you:
        </p>

        <ul
          style={{
            marginTop: "12px",
            color: "#333",
            fontSize: "15px",
            paddingLeft: "20px",
            lineHeight: "1.6",
          }}
        >
          <li> Explore curated destinations</li>
          <li> Compare customized travel packages</li>
          <li> Book trips quickly and smoothly</li>
          <li> Discover beaches, mountains, islands & cultural gems</li>
        </ul>
      </div>

      <p
        style={{
          fontSize: "15px",
          color: "#444",
          textAlign: "center",
        }}
      >
        Designed & developed with love by{" "}
        <span style={{ color: "#ee3189ff", fontWeight: "600" }}>Amirtha Varshini S</span> —  
        blending clean UI, smooth navigation and a soft minimal vibe that makes
        travel browsing actually fun 
      </p>
    </div>
  );
}
