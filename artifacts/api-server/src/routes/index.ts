import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import noticesRouter from "./notices";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(noticesRouter);

export default router;
