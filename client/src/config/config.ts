import toast from "react-hot-toast";

class ConfigClass {
    private _itemsPerPage!: number;
    private _sentryDsn!: string;
    constructor() {
        this._initConfig();
    }

    private _initConfig(): void {
        const getEnv = (key: string, defaultValue: any = ''): string =>
            process.env[`REACT_APP_${key}`] || (toast.error(`${key} cannot be found`),console.log(`${key} cannot be found`), defaultValue);

        const getEnvNumber = (key: string, defaultValue: number = 0): number => {
            const value = getEnv(key, defaultValue.toString());
            const number = parseInt(value, 10);
            return isNaN(number) ? defaultValue : number;
        };

        this._itemsPerPage = 10;
        this._sentryDsn = 'https://6e708d5d85b18cc4783f3a2881f015a5@o4508887469522944.ingest.us.sentry.io/4508887478566912'
    }

    get itemsPerPage(): number {return this._itemsPerPage}
    get sentryDsn(): string {return this._sentryDsn}
    
}

const config = new ConfigClass();
export default config;
