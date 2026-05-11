import app from "./app";
import { envVariables } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envVariables.PORT, () => {
      console.log(`Server is running on http://localhost:${envVariables.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

bootstrap();
