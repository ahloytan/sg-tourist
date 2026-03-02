import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dos-donts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dos-donts.component.html',
  styleUrls: ['./dos-donts.component.scss']
})
export class DosDontsComponent {
  rideHailingApps = [
    { name: 'Gojek', url: 'https://apps.apple.com/us/app/gojek/id944875099' },
    { name: 'Grab', url: 'https://apps.apple.com/us/app/grab-taxi-ride-food-delivery/id647268330' },
    { name: 'Ryde', url: 'https://apps.apple.com/sg/app/ryde-ride-hailing-more/id979806982' },
    { name: 'Tada', url: 'https://apps.apple.com/us/app/tada-ride-hailing/id1412329684' },
    { name: 'Zig', url: 'https://apps.apple.com/sg/app/cdg-zig-taxis-cars/id954951647' }
  ];

  foodDeliveryApps = [
    { name: 'Deliveroo', url: 'https://apps.apple.com/us/app/deliveroo-food-shopping/id1001501844' },
    { name: 'Foodpanda', url: 'https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884' },
    { name: 'GrabFood', url: 'https://apps.apple.com/us/app/grab-taxi-ride-food-delivery/id647268330' }
  ];

  rentBicycleApps = [
    { name: 'Anywheel', url: 'https://apps.apple.com/us/app/anywheel/id1453812982' },
    { name: 'Hello Ride', url: 'https://apps.apple.com/us/app/helloride-enjoy-your-ride/id1611538620' }
  ];

  navigationApps = [
    { name: 'Google Maps', url: 'https://apps.apple.com/us/app/google-maps/id585027354' },
    { name: 'My Transport', url: 'https://apps.apple.com/sg/app/mytransport-sg/id1306661188' },
    { name: 'SG Buses', url: 'https://apps.apple.com/sg/app/sg-buses-bus-arrival-times/id384353741' },
  ];

  OthersApps = [
    { name: 'Klook', desc: 'Tickets, Activities & Tours', url: 'https://apps.apple.com/us/app/klook-travel-activities/id961850126' },
    { name: 'Mandai Wildlife Reserve App', desc: ' if you are visiting!', url: 'https://apps.apple.com/sg/app/mandai-wildlife-reserve/id6445837575' },
    { name: 'Locomole', desc: 'Self-guided mobile trails', url: 'https://apps.apple.com/sg/app/locomole/id1542155026' },
    { name: 'Happy Cow', desc: 'Food spots for vegetarians', url: 'https://apps.apple.com/us/app/happycow-vegan-food-near-you/id435871950' },
    { name: 'NParks Explore A Route', desc: 'Explore Singapore\'s parks and nature trails', url: 'https://apps.apple.com/sg/app/nparks-explore-a-route-near/id6444256702' }
  ]

  references = [
    { title: 'LTA — Rail Network (MRT map)', url: 'https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network.html' },
    { title: 'National Environment Agency (NEA)', url: 'https://www.nea.gov.sg/docs/default-source/hawker-centres-documents/list-of-hcs_-25-july-2025.pdf' },
    { title: 'Visit Singapore — Official Tourism Guide', url: 'https://www.visitsingapore.com/' },
    { title: 'Sentosa — Official Attractions Guide', url: 'https://www.sentosa.com.sg/en/things-to-do/attractions'},
    { title: 'Sassy Mama SG — Play Sentosa for Kids Guide', url: 'https://www.sassymamasg.com/play-sentosa-for-kids-guide-attractions-beach-staycation/'},
    { title: 'Orchard Road — Shopping Guide', url: 'https://orchardroad.org/directory-categories/shop/shopping-malls'},
    { title: 'Coney Island Guide', url: 'https://thesmartlocal.com/read/coney-island-guide/'},
    { title: 'Best Hiking Trail Guide', url: 'https://sethlui.com/best-hiking-trail-guide-singapore/'},
    { title: 'List of Pasar Malam (on-going)', url: 'https://ahboy.com/list-of-pasar-malam-in-singapore/'}
  ];
}
