import { Component } from '@angular/core';
import { Header } from '../../../components/logged/header/header';
import { Card, type MovieCardData } from '../../../components/logged/card/card';

@Component({
  imports: [Header, Card],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly movies: MovieCardData[] = [
    {
      title: 'O Poderoso Chefão',
      description: 'Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'Claro tv+',
      isTopTen: true,
    },
    {
      title: 'Casablanca',
      description: 'Durante a Segunda Guerra Mundial, um exilado americano precisa escolher entre o amor da sua vida e ajudar um líder da resistência.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'NETFLIX',
      isTopTen: true,
    },
    {
      title: 'Cidadão Kane',
      description: 'A história de Charles Foster Kane, um magnata da imprensa que morre dizendo "Rosebud", despertando um jornalista a investigar sua vida.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'Claro tv+',
      isTopTen: true,
    },
    {
      title: 'Oppenheimer',
      description: 'A história do cientista que liderou a criação da bomba atômica e mudou o curso da humanidade.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'Apple TV+',
      isTopTen: true,
    },
    {
      title: 'Coringa 2',
      description: 'Continuação da história de Arthur Fleck, explorando sua transformação completa no vilão Coringa.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'prime video',
      isTopTen: false,
    },
    {
      title: 'Duna: Parte 2',
      description: 'Paul Atreides lidera uma rebelião contra o Imperador, buscando vingança e equilíbrio para o destino do universo.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'Apple TV+',
      isTopTen: false,
    },
    {
      title: 'The Batman',
      description: 'Bruce Wayne investiga crimes misteriosos cometidos pelo Charada enquanto descobre segredos sombrios sobre Gotham.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'prime video',
      isTopTen: false,
    },
    {
      title: 'Divertida Mente 2',
      description: 'Riley enfrenta novas emoções na adolescência enquanto descobre sentimentos inéditos em sua jornada.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'NETFLIX',
      isTopTen: false,
    },
  ];
}
