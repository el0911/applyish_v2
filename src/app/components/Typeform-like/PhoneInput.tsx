import { useState, useEffect, useRef } from 'react';
import countriesData from '../../lib/countries.json';
import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js';
import { PhoneInputQuestion } from './v3/questionTypes';
import Image from 'next/image';

interface PhoneInputProps {
  question: PhoneInputQuestion;
  onNext: (answer: { [key: string]: string }) => void;
  answers: { [key: string]: string | number | File | Date | boolean | string[] | undefined | null };
}

interface Country {
  name: {
    common: string;
  };
  callingCode: string[];
  cca2: string;
}

// Popular countries to show at the top
const POPULAR_COUNTRIES = ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IN', 'CN', 'JP', 'BR'];

export default function PhoneInput({ question, onNext, answers }: PhoneInputProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const typedCountries = countriesData as Country[];
    setCountries(typedCountries);
    if (typedCountries.length > 0) {
      const previousAnswer = answers[question.id];
      if (previousAnswer) {
        const phone = parsePhoneNumberFromString(previousAnswer as string);
        if (phone) {
          const country = typedCountries.find(c => c.cca2 === phone.country);
          setSelectedCountry(country);
          setPhoneNumber(phone.nationalNumber);
        } else {
          setSelectedCountry(typedCountries[0]);
        }
      } else {
        setSelectedCountry(typedCountries[0]);
      }
    }
  }, [answers, question.id]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCountry?.callingCode?.[0]) {
      alert('Please select a valid country.');
      return;
    }
    
    const fullPhoneNumber = `${selectedCountry.callingCode[0]}${phoneNumber}`;
    const phone = parsePhoneNumberFromString(fullPhoneNumber, selectedCountry.cca2 as CountryCode);

    if (!phone || !phone.isValid()) {
      alert('Please enter a valid phone number.');
      return;
    }

    onNext({ [question.id]: phone.formatInternational() });
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  // Filter countries based on search
  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (country.callingCode?.[0] && country.callingCode[0].includes(searchQuery))
  );

  // Sort: popular countries first, then alphabetically
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    const aIsPopular = POPULAR_COUNTRIES.includes(a.cca2);
    const bIsPopular = POPULAR_COUNTRIES.includes(b.cca2);
    
    if (aIsPopular && !bIsPopular) return -1;
    if (!aIsPopular && bIsPopular) return 1;
    
    return a.name.common.localeCompare(b.name.common);
  });

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {question.title}
        </label>
        
        <div className="flex items-center border-2 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600">
          {/* Country Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-l-lg transition-colors focus:outline-none"
            >
              {selectedCountry && selectedCountry.callingCode?.[0] && (
                <>
                  <Image
                    src={`https://flagcdn.com/w40/${selectedCountry.cca2.toLowerCase()}.png`}
                    alt={`${selectedCountry.name.common} flag`}
                    width={24}
                    height={16}
                    className="rounded"
                  />
                  <span className="text-sm font-medium dark:text-white">
                    {selectedCountry.callingCode[0]}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform dark:text-white ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden">
                {/* Search Input */}
                <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search countries..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Countries List */}
                <div className="overflow-y-auto max-h-80">
                  {sortedCountries.length > 0 ? (
                    sortedCountries
                      .filter(country => country.callingCode?.[0]) // Only show countries with valid calling codes
                      .map((country) => (
                        <button
                          key={country.cca2}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                        >
                          <Image
                            src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
                            alt={`${country.name.common} flag`}
                            width={24}
                            height={16}
                            className="rounded"
                          />
                          <span className="flex-1 text-sm dark:text-white">
                            {country.name.common}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {country.callingCode[0]}
                          </span>
                        </button>
                      ))
                  ) : (
                    <div className="px-3 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      No countries found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-l border-gray-300 dark:border-gray-600 h-8"></div>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            className="flex-1 px-4 py-2 bg-transparent focus:outline-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs mx-auto block"
        >
          Next
        </button>
      </form>
    </div>
  );
}