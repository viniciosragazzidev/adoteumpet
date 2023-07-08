import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { title } from "process";

export interface IPets {
  id: number;
  img: string;
  nome: string;
  genero: string;
  peso: number;
  idade: number;
  localizacao: string;
  especie: string;
  porte: string;
  raca: string;
  favorited: boolean;
  maisImagens: string[];
}

interface PetsState {
  pets: Array<IPets>;
  estado: string;
  cidade: string;
  porte: string;
}

const initialState: PetsState = {
  pets: [
    {
      id: 1,
      img: "/dogCard.webp",
      nome: "Max",
      genero: "Macho",
      peso: 12,
      idade: 4,
      localizacao: "São Paulo",
      especie: "Cão",
      porte: "m",
      raca: "Labrador",
      favorited: false,
      maisImagens: ["/dogImage2.webp", "/dogImage3.webp", "/dogImage4.webp"],
    },
    {
      id: 2,
      img: "/dogCard.webp",
      nome: "Luna",
      genero: "Fêmea",
      peso: 6,
      idade: 2,
      localizacao: "Rio de Janeiro",
      especie: "Cão",
      porte: "p",
      raca: "Poodle",
      favorited: false,
      maisImagens: ["/dogImage5.webp", "/dogImage6.webp", "/dogImage7.webp"],
    },
    {
      id: 3,
      img: "/catCard.webp",
      nome: "Oliver",
      genero: "Macho",
      peso: 5,
      idade: 3,
      localizacao: "Belo Horizonte",
      especie: "Gato",
      porte: "p",
      raca: "Siamês",
      favorited: false,
      maisImagens: ["/catImage2.webp", "/catImage3.webp", "/catImage4.webp"],
    },
    {
      id: 4,
      img: "/dogCard.webp",
      nome: "Bella",
      genero: "Fêmea",
      peso: 8,
      idade: 5,
      localizacao: "Porto Alegre",
      especie: "Cão",
      porte: "m",
      raca: "Golden Retriever",
      favorited: false,
      maisImagens: ["/dogImage8.webp", "/dogImage9.webp", "/dogImage10.webp"],
    },
    {
      id: 5,
      img: "/catCard.webp",
      nome: "Simba",
      genero: "Macho",
      peso: 4,
      idade: 1,
      localizacao: "Curitiba",
      especie: "Gato",
      porte: "p",
      raca: "Persa",
      favorited: false,
      maisImagens: ["/catImage5.webp", "/catImage6.webp", "/catImage7.webp"],
    },
    {
      id: 6,
      img: "/dogCard.webp",
      nome: "Maggie",
      genero: "Fêmea",
      peso: 9,
      idade: 2,
      localizacao: "Recife",
      especie: "Cão",
      porte: "g",
      raca: "Pastor Alemão",
      favorited: false,
      maisImagens: ["/dogImage11.webp", "/dogImage12.webp", "/dogImage13.webp"],
    },
    {
      id: 7,
      img: "/catCard.webp",
      nome: "Loki",
      genero: "Macho",
      peso: 3,
      idade: 1,
      localizacao: "Fortaleza",
      especie: "Gato",
      porte: "p",
      raca: "Sphynx",
      favorited: false,
      maisImagens: ["/catImage8.webp", "/catImage9.webp", "/catImage10.webp"],
    },
    {
      id: 8,
      img: "/dogCard.webp",
      nome: "Lola",
      genero: "Fêmea",
      peso: 6,
      idade: 4,
      localizacao: "Salvador",
      especie: "Cão",
      porte: "p",
      raca: "Shih Tzu",
      favorited: false,
      maisImagens: ["/dogImage14.webp", "/dogImage15.webp", "/dogImage16.webp"],
    },
    {
      id: 9,
      img: "/catCard.webp",
      nome: "Milo",
      genero: "Macho",
      peso: 4,
      idade: 2,
      localizacao: "Manaus",
      especie: "Gato",
      porte: "m",
      raca: "Bengal",
      favorited: false,
      maisImagens: ["/catImage11.webp", "/catImage12.webp", "/catImage13.webp"],
    },
    {
      id: 10,
      img: "/dogCard.webp",
      nome: "Daisy",
      genero: "Fêmea",
      peso: 7,
      idade: 3,
      localizacao: "Brasília",
      especie: "Cão",
      porte: "m",
      raca: "Bulldog Francês",
      favorited: false,
      maisImagens: ["/dogImage17.webp", "/dogImage18.webp", "/dogImage19.webp"],
    },
  ],
  estado: "all",
  cidade: "all",
  porte: "all",
};

const petsSlice = createSlice({
  name: "petsState",
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<IPets[]>) => {
      state.pets = action.payload;
    },
    setEstado: (state, action: PayloadAction<string>) => {
      state.estado = action.payload;
    },
    setCidade: (state, action: PayloadAction<string>) => {
      state.cidade = action.payload;
    },
    setPorte: (state, action: PayloadAction<string>) => {
      state.porte = action.payload;
    },
  },
});

export const { setPets, setEstado, setCidade, setPorte } = petsSlice.actions;

export default petsSlice.reducer;
