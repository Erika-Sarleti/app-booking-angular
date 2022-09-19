import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
	selector: 'app-generic-card',
	template: `

		<div class="card gen-card">

			<h5 class="title">{{title}}</h5>

			<div class="card-body">

        <ng-content></ng-content>

			</div>

		</div>

	`,
	styles: [
	]
})
export class GenericCardComponent {

  @Input() title: string = '';
  @Input() isLogin: boolean = false;
  @Input() isReservation: boolean = false;
  @Input() isReview: boolean = false;
  @Input() isContact: boolean = false;
  @Input() cartItems: CartItem[] = [];
  @Input() outside: boolean = false;

}
