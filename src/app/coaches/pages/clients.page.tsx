import React, { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { Upload, Plus, Users, Loader2, Clock } from 'lucide-react';
import ClientCard from '@/app/components/dashboard/clientCard';
import { IClient } from '@/app/lib/interfaces';
import { createSingleClient, fetchClientsForCoach } from '@/app/lib/api.service';
// import { generateChartData } from '@/app/lib/utils';




function ClientsManagement(
    props: {
        clients: IClient[];
        setClients: React.Dispatch<React.SetStateAction<IClient[]>>;
    }
) {
    const { clients, setClients } = props;
    const [activeTab, setActiveTab] = useState('manual');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        notes: ''
    });

    const [csvFile, setCsvFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const processingClients = clients.some(client => client.status === 'processing');

        if (!processingClients) {
            return;
        }

        const interval = setInterval(async () => {
            try {
                const { clients: updatedClients } = await fetchClientsForCoach();
                setClients(updatedClients);
            } catch (error) {
                console.error('Failed to fetch updated clients:', error);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [clients, setClients]);


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

    const handleSubmit = async () => {
        if (!formData.name || !formData.email) {
            showNotification('Please fill in name and email');
            return;
        }

        setIsLoading(true);
        try {
            const {newClient} = await createSingleClient({
                name: formData.name,
                email: formData.email,
                linkedin: formData.linkedin,
                notes: formData.notes
            });

            const totalJobs = 0

            const clientWithChart: IClient = {
                ...newClient,
                status: 'processing',
                instanceUrl: null,
                addedAt: new Date().toISOString(),
                chartData : [],
                totalJobs,
                weekJobs: 0,
                avgJobs: Math.round(totalJobs / 7)
            };

            setClients(prev => [clientWithChart, ...prev]);
            setFormData({ name: '', email: '', linkedin: '', notes: '' });
            showNotification("Great news! We're setting up your client's LinkedIn automation. This process usually takes a moment, and their LinkedIn access will be ready to use for the next 4 hours. We'll let you know when it's all set!");


        } catch (error) {
            console.error('Failed to create client:', error);
            showNotification('Failed to add client.');
        } finally {
            setIsLoading(false);
        }
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
        // if (!csvFile) {
        //     showNotification('Please select a CSV file first');
        //     return;
        // }
        // showNotification(`Processing ${csvFile.name}...`);

        // setTimeout(() => {
        //     const mockClients = [
        //         { name: 'Alice Johnson', email: 'alice@example.com', linkedin: '', notes: 'Imported from CSV' },
        //         { name: 'Bob Smith', email: 'bob@example.com', linkedin: '', notes: 'Imported from CSV' },
        //     ];

        //     mockClients.forEach((client, idx) => {
        //         setTimeout(() => {
        //             const chartData = client.chartData
        //             const totalJobs = chartData.reduce((sum, d) => sum + d.count, 0);

        //             const newClient: IClient = {
        //                 id: Date.now() + idx,
        //                 ...client,
        //                 status: 'processing',
        //                 instanceUrl: null,
        //                 addedAt: new Date().toISOString(),
        //                 chartData,
        //                 totalJobs,
        //                 weekJobs: chartData.slice(-7).reduce((sum, d) => sum + d.count, 0),
        //                 avgJobs: Math.round(totalJobs / 7)
        //             };

        //             setClients(prev => [newClient, ...prev]);
        //         }, idx * 500);
        //     });

        //     showNotification("Great news! We're setting up your clients' LinkedIn automation from the CSV file. This process usually takes a moment, and their LinkedIn access will be ready to use for the next 4 hours. We'll let you know when it's all set!");
        //     setCsvFile(null);
        // }, 1000);
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
                <div className="fixed top-6 right-6 z-50 bg-blue-600 text-white px-6 py-4 shadow-lg flex items-center gap-3 animate-in slide-in-from-top duration-300">
                    <Clock className="w-5 h-5 text-white" />
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
                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors relative ${activeTab === 'manual'
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
                    {/* <button
                        onClick={() => setActiveTab('csv')}
                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors relative ${activeTab === 'csv'
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <Upload className="w-5 h-5" />
                        Upload CSV
                        {activeTab === 'csv' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                        )}
                    </button> */}
                </div>

                <div className="p-6">
                    {activeTab === 'manual' ? (
                        <div className="max-w-2xl space-y-4" style={{
                            color: 'black',
                        }}>
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
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                                {isLoading ? 'Adding Client...' : 'Add Client & Create Instance'}
                            </button>
                        </div>
                    ) : (
                        <div className="max-w-2xl">
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${isDragging
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