"use client";

import { motion } from "framer-motion";
import { ConfirmationScreenQuestion } from "./questionTypes";
import { useState, useRef } from "react";

interface ConfirmationScreenProps {
  answers: { [key: string]: unknown };
  question: ConfirmationScreenQuestion;
  onNext: () => void;
}

export default function ConfirmationScreen({ answers, question, onNext }: ConfirmationScreenProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setUploadError(null);
      } else {
        setFile(null);
        setUploadError('Please upload a PDF, DOC, or DOCX file.');
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setUploadError(null);

    const hubspotFormData = new FormData();

    // Append all existing answers to the FormData
    for (const key in answers) {
      if (Object.prototype.hasOwnProperty.call(answers, key)) {
        const value = answers[key];
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && !(value instanceof File)) {
            hubspotFormData.append(key, JSON.stringify(value));
          } else {
            hubspotFormData.append(key, String(value));
          }
        }
      }
    }

    // Append the resume file
    hubspotFormData.append('resume', file);

    try {
      const response = await fetch('/api/hubspot-submit', {
        method: 'POST',
        body: hubspotFormData,
      });

      if (response.ok) {
        onNext(); // Advance to the next step (Thank You screen)
      } else {
        const errorData = await response.json();
        setUploadError(errorData.message || 'File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError('An unexpected error occurred during upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleAction = (action: string) => {
    // Handle actions like 'google-calendar', 'outlook-calendar', 'email-upload-link'
    console.log("Action triggered:", action);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4 text-center"
    >
      <div className="text-5xl mb-4">{question.emoji}</div>
      <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{question.title}</h1>
      
      <div className="mt-6 text-lg text-gray-700 dark:text-gray-300">
        <p>{question.confirmationMessage.dateLabel} <strong>{new Date(answers.call_datetime as string).toLocaleString()}</strong></p>
        <p>{question.confirmationMessage.emailLabel} <strong>{answers.email as string}</strong></p>
      </div>

      <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{question.whatYouReceive.title}</h2>
        <ul className="mt-4 space-y-2">
          {question.whatYouReceive.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-700 dark:text-gray-300">{item.replace("{selectedPlan}", answers.selectedPlan as string)}</p>
            </li>
          ))}
        </ul>
      </div>

      {question.nextSteps && (
        <div className="mt-8 text-left">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{question.nextSteps.title}</h2>
          <div className="mt-4 space-y-4">
            {question.nextSteps.items.map((step, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{step.text}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.subtext}</p>
                </div>
                {step.cta === "Upload Resume" && (
                  <div className="flex flex-col items-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      {file ? file.name : step.cta}
                    </label>
                    {file && (
                      <button
                        onClick={handleUpload}
                        disabled={uploading}
                        className="mt-2 bg-green-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-green-600 disabled:opacity-50"
                      >
                        {uploading ? 'Uploading...' : 'Confirm Upload'}
                      </button>
                    )}
                    {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}
                  </div>
                )}
                {step.cta && step.action && step.cta !== "Upload Resume" && (
                  <button onClick={() => handleAction(step.action)} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">
                    {step.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commented out optional calendar buttons */}
      {/* <div className="mt-8">
        {question.optionalButtons.map((button, index) => (
          <button key={index} onClick={() => handleAction(button.action)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg mx-2">
            {button.label}
          </button>
        ))}
      </div> */}

      <p className="mt-8 text-gray-600 dark:text-gray-400">{question.footer}</p>

    </motion.div>
  );
}
