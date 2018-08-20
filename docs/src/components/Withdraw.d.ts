/// <reference types="react" />
export declare function Withdraw({ withdrawAmount, onInput, onSubmit }: WithdrawProps): JSX.Element;
export declare type WithdrawProps = {
    withdrawAmount: number;
    onInput: (amount: number) => void;
    onSubmit: () => void;
};
