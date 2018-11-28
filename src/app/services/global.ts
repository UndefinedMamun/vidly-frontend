import { isDevMode } from "@angular/core";

export const server = isDevMode() ? "http://localhost:3000" : "https://obscure-basin-22049.herokuapp.com";