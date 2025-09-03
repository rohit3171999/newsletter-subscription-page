import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="newsletter-container">
            {/* Header */}
            <header className="header">
                <h1 className="logo">📰 Weekly Digest</h1>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <h2>Stay Updated With The Latest News</h2>
                <p>
                    Subscribe to our free weekly newsletter and get the best articles,
                    tips, and updates delivered straight to your inbox.
                </p>
            </section>

            {/* Subscription Form */}
            <section className="subscribe">
                <form className="subscribe-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email Address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Weekly Digest. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
