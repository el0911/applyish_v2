"use client";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            name: "Sarah J.",
            role: "Marketing Specialist",
            content: "I was spending 4+ hours daily applying for jobs and emotionally drained with rejections. Signing up for Applyish gave me my life back! I got 3 interviews in the first month and landed my dream job.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
        },
        {
            name: "Sam Rodriguez",
            role: "Software Engineer",
            content: "The quality of applications was impressive. They tailored my resume for each application and I could see the difference. I landed my dream job after just 3 weeks of using their service.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
        },
        {
            name: "Anna K.",
            role: "Data Analyst",
            content: "As a career changer, I was struggling to juggle my full-time job and find opportunities. Tired of missing out, I signed up for Applyish and they got 4 interviews lined up within two weeks!",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Real stories from people who have landed their dream jobs with Applyish.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-8">
                            <Quote className="w-8 h-8 text-gray-300 mb-4" />
                            <p className="text-gray-700 mb-6">{testimonial.content}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
