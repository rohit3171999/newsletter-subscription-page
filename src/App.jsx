import React from "react";

export default function App() {
    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Get Smarter Every Week</h1>
                <p style={styles.heroSubtitle}>
                    Join thousands of readers receiving weekly insights on tech and
                    productivity.
                </p>
                <form style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.cta}>
                        Subscribe
                    </button>
                </form>
            </section>

            {/* Value Proposition */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Why Subscribe?</h2>
                <ul style={styles.bullets}>
                    <li>📌 Curated content from top sources</li>
                    <li>💡 Actionable insights to boost productivity</li>
                    <li>🎉 Free forever, unsubscribe anytime</li>
                </ul>
            </section>

            {/* Privacy Note */}
            <section style={styles.section}>
                <p style={styles.privacy}>
                    🔒 We respect your privacy. No spam, unsubscribe anytime.
                </p>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>
                    © 2025 Insight Weekly |{" "}
                    <a href="#" style={styles.footerLink}>
                        About
                    </a>{" "}
                    |{" "}
                    <a href="#" style={styles.footerLink}>
                        Contact
                    </a>{" "}
                    |{" "}
                    <a href="#" style={styles.footerLink}>
                        Privacy
                    </a>{" "}
                    |{" "}
                    <a href="#" style={styles.footerLink}>
                        Terms
                    </a>
                </p>
            </footer>
        </div>
    );
}

const styles = {
    page: {
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        lineHeight: "1.6",
        background: "#fff",
        color: "#222",
    },
    hero: {
        textAlign: "center",
        padding: "60px 20px",
        background: "#f0f8ff",
    },
    heroTitle: {
        fontSize: "2.5rem",
        marginBottom: "10px",
    },
    heroSubtitle: {
        fontSize: "1.2rem",
        marginBottom: "20px",
        color: "#555",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        maxWidth: "500px",
        margin: "0 auto",
    },
    input: {
        flex: "1",
        minWidth: "250px",
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    cta: {
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "6px",
        cursor: "pointer",
    },
    section: {
        textAlign: "center",
        padding: "40px 20px",
    },
    sectionTitle: {
        fontSize: "1.8rem",
        marginBottom: "15px",
    },
    bullets: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontSize: "1.1rem",
        lineHeight: "1.8",
    },
    privacy: {
        fontSize: "0.9rem",
        color: "#555",
        marginTop: "10px",
    },
    footer: {
        textAlign: "center",
        padding: "20px",
        background: "#222",
        color: "#fff",
        fontSize: "0.9rem",
    },
    footerLink: {
        color: "#fff",
        textDecoration: "none",
        margin: "0 5px",
    },
};
