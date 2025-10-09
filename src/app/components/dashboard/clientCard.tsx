import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Menu, X, Upload, Plus, Users, Settings, Home, Activity, Calendar, TrendingUp, ChevronDown, ChevronUp, Copy, ExternalLink, Loader2, CheckCircle, Clock, BarChart3, ArrowRight } from 'lucide-react';
import React, { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { IClient } from '@/app/lib/interfaces';


interface ClientCardProps {
    client: IClient;
    onCopyUrl: (url: string) => void;
    onOpenInstance: (url: string) => void;
    compact?: boolean;
}

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

export default ClientCard;