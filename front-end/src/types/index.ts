export interface Modalidade {
    id: string;
    nome: string;
    descricao: string;
    imagem: string;
}

export interface Professor {
    id: string;
    nome: string;
    titulo: string;
    imagem: string;
}

export interface AulaHorario {
    horario: string;
    segunda: string;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
}

export interface ImagemGaleria {
    id: string;
    src: string;
    alt: string;
}

export interface NavLink {
    label: string;
    href: string;
}