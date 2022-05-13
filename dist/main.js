"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const SecretKey = 'cookie';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser(SecretKey)).use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 9000,
        },
        rolling: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map