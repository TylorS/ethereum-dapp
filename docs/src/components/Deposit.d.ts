/// <reference types="react" />
export declare function Deposit({ depositAmount, onInput, onSubmit }: DepositProps): JSX.Element;
export declare type DepositProps = {
    depositAmount: number;
    onInput: (amount: number) => void;
    onSubmit: () => void;
};
