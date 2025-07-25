import React from 'react';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <div className="prose lg:prose-xl">
                    <p className="mb-4">
                        Welcome to our blog platform where we share knowledge, insights, and stories that matter.
                    </p>
                    <p className="mb-4">
                        Our mission is to provide valuable content that educates, inspires, and connects with our readers.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
                    <p>
                        We are a dedicated team of writers, editors, and content creators passionate about delivering
                        high-quality articles and engaging content to our audience.
                    </p>
                </div>
            </section>
        </main>
    );
} 