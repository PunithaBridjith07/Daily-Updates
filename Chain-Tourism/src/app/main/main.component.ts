import { Component, inject, Input, OnInit } from '@angular/core';
import { TourBanner, tourList } from '../tourList.model';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'chainTour-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent{}
