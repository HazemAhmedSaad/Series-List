import { Component } from '@angular/core';
import { SeriesesService } from '../../services/serieses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serieses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serieses.component.html',
  styleUrl: './serieses.component.css'
})
export class SeriesesComponent {
  seriesList: any[] = [];
  constructor(private seriesesService: SeriesesService) { }

  ngOnInit() {
    this.seriesesService.getAllSeries().subscribe((seriesData: any) => {
      this.seriesList = seriesData.results;
      console.log(seriesData);
    });
  }
}
