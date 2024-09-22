import { Component } from '@angular/core';
import { SeriesesService } from '../../services/serieses.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css'
})
export class SeriesDetailsComponent {
  seriesDetails: any;
  id!: number;
  constructor(private seriesDetailsService: SeriesesService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.seriesDetailsService.getSeriesDetails(params['id']).subscribe((seriesData: any) => {
    //     this.seriesDetails = seriesData;
    //     console.log(this.seriesDetails);
    //   }
    //   );
    // });

    this.id = this.route.snapshot.params['id'];
    this.seriesDetailsService.getSeriesDetails(this.id).subscribe((seriesData: any) => {
      this.seriesDetails = seriesData;
      console.log(this.seriesDetails);
    }
    );
  }
}
