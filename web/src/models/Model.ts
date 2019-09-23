import { AxiosResponse, AxiosPromise } from 'axios';

export interface IModelAttributes<T> {
    set(update: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

export interface ISync<T> {
    fetch(id: number): AxiosPromise;
    save(date: T): AxiosPromise;
} 

export interface IEvents {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export interface HasId {
    id?:number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: IModelAttributes<T>,
        private sync: ISync<T>,
        private events: IEvents
    ) {}

    get on() { return this.events.on; }
    get trigger() { return this.events.trigger; }
    get get() { return this.attributes.get; }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');

        if (typeof id !== 'number') {
            throw new Error('Can not fetch without an id');
        }

        // Using our implementation of `set` as to emit event.
        this.sync.fetch(id).then((response: AxiosResponse): void => this.set(response.data));
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => this.trigger('save'))
            .catch(() => this.trigger('error'));

    }
}