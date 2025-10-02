
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CalendarBookingProps {
  onNext: (answer: { [key: string]: string | Date }) => void;
}

export default function CalendarBooking({ onNext }: CalendarBookingProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    onNext({
      full_name: name,
      email: email,
      phone: phone,
      call_datetime: new Date(), // Placeholder
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">HOW WE HELP</p>
        <h1 className="text-2xl font-bold mt-2">Book your onboarding call</h1>
        <p className="mt-2 text-gray-500">Choose a time that works for you</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg" style={{height: 48}}
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg" style={{height: 48}}
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg" style={{height: 48}}
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">I agree to the <a href="/terms" target="_blank" className="underline">Terms of Service</a></label>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
          <p>Calendar Placeholder</p>
        </div>
      </div>
      <button
        onClick={handleBooking}
        className="mt-8 bg-yellow-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 w-full max-w-sm mx-auto block"
        style={{height: 56}}
      >
        Confirm My Booking
      </button>
    </motion.div>
  );
}
