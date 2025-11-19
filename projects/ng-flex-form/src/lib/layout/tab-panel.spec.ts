import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffTabPanel } from './tab-panel';

describe('NgffTabPanel', () => {
  let component: NgffTabPanel;
  let fixture: ComponentFixture<NgffTabPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffTabPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffTabPanel);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('params', {
      tabId: 'tab1',
      activeTabId: 'tab1',
    });
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });

  it('should show content when tab is active', () => {
    fixture.componentRef.setInput('params', {
      tabId: 'tab1',
      activeTabId: 'tab1',
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const panel = compiled.querySelector('.tab-panel');
    expect(panel).toBeTruthy();
  });

  it('should hide content when tab is not active', () => {
    fixture.componentRef.setInput('params', {
      tabId: 'tab1',
      activeTabId: 'tab2',
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const panel = compiled.querySelector('.tab-panel');
    expect(panel).toBeFalsy();
  });
});
