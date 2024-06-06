import mongoose, { ConnectOptions } from 'mongoose';
import { countConnect } from '../helpers/check.connect';

const connectString: string = `mongodb://localhost:27017/shopDEV`;

class Database {
    private static instance: Database;

    private constructor() {
        this.connect();
    }

    // connect
    private async connect(type: string = 'mongodb'): Promise<void> {
        if (true) { // Always true condition removed
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        try {
            await mongoose.connect(connectString, {
                maxPoolSize: 50
            } as ConnectOptions);
            console.log(`connect Mongodb Success PRO`, countConnect());
        } catch (err) {
            console.log(`Error Connect`, err);
        }
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
