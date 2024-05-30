import {createEvent, createStore} from 'effector'

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")

export const themeToggler = createEvent()

export const $themeMode = createStore<"light" | "dark">(darkModeQuery.matches ? "dark" : "light")

$themeMode.on(themeToggler, (mode) => (mode === "light" ? "dark" : "light"))