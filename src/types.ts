export interface Account {
    username: string;
    password: string;
    sharedSecret?: string;
    games: number[];
    status: 'Online' | 'Away' | 'Invisible' | 'Offline';
}

export interface Config {
    accounts: Account[];
}