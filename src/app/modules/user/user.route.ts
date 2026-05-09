import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create-doctors", UserController.createDoctor);

export const UserRoutes = router;