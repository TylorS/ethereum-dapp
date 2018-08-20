import * as React from 'react';
import { Contract } from 'web3/types';
import { State } from '../state';
export declare class App extends React.Component<AppProps, State> {
    state: State;
    id: any;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private makeDeposit;
    private makeWithdrawal;
    private updateState;
}
export declare type AppProps = {
    contract: Contract;
    account: string;
};
