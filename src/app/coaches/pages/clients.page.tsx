import React, { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { Menu, X, Upload, Plus, Users, Settings, Home, Activity, Calendar, TrendingUp, ChevronDown, ChevronUp, Copy, ExternalLink, Loader2, CheckCircle, Clock, BarChart3, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartData = {
    day: string;
    applications: number;
};

type ClientStatus = 'creating' | 'ready' | 'active';

type Client = {
    id: number;
    name: string;
    email: string;
    linkedin?: string;
    notes?: string;
    status: ClientStatus;
    instanceUrl: string | null;
    addedAt: string;
    chartData: ChartData[];
    totalJobs: number;
    weekJobs: number;
    avgJobs: number;
};

type ClientCardProps = {
    client: Client;
    onCopyUrl: (url: string) => void;
    onOpenInstance: (url: string) => void;
    compact?: boolean;
};

function ClientCard({ client, onCopyUrl, onOpenInstance, compact = false }: ClientCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (client.instanceUrl) {
            onCopyUrl(client.instanceUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const getStatusBadge = () => {
        switch (client.status) {
            case 'creating':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Creating
                    </span>
                );
            case 'ready':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        <CheckCircle className="w-3 h-3" />
                        Ready
                    </span>
                );
            case 'active':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        <Activity className="w-3 h-3" />
                        Active
                    </span>
                );
            default:
                return null;
        }
    };

    if (compact) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {client.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{client.name}</h4>
                        <p className="text-xs text-gray-600 truncate">{client.email}</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-between">
                    {getStatusBadge()}
                    {client.status === 'active' && (
                        <span className="text-xs text-gray-600 font-medium">
                            {client.totalJobs} jobs
                        </span>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {client.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                        <p className="text-sm text-gray-600">{client.email}</p>
                    </div>
                    {getStatusBadge()}
                </div>

                <div className="flex gap-3">
                    {client.instanceUrl ? (
                        <>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                            >
                                {copied ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Copy URL
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => onOpenInstance(client.instanceUrl!)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Open
                            </button>
                        </>
                    ) : (
                        <div className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium text-center">
                            <Clock className="w-4 h-4 mx-auto mb-1" />
                            Preparing...
                        </div>
                    )}
                </div>

                {client.status === 'active' && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mt-4 transition-colors"
                    >
                        {expanded ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Hide Details
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                View Activity Details
                            </>
                        )}
                    </button>
                )}
            </div>

            {expanded && client.status === 'active' && (
                <div className="border-t border-gray-200 bg-gray-50 p-5 animate-in slide-in-from-top duration-300">
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-xs text-gray-600 font-medium mb-1">Total Applications</p>
                                <p className="text-2xl font-bold text-gray-900">{client.totalJobs}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-xs text-gray-600 font-medium mb-1">This Week</p>
                                <p className="text-2xl font-bold text-blue-600">{client.weekJobs}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-xs text-gray-600 font-medium mb-1">Avg per Day</p>
                                <p className="text-2xl font-bold text-green-600">{client.avgJobs}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Job Applications (Last 7 Days)</h4>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={client.chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis 
                                        dataKey="day" 
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        stroke="#e5e7eb"
                                    />
                                    <YAxis 
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        stroke="#e5e7eb"
                                    />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#fff', 
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            fontSize: '12px'
                                        }}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="applications" 
                                        stroke="#3b82f6" 
                                        strokeWidth={2}
                                        dot={{ fill: '#3b82f6', r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {client.linkedin && (
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-xs text-gray-600 font-medium mb-2">LinkedIn Profile</p>
                                <a 
                                    href={client.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline flex items-center gap-1 break-all"
                                >
                                    {client.linkedin}
                                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                </a>
                            </div>
                        )}
                        
                        {client.notes && (
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <p className="text-xs text-gray-600 font-medium mb-2">Notes</p>
                                <p className="text-sm text-gray-700">{client.notes}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// Sample data generator
const generateChartData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
        day,
        applications: Math.floor(Math.random() * 15) + 3
    }));
};

const generateSampleClients = (): Client[] => {
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

function ClientsManagement() {
    const [activeTab, setActiveTab] = useState('manual');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [clients, setClients] = useState<Client[]>(generateSampleClients());
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        notes: ''
    });

    const [csvFile, setCsvFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const createInstance = (clientId: number) => {
        setTimeout(() => {
            setClients(prev => prev.map(c => 
                c.id === clientId 
                    ? { ...c, status: 'ready', instanceUrl: `https://instance-${clientId}.example.com` }
                    : c
            ));
            showNotification('Instance ready! Client can now login.');
        }, 3000);
    };

    const showNotification = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email) {
            showNotification('Please fill in name and email');
            return;
        }

        const chartData = generateChartData();
        const totalJobs = chartData.reduce((sum, d) => sum + d.applications, 0);
        
        const newClient: Client = {
            id: Date.now(),
            ...formData,
            status: 'creating',
            instanceUrl: null,
            addedAt: new Date().toISOString(),
            chartData,
            totalJobs,
            weekJobs: chartData.slice(-7).reduce((sum, d) => sum + d.applications, 0),
            avgJobs: Math.round(totalJobs / 7)
        };

        setClients([newClient, ...clients]);
        setFormData({ name: '', email: '', linkedin: '', notes: '' });
        showNotification('Client added! Creating instance...');
        createInstance(newClient.id);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'text/csv') {
            setCsvFile(file);
        } else {
            showNotification('Please upload a valid CSV file');
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type === 'text/csv') {
            setCsvFile(file);
        }
    };

    const handleCsvUpload = () => {
        if (!csvFile) {
            showNotification('Please select a CSV file first');
            return;
        }
        showNotification(`Processing ${csvFile.name}...`);
        
        setTimeout(() => {
            const mockClients = [
                { name: 'Alice Johnson', email: 'alice@example.com', linkedin: '', notes: 'Imported from CSV' },
                { name: 'Bob Smith', email: 'bob@example.com', linkedin: '', notes: 'Imported from CSV' },
            ];
            
            mockClients.forEach((client, idx) => {
                setTimeout(() => {
                    const chartData = generateChartData();
                    const totalJobs = chartData.reduce((sum, d) => sum + d.applications, 0);
                    
                    const newClient: Client = {
                        id: Date.now() + idx,
                        ...client,
                        status: 'creating',
                        instanceUrl: null,
                        addedAt: new Date().toISOString(),
                        chartData,
                        totalJobs,
                        weekJobs: chartData.slice(-7).reduce((sum, d) => sum + d.applications, 0),
                        avgJobs: Math.round(totalJobs / 7)
                    };
                    
                    setClients(prev => [newClient, ...prev]);
                    createInstance(newClient.id);
                }, idx * 500);
            });
            
            showNotification('CSV imported successfully!');
            setCsvFile(null);
        }, 1000);
    };

    const handleCopyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
    };

    const handleOpenInstance = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
            {showToast && (
                <div className="fixed top-6 right-6 z-50 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top duration-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="font-medium">{toastMessage}</p>
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Client Management</h2>
                <p className="text-gray-600 mt-1">Add clients and manage their LinkedIn automation instances</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm mb-8">
                <div className="flex border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors relative ${
                            activeTab === 'manual'
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Plus className="w-5 h-5" />
                        Add Manually
                        {activeTab === 'manual' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('csv')}
                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors relative ${
                            activeTab === 'csv'
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Upload className="w-5 h-5" />
                        Upload CSV
                        {activeTab === 'csv' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                        )}
                    </button>
                </div>

                <div className="p-6">
                    {activeTab === 'manual' ? (
                        <div className="max-w-2xl space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Client Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    LinkedIn Profile (Optional)
                                </label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="https://linkedin.com/in/johndoe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Notes (Optional)
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Additional notes about the client..."
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
                            >
                                <Plus className="w-5 h-5" />
                                Add Client & Create Instance
                            </button>
                        </div>
                    ) : (
                        <div className="max-w-2xl">
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                                    isDragging
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}
                            >
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-700 font-medium mb-2">
                                    Drop your CSV file here, or click to browse
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    CSV format: name, email, linkedin (optional), notes (optional)
                                </p>
                                <input
                                    type="file"
                                    accept=".csv"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="csv-upload"
                                />
                                <label
                                    htmlFor="csv-upload"
                                    className="inline-block px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 cursor-pointer transition"
                                >
                                    Choose File
                                </label>
                            </div>

                            {csvFile && (
                                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 font-medium mb-3">
                                        Selected: {csvFile.name}
                                    </p>
                                    <button
                                        onClick={handleCsvUpload}
                                        className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                                    >
                                        Import & Create Instances
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                        All Clients ({clients.length})
                    </h3>
                </div>

                {clients.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No clients yet</h3>
                        <p className="text-gray-600">Add your first client to get started</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {clients.map((client) => (
                            <ClientCard
                                key={client.id}
                                client={client}
                                onCopyUrl={handleCopyUrl}
                                onOpenInstance={handleOpenInstance}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ClientsManagement;