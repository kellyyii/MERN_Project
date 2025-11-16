import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{jsx,js}"],
   theme: {
     extend: {},
   },
   plugins: [tailwindcss(), react(), daisyui()],
 }