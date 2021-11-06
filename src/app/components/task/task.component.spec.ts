import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let browser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render ', () => {
    expect(fixture).toMatchSnapshot(); // This is the snapshot validation
    (expect(fixture) as any).toMatchImageSnapshot();
  });
  it('works with puppeteer', async () => {
    expect.extend({ toMatchImageSnapshot });
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006/iframe.html?id=task--default&args=&viewMode=story');
    const image = await page.screenshot();
    (expect(image) as any).toMatchImageSnapshot();

    await browser.close();
  });
});
