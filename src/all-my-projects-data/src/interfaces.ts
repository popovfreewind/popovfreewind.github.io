export type Platform = "Roku" | "Amazon Fire TV" | "iOS" | "Android" | "Web";
export interface Project {
    name: string;
    poster: string;
    type: "game" | "app" | "website";
    platforms: Platform[];
    links?: Partial<Record<Platform, string>>;
}