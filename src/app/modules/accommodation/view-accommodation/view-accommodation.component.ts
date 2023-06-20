import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Accommodation, AccommodationFull, Appointment, ShowRateAccommodation } from '../model/Accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-view-accommodation',
  templateUrl: './view-accommodation.component.html',
  styleUrls: ['./view-accommodation.component.css']
})
export class ViewAccommodationComponent {
  public accommodation = <AccommodationFull>{}
  public newAppointment = <Appointment>{}
  public rates: ShowRateAccommodation[] = [];
  public avgRate: number = 0;

  constructor(
    private accService: AccommodationService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.accService.getById(params.get('id') ?? '').subscribe(data => {
        this.accommodation = data
        this.newAppointment = <Appointment>{
          accommodationId: this.accommodation.id,
          interval: {
            dateTo: '',
            dateFrom: ''
          },
          price: 0.0
        }
      })
      this.accService.getRatings(params.get('id') ?? '').subscribe(data => {
        this.rates = data.rates
      })
      this.accService.getAverageRating(params.get('id') ?? '').subscribe(data => {
        this.avgRate = data.average
      })
    })
  }

  rateAccommodation() {
    this.router.navigate(['/accommodation/' + this.accommodation.id + '/rate']);
  }

  createAppointment() {
    try {
      const dateFrom = new Date(this.newAppointment.interval.dateFrom);
      const dateTo = new Date(this.newAppointment.interval.dateTo);

      this.newAppointment.interval.dateFrom = dateFrom.toISOString().split('T')[0];
      this.newAppointment.interval.dateTo = dateTo.toISOString().split('T')[0];

    } catch (err) {
      alert('Date error');
      return;
    }

    this.accService.newAppointment(this.newAppointment).subscribe({
      next: () => {
        alert('Successfully created')
      },
      error: (data) => {
        alert(data)
      }
    });
  }

  public isHost(): boolean {
    return this.auth.getLoggedInRole() === 'HOST';
  }

}
