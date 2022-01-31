import {Knex} from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        {title : 'Lampadas', image: 'lampadas.svg'},
        {title : 'Pilhas e baterias', image: 'baterias.svg'},
        {title : 'Papeis e papelão', image: 'Papeis-papelao.svg'},
        {title : 'Residuos Eletronicos', image: 'eletronicos.svg'},
        {title : 'Residuos Organicos', image: 'organicos.svg'},
        {title : 'Óleos de cozinha', image: 'oleo.svg'},
    ])
}