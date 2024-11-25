import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export type Theme = "light" | "dark";

export default function sowNotifications(message: string, theme: Theme): void {
    Toastify({
        text: message,
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black"
        },
    }).showToast();
};