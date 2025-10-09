"use client";
import React, { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Menu, X, Users, Settings, Home } from 'lucide-react';
import DashboardOverview from '../pages/dashboard.page';
import ClientsManagement from '../pages/clients.page';
import SettingsPage from '../pages/Settings.page';
import { IClient } from '@/app/lib/interfaces';

// Layout Component
type DashboardLayoutProps = {
  children: ReactNode;
  activeNav: string;
  setActiveNav: Dispatch<SetStateAction<string>>;
};

function DashboardLayout({ children, activeNav, setActiveNav }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: Home, id: 'dashboard' },
    { name: 'Clients', icon: Users, id: 'clients' },
    { name: 'Settings', icon: Settings, id: 'settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Coach Admin</h1>
          </div>
          
          <nav className="flex-1 px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-1 group ${
                  activeNav === item.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <item.icon className={`w-5 h-5 ${
                  activeNav === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
                JD
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
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
            status: 'active',
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
            status: 'active',
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
            status: 'creating',
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
            status: 'active',
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

 
export default function CoachesDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
    const [clients, setClients] = useState<IClient[]>(generateSampleClients());

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <DashboardOverview clients={clients} setActiveNav={function (nav: string): void {
          throw new Error('Function not implemented.');
        } } />;
      case 'clients':
        return <ClientsManagement  clients={clients} setClients={setClients}/>;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardOverview clients={clients} setActiveNav={function (nav: string): void {
          throw new Error('Function not implemented.');
        } } />;
    }
  };

  return (
    <DashboardLayout activeNav={activeNav} setActiveNav={setActiveNav}>
      {renderContent()}
    </DashboardLayout>
  );
} 