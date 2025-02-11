import { Router } from "express";
import { deleteAppointment, getAppointment, saveAppointment, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, deleteAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.put("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment);

router.delete("/deleteAppointment/:uid", deleteAppointmentValidator, deleteAppointment)

router.get("/:uid", getAppointment)

export default router;