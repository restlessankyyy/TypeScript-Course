import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const baseUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new ApiSync<UserProps>(baseUrl),
            new Eventing(),
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection(
            baseUrl,
            (json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}