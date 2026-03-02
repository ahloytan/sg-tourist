import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Location } from '../../models/location.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab = signal<'tourist' | 'nature' | 'local'>('tourist');

  private readonly touristLocations = signal<any[]>([
    {
      id: 1,
      name: 'Universal Studios Singapore',
      description: 'A world-class theme park with thrilling rides, shows, and attractions based on popular movies. Perfect for families and thrill-seekers.',
      imageUrl: 'https://cdn-imgix.headout.com/category/517/image/41edaa39-dd77-4a60-8b11-1447d407ec1d-01SingaporeThemeParks-UniversalStudiosSingapore.jpg',
      nearestMRT: 'HarbourFront (North-East Line, Circle Line)',
      link: 'https://www.klook.com/en-SG/destination/p50014819-universal-studios-singapore/1-things-to-do/'
    },
    {
      id: 2,
      name: 'Gardens by the Bay',
      description: 'There is a free light show daily from 7.45pm to 8.45pm! Do check out other attractions like the Cloud Forest (around $46 SGD) if you have time.',
      imageUrl: 'https://www.visitsingapore.com/content/dam/visitsingapore/travel-tips/Itineraries/7days-in-SG/day-1-morning-gardens-by-the-bay_745x560.jpg',
      nearestMRT: 'Bayfront (Circle Line, Downtown Line)',
      link: 'https://www.gardensbythebay.com.sg/en/things-to-do/attractions.html#:~:text=Take%20a%20walk%20through%20the,Free%20Admission',
    },
    {
      id: 3,
      name: 'Sentosa Island',
      description: 'An entertainment hub with beaches, Universal Studios Singapore, Adventure Cove Waterpark, and the S.E.A. Aquarium.',
      imageUrl: 'https://www.visitsingapore.com/content/dam/visitsingapore/neighbourhoods/sentosa/video-fallback_780x440.jpg',
      nearestMRT: 'HarbourFront (North-East Line, Circle Line)'
    },
    {
      id: 4,
      name: 'Katong Joo Chiat',
      description: 'Historic district with colorful shop houses, temples, and cultural heritage. Great for exploring local culture and street food.',
      imageUrl: 'https://www.visitsingapore.com/content/dam/visitsingapore/travel-tips/Itineraries/7days-in-SG/day-7-morning-katong-joo-chiat_745x560.jpg',
      nearestMRT: 'Eunos (East-West Line)',
      link: 'https://www.visitsingapore.com/content/dam/visitsingapore/neighbourhoods/katong-joo-chiat/Cultural-Precinct-Maps_Katong-Joo-Chiat_Softcopy.pdf_safe_(1)_(1).pdf'
    },
    {
      id: 5,
      name: 'Marina Bay Sands',
      description: 'Do check out the marina barrage if possible too',
      imageUrl: 'https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/186/208/259/20240826_Exterior_Architecture-17_O/Marina-Bay-Sands-Singapore-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto',
      nearestMRT: 'Bayfront (Circle Line, Downtown Line)'
    },
    {
      id: 6,
      name: 'Mustafa Centre',
      description: 'Vibrant cultural district known for its colorful temples, markets, and authentic Indian cuisine. A favorite spot for tourists seeking culture.',
      imageUrl: 'https://www.ibissingaporebencoolen.com/wp-content/uploads/sites/106/2024/05/Little-India-1.jpg',
      nearestMRT: 'Little India (North-East Line, Downtown Line)'
    },
    {
      id: 7,
      name: 'Bugis Street + Haji Lane',
      description: 'You can visit various places nearby like Fortune Centre, Chijmes, Suntec City or the War Memorial Park!',
      imageUrl: 'https://www.ibissingaporebencoolen.com/wp-content/uploads/sites/106/2024/05/Bugis-street-2.jpg',
      nearestMRT: 'Bugis (East-West Line, Downtown Line)',
      link: 'https://www.monsterdaytours.com/post/what-to-do-in-bugis-guide?srsltid=AfmBOoqiV82mvUp2Tx01CFnF614zFjWo2y0kjur6xFRkrfJMFZVYe3ym'
    },
    {
      id: 8,
      name: 'Mandai Wildlife Reserve',
      description: 'Venture into an immersive rainforest wildlife park. Choose your wild as you embark on rainforest adventures from canopy to cavern, encountering wildlife along your journey.​',
      imageUrl: 'https://www.visitsingapore.com/content/dam/visitsingapore/neighbourhoods/mandai/card/walk-on-wild-side-746x620.jpg',
      nearestMRT: 'Khatib (North-South Line)',
      link: 'https://www.mandai.com/en/ticketing/admission-and-rides/tickets-selection.html'
    },
    {
      id: 9,
      name: 'Jewel @ Changi Airport',
      description: 'A stunning shopping and entertainment complex with a waterfall, conservatory, and observation deck.',
      imageUrl: 'https://www.jewelchangiairport.com/en/attractions/forest-valley/_jcr_content/image/file.res',
      nearestMRT: 'Changi Airport (East-West Line)'
    }
  ]);

  hikingLocations = signal<any[]>([
    {
      id: 1,
      name: 'MacRitchie Reservoir Park',
      description: 'Popular for its scenic trails, treetop walk, and water activities.',
      imageUrl: 'https://www.cdn.travejar.com/storage/india_attraction_tour/1748087127.webp',
      nearestMRT: 'Marymount (Circle Line)'
    },
    {
      id: 2,
      name: 'Bukit Timah Nature Reserve',
      description: 'A lush forest reserve with trails and diverse wildlife.',
      location: 'Bukit Timah Nature Reserve',
      imageUrl: 'https://www.nparks.gov.sg/images/default-source/parks-img/bukit-timah-nature-reserve/hhnp-quarry-_shuan.jpg',
      nearestMRT: 'Beauty World (Downtown Line)'
    },   
    {
      id: 3,
      name: 'Sungei Buloh Wetlands Reserve',
      description: 'A protected wetland area with diverse bird species and nature trails.',
      imageUrl: 'https://static1.squarespace.com/static/5be172e38f513032e447734b/t/5e60c28098107976838fddc1/1583399561485/?format=1500w',
      nearestMRT: 'Kranji (North-South Line)'
    }, 
    {
      id: 4,
      name: 'Coney Island',
      description: 'Popular for its scenic trails, treetop walk, and water activities.',
      imageUrl: 'https://thesmartlocal.com/wp-content/uploads/2022/07/coney-island-guide-7.jpg',
      nearestMRT: 'Punggol (North-East Line)'
    },
    {
      id: 5,
      name: 'Botanic Gardens',
      description: 'Popular for its scenic trails, treetop walk, and water activities.',
      imageUrl: 'https://www.nparks.gov.sg/-/media/sbg/images/attractions/national-orchid-garden-2018-220.jpg?h=304&w=457',
      nearestMRT: 'Botanic Gardens (Circle Line, Downtown Line)'
    },
    {
      id: 6,
      name: 'Mount Faber Park + Labrador Nature Reserve',
      description: 'A hilltop park with panoramic views of the city and harbor.',
      imageUrl: 'https://www.nparks.gov.sg/images/default-source/parks-img/mount-faber-park/mount-faber-park-hero-skyline.jpeg',
      nearestMRT: 'HarbourFront (North-East Line, Circle Line), Labrador Park (Circle Line)'
    },
    {
      id: 7,
      name: 'Fort Canning Park',
      description: 'A historic hilltop park with gardens, trails, and cultural landmarks.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM_ccfSIYe4FXTWdodcK_Sdhcs8cnYnq_Xw&s',
      nearestMRT: 'Fort Canning (Downtown Line)'
    },
    {
      id: 8,
      name: 'Bishan Ang Mo Kio Park',
      description: 'A large urban park with river trails, gardens, and recreational facilities.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Kallang_River_at_Bishan_Park.jpg',
      nearestMRT: 'Bishan (North-South Line, Circle Line)'
    },
    {
      id: 9,
      name: 'East Coast Park',
      description: 'A coastal park with cycling paths, barbecue pits, and beach activities.',
      imageUrl: 'https://www.nparks.gov.sg/images/default-source/parks-img/east-coast-park/east-coast-park-camping-hero-tents.jpg',
      nearestMRT: 'Bedok (East-West Line)'
    }
  ]);

  localLocations = signal<any[]>([
    {
      id: 1,
      name: 'Palau Ubin',
      description: '10-min bumboat ride from Changi Point Ferry Terminal',
      imageUrl: 'https://pulau-ubin.nparks.gov.sg/images/Pekan_quarry_floating_wetlands_2.jpg',
      nearestMRT: 'Tanah Merah MRT (East-West Line)',
      link: 'https://pulau-ubin.nparks.gov.sg/visitubin/'
    },
    {
      id: 2,
      name: 'Sembawang Hot Spring Park',
      description: 'Set in a rustic, kampung-like setting, this is Singapore\'s only hot spring park. Ride bus 969/858 from Yishun MRT Station. Alight on the 4th bus stop (Bus Stop 57121: opp Blk 115B)',
      imageUrl: 'https://www.nparks.gov.sg/images/default-source/parks-img/sembawang-hot-spring-park/sembawang-hot-spring-park-hero-hot-spring.jpg',
      nearestMRT: 'Yishun (North-South Line)',
      link: 'https://www.nparks.gov.sg/visit/parks/park-detail/sembawang-hot-spring-park',
    },
    {
      id: 3,
      name: 'IMM Shopping Mall',
      description: 'Specialises in factory outlet stores. You can shop well-known brands at discounted prices. Changi City Point also features a significant number of factory outlets!',
      imageUrl: 'https://www.capitaland.com/sg/en/lease/mall-listing/imm-building/_jcr_content/root/container/container/entitydetails.coreimg.jpeg/content/dam/capitaland-media-library/retail/Singapore/Singapore/IMM%20Building/_EDK0792-HDR.jpg',
      nearestMRT: 'Jurong East (North-South Line, East-West Line)',
      link: 'https://youtu.be/8kz6yCaA4xU?si=amq5mINpq1q1A5UY&t=24'
    },
    {
      id: 4,
      name: 'Chinese Gardens',
      description: 'A 13.5-hectare retreat that harmonizes Northern Chinese imperial architecture—including iconic seven-storey pagodas and Suzhou-style bonsai landscapes—with serene natural waterfronts',
      imageUrl: 'https://ik.imagekit.io/pawwhere/jlg/jurong-lake-gardens.jpeg',
      nearestMRT: 'Chinese Gardens (East-West Line)',
      link: 'https://thesmartlocal.com/read/chinese-garden-japanese-garden/'
    },
    {
      id: 5,
      name: 'Gillman Barracks',
      description: 'Premier contemporary arts cluster in Singapore, housed in a conserved former British military camp',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a7/a5/49/gillman-barracks.jpg?w=1000&h=-1&s=1',
      nearestMRT: 'Redhill (East-West Line)',
      link: 'https://www.littledayout.com/guide-to-gillman-barracks-art-galleries-restaurants/'
    },
    {
      id: 6,
      name: 'Singapore River Cruise',
      description: 'Experience the city from the water with a scenic river cruise along the Singapore River. Tickets cost around $25. Clarke Quay has the best starting point in my opinion!',
      imageUrl: 'https://rivercruise.com.sg/wp-content/uploads/2016/02/03-1.jpg',
      nearestMRT: 'Clarke Quay (North-East Line)',
      link: 'https://www.klook.com/en-SG/activity/3846-river-cruise-singapore/?_currency=SGD'
    }
  ]);

  selectedLocations = computed(() => {
    switch (this.activeTab()) {
      case 'tourist':
        return this.touristLocations();
      case 'nature':
        return this.hikingLocations();
      case 'local':
        return this.localLocations();
      default:
        return [];
    }
  });

  seasonalEvents = [
    {
      id: 1,
      name: 'Geylang Serai Ramadan Bazaar (Bazaar Raya)',
      date: 'February 14 - March 21',
      nearestMrt: 'Paya Lebar (Circle Line, East-West Line)',
      description: 'A vibrant Ramadan bazaar featuring local vendors, and traditional foods. Full list of on-going pasar malams',
      category: 'food',
      imageUrl: 'https://d1ef7ke0x2i9g8.cloudfront.net/directories-hong-kong/Geylang-Serai-Bazaar.jpg',
      link: 'https://ahboy.com/list-of-pasar-malam-in-singapore/#ongoing-pasar-malam'
    },
    {
      id: 2,
      name: 'Pokémon Day-to-Night Adventure',
      date: 'Now - April 30',
      nearestMrt: 'Harbourfront (North-East Line, Circle Line)',
      description: 'Hop on the cable car and enjoy two unique experiences - Pokémon-themed interiors with Pikachu and friends in the day, and a UV torch with glowing Pokémon silhouettes, including the elusive Mew at night. Expect vibrant Pokémon-themed interiors for a perfect photo moment.',
      category: 'event',
      imageUrl: 'https://assets.content.stb.gov.sg/events/fd5cd7c1-482f-463c-8e76-cf9e87c3b19b/pokemon_daytonight_adventure4.jpeg',
      link: 'https://www.sentosa.com.sg/en/things-to-do/events/singapore-cable-car-pokemon-day-to-night-adventure/'
    },
    {
      id: 3,
      name: 'Not Mere Spectators: The Makings of Multicultural Singapore',
      date: 'Now - March 29',
      nearestMrt: 'City Hall (North-South Line, East-West Line)',
      description: 'Step into 1950s - 1970s Singapore, when multiculturalism was thought about, talked about, and consciously forged through policies, ground-up efforts and the daily choices of ordinary citizens. Move through the tensions between ideals and realities, then find your place on the stage of multicultural Singapore — still in the making today. ',
      category: 'event',
      imageUrl: 'https://www.foundersmemorial.gov.sg/-/media/founders-memorial/articles/not-mere-spectators/20251022-fm_spectators-42.jpg',
      link: 'https://www.nationalgallery.sg/sg/en/exhibitions/Not-Mere-Spectators-The-Makings-of-Multicultural-Singapore.html'
    }
  ];

  showTourist() {
    this.activeTab.set('tourist');
  }

  showNature() {
    this.activeTab.set('nature');
  }

  showLocal() {
    this.activeTab.set('local');
  }
}
