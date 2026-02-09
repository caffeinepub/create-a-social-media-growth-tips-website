import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAllClickCounts(): Promise<Array<[string, bigint]>>;
    getClickCount(buttonId: string): Promise<bigint>;
    recordClick(buttonId: string): Promise<void>;
}
