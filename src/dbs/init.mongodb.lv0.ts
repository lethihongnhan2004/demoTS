'use strict';
import mongoose from 'mongoose';

const connectString: string = `mongodb://localhost:27017/shopDev`;
mongoose.connect(connectString)
    .then(() => console.log(`Connected Mongodb success`))
    .catch((err: Error ) => console.log(`error connect!`));

if (1 === 1) {
        mongoose.set('debug', true);
        mongoose.set('debug', { color: true });
}
    
export default mongoose;