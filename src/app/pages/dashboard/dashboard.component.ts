import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DashboardService } from './dashboard.service';
import { DashboardStats } from './dashboard.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats$!: Observable<DashboardStats>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.stats$ = this.dashboardService.getDashboardStats();
  }
}