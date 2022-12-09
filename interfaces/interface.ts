export interface Projects {
  name: string;
  url?: string;
  app?: App[];
  lenguages: string[];
  images: string;
}

export interface App {
  device: string;
  url: string;
}

export const projects: Projects[] = [
  {
    name: "AzulaTCG",
    url: "https://azulatcg-54ggm.ondigitalocean.app/",
    lenguages: ["react", "bootstrap", "mongodb"],
    images: "/imgs/azula.png",
  },
  {
    name: "MinyPlayground",
    url: "https://minyplayground-sdi4-7jwxd1m4b-miky2606.vercel.app/",
    lenguages: ["react", "tailwind"],
    images: "/imgs/minyplayground.png",
  },

  {
    name: "Rick&Morty App",
    app: [
      {
        device: "android",
        url: "app-release.apk",
      },
    ],
    lenguages: ["flutter"],
    images: "/imgs/rick.jpg",
  },
];

export const skill: string[] = [
  "react",
  "flutter",
  "bootstrap",
  "css",
  "ts",
  "swift",
  "js",
  "html",
  "mongodb",
  "nextjs",
];

export const images: string = "/perfil.jpg";
