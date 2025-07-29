
import app from './app'
import { connectDB } from './config/dbConnection';

const PORT = process.env.PORT || 1998;
const serverStart = async () => {
    connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
}

serverStart().catch((err) => {
    console.error("Failed to start:", err);
    process.exit(1);
});
