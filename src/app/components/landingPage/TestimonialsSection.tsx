"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            name: "Sarah J.",
            role: "Marketing Specialist",
            company: "TechStart",
            content: "I was spending 4+ hours daily applying for jobs and emotionally drained with rejections. Signing up for Applyish gave me my life back! I got 3 interviews in the first month and landed my dream job.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
            location: "San Francisco, CA"
        },
        {
            name: "Sam Rodriguez",
            role: "Software Engineer",
            company: "DataCorp",
            content: "The quality of applications was impressive. They tailored my resume for each application and I could see the difference. I landed my dream job after just 3 weeks of using their service.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
            location: "Austin, TX"
        },
        {
            name: "Anna K.",
            role: "Data Analyst",
            company: "FinanceFlow",
            content: "As a career changer, I was struggling to juggle my full-time job and find opportunities. Tired of missing out, I signed up for Applyish and they got 4 interviews lined up within two weeks!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
            location: "New York, NY"
        },
        {
            name: "Mike L.",
            role: "Customer Support",
            company: "HelpDeskPro",
            content: "I used to feel lost looking for jobs. Applyish made it easy. They helped me find jobs that fit me. Now I have a job I really like and my family is proud.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop&crop=face",
            location: "Chicago, IL"
        },
        {
            name: "Emily T.",
            role: "Graphic Designer",
            company: "Artify",
            content: "Before Applyish, I was scared I would never get a job. But they helped me every step. I got interviews and now I work with a great team. I am so happy!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&crop=face",
            location: "Seattle, WA"
        },
        {
            name: "David P.",
            role: "Sales Associate",
            company: "ShopSmart",
            content: "I didn’t know how to write a good resume. Applyish fixed it for me and sent out my applications. I got a call for an interview in just a few days. Thank you so much!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop&crop=face",
            location: "Dallas, TX"
        },
        {
            name: "Jasmine W.",
            role: "Teacher",
            company: "Bright Minds School",
            content: "Looking for a job was hard and made me sad. Applyish helped me feel better and find a job where I can help kids. I am very thankful for their help.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
            location: "Boston, MA"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-32 bg-white text-black overflow-hidden relative">
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Success Stories
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Real results from real job seekers who transformed their careers with us
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className={`absolute inset-0 bg-white border border-gray-200 shadow transition-all duration-700 ease-in-out transform
                                    ${index === currentTestimonial
                                        ? 'translate-x-0 opacity-100 scale-100 z-10'
                                        : index < currentTestimonial
                                            ? '-translate-x-8 opacity-0 scale-95 z-0'
                                            : 'translate-x-8 opacity-0 scale-95 z-0'}`}
                                style={{ pointerEvents: index === currentTestimonial ? 'auto' : 'none' }}
                            >
                                <CardContent className="p-12 lg:p-16 text-center h-full flex flex-col justify-center">
                                    <Quote className="w-12 h-12 text-black mx-auto mb-8 opacity-10" />
                                    <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-10 text-black font-light italic">
                                        {`"${testimonial.content}"`}
                                    </blockquote>
                                    <div className="flex items-center justify-center space-x-6">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
                                        <div className="text-left">
                                            <div className="font-bold text-xl text-black">{testimonial.name}</div>
                                            <div className="text-gray-700 text-lg">{testimonial.role}</div>
                                            <div className="text-gray-400">{testimonial.company} • {testimonial.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-8 space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-black fill-black/80 opacity-60" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Navigation controls */}
                    <div className="flex justify-between items-center mt-10">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={prevTestimonial}
                            className="border-gray-300 text-white hover:bg-gray-100 transition hover:text-black"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        {/* Navigation dots */}
                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300
                                        ${index === currentTestimonial
                                            ? 'bg-black scale-125'
                                            : 'bg-gray-300 hover:bg-black/30'}`} />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={nextTestimonial}
                            className="border-gray-300 text-white hover:bg-gray-100 transition hover:text-black"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
