import type { Modalidade } from '../types';

//Ainda vou substituir a imagem
export const modalidades: Modalidade[] = [
    {
        id: 'karate',
        nome: 'Karate',
        descricao: 'Foco em autodefesa, disciplina mental e técnica refinada.',
        imagem: '/src/assets/images/karate.jpg',
    },
    {
        id: 'jiu-jitsu',
        nome: 'Jiu-Jitsu',
        descricao: 'A arte suave da imobilização e da estratégia no solo.',
        imagem: '/src/assets/images/jiu-jitsu.jpg',
    },
    {
        id: 'kickboxing',
        nome: 'Kickboxing',
        descricao: 'Alta queima calórica e desenvolvimento de reflexos rápidos.',
        imagem: '/src/assets/images/kickboxing.jpg',
    },
];