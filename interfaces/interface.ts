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
    name: "LazyTemp",
    url: "https://www.lazytemp.com/",
    lenguages: ["react", "tailwind", "firebase"],
    images: "/imgs/lazytemp.png",
  },
  {
    name: "MinyPlayground",
    url: "https://www.miniplayground.online/",
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
  "firebase"
];

export const images: string = "/perfil.jpg";
