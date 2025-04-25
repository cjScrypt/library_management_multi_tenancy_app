import { json, urlencoded } from 'body-parser';
import cors from "cors";

export const addCorsHeaderToResponse = cors();
export const addBodyToRequestFromJson = json();
export const addBodyToRequestFromUrl = urlencoded({ extended: false });
