import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { IClient } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Sample data generator
export const generateChartData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
        day,
        applications: Math.floor(Math.random() * 15) + 3
    }));
};



export const generateSampleClients = (): IClient[] => {
    const chartData1 = generateChartData();
    const chartData2 = generateChartData();
    const chartData3 = generateChartData();
    const chartData4 = generateChartData();

    return [
        {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah.johnson@example.com',
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            notes: 'Looking for senior product manager roles in tech',
            status: 'ready',
            instanceUrl: 'https://instance-1.example.com',
            addedAt: '2025-10-01T10:00:00Z',
            chartData: chartData1,
            totalJobs: chartData1.reduce((sum, d) => sum + d.applications, 0),
            weekJobs: chartData1.slice(-7).reduce((sum, d) => sum + d.applications, 0),
            avgJobs: Math.round(chartData1.reduce((sum, d) => sum + d.applications, 0) / 7)
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'michael.chen@example.com',
            linkedin: 'https://linkedin.com/in/michaelchen',
            notes: 'Software engineer transitioning to data science',
            status: 'ready',
            instanceUrl: 'https://instance-2.example.com',
            addedAt: '2025-10-02T14:30:00Z',
            chartData: chartData2,
            totalJobs: chartData2.reduce((sum, d) => sum + d.applications, 0),
            weekJobs: chartData2.slice(-7).reduce((sum, d) => sum + d.applications, 0),
            avgJobs: Math.round(chartData2.reduce((sum, d) => sum + d.applications, 0) / 7)
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            email: 'emily.rodriguez@example.com',
            linkedin: 'https://linkedin.com/in/emilyrodriguez',
            notes: 'Marketing director seeking remote opportunities',
            status: 'ready',
            instanceUrl: 'https://instance-3.example.com',
            addedAt: '2025-10-05T09:15:00Z',
            chartData: chartData3,
            totalJobs: chartData3.reduce((sum, d) => sum + d.applications, 0),
            weekJobs: chartData3.slice(-7).reduce((sum, d) => sum + d.applications, 0),
            avgJobs: Math.round(chartData3.reduce((sum, d) => sum + d.applications, 0) / 7)
        },
        {
            id: 4,
            name: 'James Wilson',
            email: 'james.wilson@example.com',
            linkedin: 'https://linkedin.com/in/jameswilson',
            notes: 'Sales executive targeting SaaS companies',
            status: 'processing',
            instanceUrl: null,
            addedAt: '2025-10-07T11:45:00Z',
            chartData: chartData4,
            totalJobs: 0,
            weekJobs: 0,
            avgJobs: 0
        },
        {
            id: 5,
            name: 'Priya Patel',
            email: 'priya.patel@example.com',
            linkedin: 'https://linkedin.com/in/priyapatel',
            notes: 'UX designer with 5 years experience',
            status: 'ready',
            instanceUrl: 'https://instance-5.example.com',
            addedAt: '2025-09-28T16:20:00Z',
            chartData: generateChartData(),
            totalJobs: 89,
            weekJobs: 42,
            avgJobs: 13
        },
        {
            id: 6,
            name: 'David Kim',
            email: 'david.kim@example.com',
            linkedin: '',
            notes: 'Recent MBA graduate, consulting focus',
            status: 'ready',
            instanceUrl: 'https://instance-6.example.com',
            addedAt: '2025-10-06T13:00:00Z',
            chartData: generateChartData(),
            totalJobs: 0,
            weekJobs: 0,
            avgJobs: 0
        }
    ];
};
