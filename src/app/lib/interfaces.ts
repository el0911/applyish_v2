
export type IChartData = {
    day: string;
    applications: number;
};

export type IClientStatus = 'processing' | 'failed' | 'success' |'ready';

export type IClient = {
    id: number;
    name: string;
    email: string;
    linkedin?: string;
    notes?: string;
    status: IClientStatus;
    instanceUrl: string | null;
    addedAt: string;
    chartData: {
        weekOfYear : number
        count:number
    }[]
    totalJobs: number;
    weekJobs: number;
    avgJobs: number;
};

export type IClientCardProps = {
    client: IClient;
    onCopyUrl: (url: string) => void;
    onOpenInstance: (url: string) => void;
    compact?: boolean;
};

