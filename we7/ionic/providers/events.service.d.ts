export declare class Events {
    private c;
    subscribe(topic: string, ...handlers: Function[]): void;
    unsubscribe(topic: string, handler?: Function): boolean;
    publish(topic: string, ...args: any[]): any[];
}
export declare function setupEvents(): Events;
export declare function setupProvideEvents(): () => Events;
