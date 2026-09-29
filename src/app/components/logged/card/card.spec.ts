import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('movie', {
      title: 'Filme de teste',
      description: 'Descricao do filme.',
      duration: '1h30',
      ageRating: 'Somente +18',
      approval: '67%',
      platform: 'NETFLIX',
      isTopTen: true,
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
