import { Moment } from 'moment';
export declare type State = {
    accountBalance: number;
    vaultBalance: number;
    depositAmount: number;
    withdrawAmount: number;
    recentEvents: RecentEvent[];
};
export declare const defaultState: State;
export declare type RecentEvent = {
    address: string;
    initiator: string;
    type: 'Withdraw' | 'Deposit';
    timestamp: Moment;
    value: number;
};
