"use client"
import FormComponent from '../components/Typeform-like/v3/FormComponent';
import useSprig from '@/hooks/useSprig'

export default function ApplyPage() {
  useSprig()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <FormComponent />
    </div>
  );
}
