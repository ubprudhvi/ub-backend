
import app from './app'


const PORT = process.env.PORT || 1998;

app.listen(PORT, () => console.log(`Running on ${PORT}`));
