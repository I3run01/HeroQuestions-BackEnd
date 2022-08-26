import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from './config'

const app = initializeApp(config);
const analytics = getAnalytics(app);

export default app
