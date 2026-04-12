'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ReferralPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Referral code sent to your email!');
        setIsError(false);
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Referral submission error:', error);
      setMessage('Network error. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center space-y-8"
        >
          <div className="inline-block px-3 py-1 border border-border rounded-full text-sm text-muted-foreground">
            Referral Program
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Get Your <span className="text-indigo-500">Referral Code</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
            Enter your email to receive your unique referral code and share it with friends.
          </p>

          <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base bg-indigo-500 text-white hover:bg-indigo-400 transform hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Code'}
              {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>

            {message && (
              <p className={`mt-2 text-center text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
