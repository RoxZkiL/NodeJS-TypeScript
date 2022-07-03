export type Visibility = "poor" | "good" | "nice" | "maomeno" | "meh" | "pior";

export interface Resumen {
    id: number,
    date: string,
    visibility: Visibility,
    comments: string
}

