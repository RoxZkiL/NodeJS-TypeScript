import { Resumen } from "../types";
import resumenData from "./resumen.json";

const resumen: Array<Resumen> = resumenData as Array<Resumen>

export const getEntries = () => resumen;

export const addEntry = () => null;