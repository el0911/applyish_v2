import { Users, Activity, TrendingUp, BarChart3, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import React from 'react';

// Define the Client type
type Client = {
  id: string | number;
  name: string;
  status: 'active' | 'ready' | 'creating' | string;
  totalJobs: number;
  weekJobs: number;
  [key: string]: any;
};

type DashboardOverviewProps = {
  clients: Client[];
  setActiveNav: (nav: string) => void;
};

// Dummy ClientCard component for demonstration; replace with your actual import if available
const ClientCard: React.FC<{
  client: Client;
  onCopyUrl: (url: string) => void;
  onOpenInstance: (url: string) => void;
  compact?: boolean;
}> = () => null;

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ clients, setActiveNav }) => {
  const activeClients = clients.filter((c: Client) => c.status === 'active');
  const readyClients = clients.filter((c: Client) => c.status === 'ready');
  const creatingClients = clients.filter((c: Client) => c.status === 'creating');
  
  const totalApplications = activeClients.reduce((sum: number, c: Client) => sum + c.totalJobs, 0);
  const avgPerClient = activeClients.length > 0 ? Math.round(totalApplications / activeClients.length) : 0;

  const stats = [
    { label: 'Total Clients', value: clients.length.toString(), icon: Users, color: 'bg-blue-500' },
    { label: 'Active Instances', value: activeClients.length.toString(), icon: Activity, color: 'bg-green-500' },
    { label: 'Total Applications', value: totalApplications.toString(), icon: BarChart3, color: 'bg-purple-500' },
    { label: 'Avg per Client', value: avgPerClient.toString(), icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  const handleOpenInstance = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Clients Preview */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Active Clients</h3>
          <button
            onClick={() => setActiveNav('clients')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {activeClients.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Activity className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p>No active clients yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeClients.slice(0, 3).map((client: Client) => (
              <ClientCard
                key={client.id}
                client={client}
                onCopyUrl={handleCopyUrl}
                onOpenInstance={handleOpenInstance}
                compact={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Status Overview */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Instance Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Ready</span>
              </div>
              <span className="text-lg font-bold text-green-600">{readyClients.length}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Active</span>
              </div>
              <span className="text-lg font-bold text-blue-600">{activeClients.length}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-gray-900">Creating</span>
              </div>
              <span className="text-lg font-bold text-yellow-600">{creatingClients.length}</span>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        {activeClients.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Performers This Week</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeClients
                .sort((a: Client, b: Client) => b.weekJobs - a.weekJobs)
                .slice(0, 3)
                .map((client: Client) => (
                  <div key={client.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {client.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{client.name}</p>
                        <p className="text-xs text-gray-600">This week</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Applications</span>
                      <span className="text-2xl font-bold text-blue-600">{client.weekJobs}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;