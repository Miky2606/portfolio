  export interface Projects {
    name: string,
    url?: string,
    apk?:string,
    lenguages: string[],
    images: string
}

 export const projects: Projects[] = [
    {
        name: "AzulaTCG",
        url: "https://azulatcg-54ggm.ondigitalocean.app/",
        lenguages: ["react", "bootstrap", "mongodb"],
        images: "/imgs/azula.png"

    },
    {
        name: "Rick&Morty App",
        apk: "app-release.apk",
        lenguages: ["flutter"],
        images: "/imgs/rick.jpg"

    }
]

 export const skill:string[] =[
"react","flutter", "bootstrap", "css", "ts", "swift", "js", "html", "mongodb", "nextjs"
]

 export const images: string = "/perfil.jpg"

 