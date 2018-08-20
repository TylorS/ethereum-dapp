import { Contract, EventLog } from 'web3/types';
import { RecentEvent } from '../state';
export declare function getRecentEvents(contract: Contract): Promise<RecentEvent[]>;
export declare function convertEvent(type: 'Withdraw' | 'Deposit'): (event: EventLog) => Promise<RecentEvent | null>;
