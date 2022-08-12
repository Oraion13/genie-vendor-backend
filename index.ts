const { APP_PORT } = require("./utils/config");
const app = require("./app")

const PORT = APP_PORT;

app.listen(PORT, () => {
    console.log(`server running in port: ${PORT}`);
})