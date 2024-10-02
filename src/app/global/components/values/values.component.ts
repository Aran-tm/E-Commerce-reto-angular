import { SafePipe } from 'safe-pipe';
import { ValueCard } from './../../models/valueCard.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './values.component.html',
})
export class ValuesComponent {
  valueCards: ValueCard[] = [
    {
      id: 1,
      icon: `<svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 34V10M26 34H30M26 34H16M26 10C26 5.58172 22.4183 2 18 2H10C5.58172 2 2 5.58172 2 10V26C2 29.7304 4.55333 32.8645 8.00769 33.7499M26 10H32.4182C33.4344 10 34.4126 10.3868 35.154 11.0819L40.7358 16.3148C41.5424 17.071 42 18.1273 42 19.2329V30C42 32.2091 40.2091 34 38 34M38 34C38 36.2091 36.2091 38 34 38C31.7909 38 30 36.2091 30 34M38 34C38 31.7909 36.2091 30 34 30C31.7909 30 30 31.7909 30 34M16 34C16 36.2091 14.2091 38 12 38C9.79086 38 8 36.2091 8 34C8 33.916 8.00259 33.8326 8.00769 33.7499M16 34C16 31.7909 14.2091 30 12 30C9.87484 30 8.13677 31.6573 8.00769 33.7499" stroke="#141718" stroke-width="2.5"/>
            </svg>
            `,
      name: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      id: 2,
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="40" height="32" rx="4" stroke="#141718" stroke-width="2.5"/>
              <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 20 28)" stroke="#141718" stroke-width="2.5"/>
              <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 34 26)" fill="#141718"/>
              <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 26)" fill="#141718"/>
            </svg>
            `,
      name: 'Money-back',
      description: '30 days guarantee',
    },
    {
      id: 3,
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28" stroke="#141718" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            `,
      name: 'Secure Payments',
      description: 'Secured by Stripe',
    },
    {
      id: 4,
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z" stroke="#141718" stroke-width="2.5" stroke-linejoin="round"/>
            </svg>
            `,
      name: '24/7 Support',
      description: 'Phone and Email support',
    },
  ];
}
