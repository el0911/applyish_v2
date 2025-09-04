import { useState, useEffect } from 'react';
import countriesData from '../../lib/countries.json';
import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js';
import { TextQuestion } from './types';
import Image from 'next/image';

interface PhoneInputProps {
  question: TextQuestion;
  onNext: (answer: { [key: string]: string }) => void;
  answers: { [key: string]: string | File | null };
}

interface Country {
  name: {
    common: string;
  };
  callingCode: string[];
  cca2: string;
}

export default function PhoneInput({ question, onNext, answers }: PhoneInputProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPhoneNumber = `${selectedCountry?.callingCode[0]}${phoneNumber}`;
    const phone = parsePhoneNumberFromString(fullPhoneNumber, selectedCountry?.cca2 as CountryCode);

    if (!phone || !phone.isValid()) {
      alert('Please enter a valid phone number.');
      return;
    }

    onNext({ [question.id]: phone.formatInternational() });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const country = countries.find(c => c.name.common === e.target.value);
      setSelectedCountry(country);
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold mb-4 text-gray-900 dark:text-white">{question.title}</label>
        <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600">
            {selectedCountry && (
                <Image src={`https://flagcdn.com/w40/${selectedCountry.cca2.toLowerCase()}.png`} alt={`${selectedCountry.name.common} flag`} className="w-6 h-4 mr-2" width={24} height={16} />
            )}
          <select
            value={selectedCountry?.name.common}
            onChange={handleCountryChange}
            className="w-48 pl-2 pr-1 py-2 bg-transparent focus:outline-none dark:text-white"
          >
            {countries.map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common} ({country.callingCode[0]})
              </option>
            ))}
          </select>
          <div className="border-l border-gray-300 dark:border-gray-600 h-6"></div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 bg-transparent focus:outline-none dark:text-white"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </form>
    </div>
  );
}




