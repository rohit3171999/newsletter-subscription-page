import React from "react";

export default function App() {
    return (
        <div className="font-sans m-0 p-0 leading-relaxed bg-white text-[#222]">
            {/* Hero Section */}
            <section className="text-center py-16 px-5 bg-[#f0f8ff]">
                <h1 className="text-4xl md:text-5xl mb-3 font-bold">
                    Get Smarter Every Week
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Join thousands of readers receiving weekly insights on tech and
                    productivity.
                </p>
                <form className="flex justify-center gap-3 flex-wrap max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 min-w-[250px] px-4 py-3 rounded-md border border-gray-300 text-base"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 text-base rounded-md cursor-pointer hover:bg-blue-700"
                    >
                        Subscribe
                    </button>
                </form>
            </section>

            {/* Value Proposition */}
            <section className="text-center py-12 px-5">
                <h2 className="text-2xl mb-4 font-semibold">Why Subscribe?</h2>
                <ul className="list-none p-0 m-0 text-lg leading-8">
                    <li>📌 Curated content from top sources</li>
                    <li>💡 Actionable insights to boost productivity</li>
                    <li>🎉 Free forever, unsubscribe anytime</li>
                </ul>
            </section>

            {/* Privacy Note */}
            <section className="text-center py-8 px-5">
                <p className="text-sm text-gray-600 mt-2">
                    🔒 We respect your privacy. No spam, unsubscribe anytime.
                </p>
            </section>

            {/* Footer */}
            <footer className="text-center py-5 bg-[#222] text-white text-sm">
                <p>
                    © 2025 Insight Weekly |{" "}
                    <a href="#" className="text-white no-underline hover:underline mx-1">
                        About
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline mx-1">
                        Contact
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline mx-1">
                        Privacy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline mx-1">
                        Terms
                    </a>
                </p>
            </footer>
        </div>
    );
}
