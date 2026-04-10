import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisantsList } from './artisants-list';

describe('ArtisantsList', () => {
  let component: ArtisantsList;
  let fixture: ComponentFixture<ArtisantsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisantsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisantsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
