import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  articles = [
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "teslarati.com",
      "title": "Elon Musk pledges to ensure Tesla shareholders’ faith will be rewarded",
      "description": "Elon Musk has pledged that he would work as hard as he can to make sure that Tesla shareholders are rewarded for their trust in him. Musk’s sentiments were shared in a post on social media platform X.\nBack in 2018, Tesla shareholders approved a high-risk high…",
      "url": "https://biztoc.com/x/33f9615e208fbdab",
      "urlToImage": "https://biztoc.com/cdn/33f9615e208fbdab_s.webp",
      "publishedAt": "2024-06-22T18:13:19Z",
      "content": "Elon Musk has pledged that he would work as hard as he can to make sure that Tesla shareholders are rewarded for their trust in him. Musks sentiments were shared in a post on social media platform X.… [+137 chars]"
    },
    {
      "source": {
        "id": "bild",
        "name": "Bild"
      },
      "author": "Julian Stähle",
      "title": "Berlin - Tesla kracht mit Mutter und Baby in Klinik",
      "description": "Ein dramatischer Unfall hat sich am Samstag an einem Berliner Krankenhaus ereignet.  Eine frisch gebackene Mama und ihr Baby wurden dabei verletzt.",
      "url": "https://www.bild.de/regional/berlin/unfall-in-berlin-tesla-kracht-mit-mutter-und-baby-in-klinik-6676fd080e489c19626b3619",
      "urlToImage": "https://images.bild.de/6676fd080e489c19626b3619/100ad0f1478ffe109ad25aa40e57f2dc,4a97780a?w=1280",
      "publishedAt": "2024-06-22T18:05:51Z",
      "content": "Berlin Plötzlich beschleunigte der Wagen und krachte ins Haus!\r\nDramatischer \r\nUnfall am Samstagnachmittag am Spandauer Waldkrankenhaus in \r\nBerlin. Eine Frau war mit einer frisch gebackenen Mama geg… [+1568 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "abnormalreturns.com",
      "title": "Saturday links: your immediate vicinity",
      "description": "Autos\nOn the barriers to continued growth in EV sales in the U.S. (ft.com)\nCar dealerships around the country are dealing with a software outage. (theverge.com)\nFisker ($FSRN) has filed for bankruptcy. (wsj.com)\nThe Tesla ($TSLA) Model Y is the most made-in A…",
      "url": "https://biztoc.com/x/b6c3d044b2b6d4a4",
      "urlToImage": "https://biztoc.com/cdn/b6c3d044b2b6d4a4_s.webp",
      "publishedAt": "2024-06-22T18:02:24Z",
      "content": "AutosOn the barriers to continued growth in EV sales in the U.S. (ft.com)Car dealerships around the country are dealing with a software outage. (theverge.com)Fisker ($FSRN) has filed for bankruptcy. … [+123 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Christian de Looper",
      "title": "EVs may produce more emissions during manufacturing, but they quickly catch up",
      "description": "There's a narrative that EVs are just as bad for the environment due to battery manufacturing. Turns out, that's not even close to true.",
      "url": "https://www.digitaltrends.com/cars/evs-may-produce-more-emissions-during-manufacturing-but-they-quickly-catch-up/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2016/10/Emissions-car-pollution-smog.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2024-06-22T18:00:26Z",
      "content": "Electric vehicles are here in full force, and while they’re still more expensive than their gas-powered counterparts, prices are slowly, but surely coming down. In fact, EVs are likely to be just as … [+7132 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": "LA NACION",
      "title": "Compró un Tesla y reveló por qué fue un error: “Lo odio, quiero un reembolso”",
      "description": "Una tiktoker se volvió viral en las redes sociales tras afirmar que su experiencia de manejo se volvió una tarea agotadora y poco práctica desde que adquirió un vehículo eléctrico de esta marca",
      "url": "https://www.lanacion.com.ar/estados-unidos/compro-un-tesla-y-revelo-por-que-fue-un-error-lo-odio-quiero-un-reembolso-nid22062024/",
      "urlToImage": "https://resizer.glanacion.com/resizer/v2/la-tiktoker-kerry-aseguro-en-un-video-que-comprar-CD4SGIFSRVHG7LQKVJSQP2CVFE.jpg?auth=110fe11dc348f5aeff051dd0417589bd6eeae6b638cfba016bafa498e8e340c6&width=768&quality=70&smart=false",
      "publishedAt": "2024-06-22T18:00:00Z",
      "content": "Una joven de 26 años desató una polémica en redes sociales tras manifestar su arrepentimiento porhaber adquirido un vehículo eléctrico Tesla. El peor error de mi vida, sostuvo en un video, donde pidi… [+2664 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Somosxbox.com"
      },
      "author": "Alberto Martos",
      "title": "Fallout 4 Next Gen: como desbloquear todo el contenido del Enclave",
      "description": "Una de las novedades más importantes de la actualización es que se ha añadido nuevo contenido, relacionado con la línea de misiones \"Ecos del Pasado\". Es",
      "url": "https://www.somosxbox.com/fallout-4-next-gen-como-desbloquear-todo-el-contenido-del-enclave/",
      "urlToImage": "https://www.somosxbox.com/wp-content/uploads/2024/06/Enclave-Fallout-4.jpg",
      "publishedAt": "2024-06-22T17:55:37Z",
      "content": "4Aunque muchos podían no llegar a esperarlo, tras el apabullante éxito de la serie de Fallout de Amazon Prime Video, Bethesda decidió lanzar por sorpresa una versión de Fallout 4 Next Gen, con la que… [+3214 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Der Tagesspiegel",
      "title": "Wegen „geopolitischer Spannungen“: Hugo Boss will Produktion aus Asien zurück nach Europa holen",
      "description": "Das Verschicken der Ware von einem Kontinent zum anderen hält Konzernchef Daniel Grieder nicht mehr für zeitgemäß, wie er der „Welt am Sonntag“ sagte.",
      "url": "https://www.tagesspiegel.de/wirtschaft/wegen-geopolitischer-spannungen-hugo-boss-will-produktion-aus-asien-zuruck-nach-europa-holen-11882501.html",
      "urlToImage": "https://www.tagesspiegel.de/images/hugo-boss-jahreszahlen/alternates/BASE_16_9_W1400/hugo-boss-jahreszahlen",
      "publishedAt": "2024-06-22T17:28:30Z",
      "content": "Der Modekonzern Hugo Boss will Teile der Produktion aus Asien zurück nach Europa holen. \r\nDie Tagesspiegel-App Aktuelle Nachrichten, Hintergründe und Analysen direkt auf Ihr Smartphone. Dazu die digi… [+1061 chars]"
    },
    {
      "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
      },
      "author": "Lucas Nolan, Lucas Nolan",
      "title": "EV Pink Slips: Elon Musk Has Slashed 14% of Tesla's Workforce",
      "description": "Recent internal records suggest that Tesla, Elon Musk's EV company has reduced its global workforce by more than 14 percent since the beginning of 2024, bringing its total headcount to just over 121,000 employees, including temporary workers.\nThe post EV Pink…",
      "url": "https://www.breitbart.com/tech/2024/06/22/ev-pink-slips-elon-musk-has-slashed-14-of-teslas-workforce/",
      "urlToImage": "https://media.breitbart.com/media/2024/06/Elon-Musk-smirks-640x335.jpg",
      "publishedAt": "2024-06-22T17:12:12Z",
      "content": "Recent internal records suggest that Tesla, Elon Musk’s EV company has reduced its global workforce by more than 14 percent since the beginning of 2024, bringing its total headcount to just over 121,… [+2930 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cnbeta.com.tw"
      },
      "author": "ytzong",
      "title": "特斯拉股东投票反对深海采矿禁令",
      "description": "Tesla的投资者批准了马斯克（Elon Musk）价值560亿美元的薪酬方案，但否决了暂停采购来自深海生态中的电动车电池金属的提议。激进投资者在年度股东大会上敦促这间车企加入其他头部同行之列，考虑深海采矿对环境的影响。\r\n\n推动企业社会责任的非牟利组织As You Sow（种瓜得瓜）去年12月提交了这份提议，请求股东暂时禁止采购来自深海海床的矿物。“我们认为Tesla作为电动汽车转型的门面，在这方面的表现落后了，”该组织的生物多样性专案协调员利维（Elizabeth Levy）说。6月13日，78%的Tesla…",
      "url": "https://www.cnbeta.com.tw/articles/tech/1435748.htm",
      "urlToImage": "https://static.cnbetacdn.com/article/2023/0125/a44c0e09c3a5bbf.webp",
      "publishedAt": "2024-06-22T17:05:11Z",
      "content": "As You Sow12TeslaElizabeth Levy\r\n61378%Tesla6%\r\n6General MotorsAs You Sow12%As You Sow\r\n130004000\r\n2024\r\n20241TeslaTeslaDerek Windham327Tesla\r\nVolvoVolkswagenBMWWorld Wildlife Fund\r\nAs You SowDaniell… [+75 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Observador.pt"
      },
      "author": "Simone Carvalho",
      "title": "Bank of America aconselha Ford, GM e Stellantis a sair da China",
      "description": "Analistas do Bank of America aconselham os três grandes construtores norte-americanos a abandonar o mercado chinês tão cedo quanto possível e a concentrar-se em baixar o preço dos veículos eléctricos.",
      "url": "https://observador.pt/2024/06/22/bank-of-america-aconselha-ford-gm-e-stellantis-a-sair-da-china/",
      "urlToImage": "https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1188%3A668%3Anowe%3A42%3A9%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2024%2F06%2F22171037%2Fo1cn01jil2ab1q9wxpzvebb-6000000005453-0-tbvideo.jpg",
      "publishedAt": "2024-06-22T17:03:13Z",
      "content": "Continua a subir de nível a guerra comercial entre a China e os EUA (além dos europeus), em que todos têm a perder. Só que os chineses não respeitam as leis do mercado estipuladas pela Organização Mu… [+2545 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Daily Caller"
      },
      "author": "David Blackmon",
      "title": "DAVID BLACKMON: US EV Industry Shifts Back Into Reality Gear",
      "description": "What we are seeing here is a rapid shifting back to reality in the US auto industry.",
      "url": "https://dailycaller.com/2024/06/22/david-blackmon-us-ev-industry-shifts-back-into-reality-gear/",
      "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2021/08/GettyImages-1332557776.jpg",
      "publishedAt": "2024-06-22T16:46:48Z",
      "content": "At the start of each year, I write a piece in which I make a set of predictions about what will happen in the energy space during the coming 12 months. One prediction I made in this year’s story focu… [+4622 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Clubic"
      },
      "author": "Mélina LOUPIA",
      "title": "Les Tesla Bots vont avoir de la concurrence avec ces sex dolls bourrées d'IA promises pour être très réalistes",
      "description": "La course aux robots humanoïdes s'accélère. D'un côté, Tesla et ses Bots prometteurs. De l'autre, un géant chinois qui prépare des poupées nouvelle génération bardées d'intelligence artificielle. Ces dernières pourraient bien créer la surprise sur un marché e…",
      "url": "https://www.clubic.com/actualite-530466-les-tesla-bots-vont-avoir-de-la-concurrence-avec-ces-sex-dolls-bourrees-d-ia-promises-pour-etre-tres-realistes.html",
      "urlToImage": "https://pic.clubic.com/v1/images/1687329/raw",
      "publishedAt": "2024-06-22T16:35:00Z",
      "content": "Face à ces poupées nouvelle génération, la concurrence s'organise. Tesla fait figure de poids lourd avec ses fameux bots Optimus. Elon Musk ne tarit pas d'éloges sur ces assistants robotiques censés … [+1140 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool Australia"
      },
      "author": "Sebastian Bowen",
      "title": "It's up 3,500%, but here's why I'm still not buying Nvidia stock",
      "description": "I wish I bought Nvidia in 2023, but I'm not buying it in 2024.\nThe post It's up 3,500%, but here's why I'm still not buying Nvidia stock appeared first on The Motley Fool Australia.",
      "url": "https://www.fool.com.au/2024/06/23/its-up-3500-but-heres-why-im-still-not-buying-nvidia-stock/",
      "urlToImage": "https://www.fool.com.au/wp-content/uploads/2022/04/nvidia1.jpg",
      "publishedAt": "2024-06-22T16:30:00Z",
      "content": "Unless you've been living under a rock (or else aren't too interested in finance or investing), you've probably heard about the explosive rise of US chip and artificial intelligence (AI) stock NVIDIA… [+2863 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Quentin Fottrell",
      "title": "‘Her world is rocked’: A friend hit the jackpot, but her old friends are abandoning her one by one. Is there a cure for jealousy?",
      "description": "“Is this jealousy or a change in perceived status that has upended her friendships? Any ideas or cures?”",
      "url": "https://www.marketwatch.com/story/her-world-is-rocked-a-friend-hit-the-jackpot-but-her-old-friends-are-abandoning-her-one-by-one-is-there-a-cure-for-jealousy-b031283a",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tO61yd.Pk_DbuvqXWREdtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/marketwatch_hosted_869/65b294113408a54e548339e6099f1cf4",
      "publishedAt": "2024-06-22T16:16:00Z",
      "content": "Could the added cash be keeping them away? (Photo subject is a model.) - Getty Images/iStockphoto\r\nDear Quentin,\r\nA friend hit the jackpot and came into sudden wealth. Good for her, but for some reas… [+6839 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Elon Musk Once Said 'Collapsing Birth Rate Is The Biggest Danger Civilization Faces:' He Has Fathered 12 Children To Date, Including One We Didn't Know About",
      "description": "Tesla and SpaceX CEO Elon Musk welcomed another child into his family, marking his third with Neuralink executive Shivon Zilis.\nWhat Happened: Zilis, who serves as Neuralink’s director of special projects, and Musk, had their third child earlier this year, re…",
      "url": "https://biztoc.com/x/746c7c5cf3b5b62a",
      "urlToImage": "https://biztoc.com/cdn/746c7c5cf3b5b62a_s.webp",
      "publishedAt": "2024-06-22T16:11:59Z",
      "content": "Tesla and SpaceX CEO Elon Musk welcomed another child into his family, marking his third with Neuralink executive Shivon Zilis.What Happened: Zilis, who serves as Neuralinks director of special proje… [+131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AutoExpress"
      },
      "author": "Tom Jervis",
      "title": "Behind the badge: Kia's new look and new approach",
      "description": "It's a new look and a new approach to customer service for the Korean brand. We visit Kia's flagship UK showroom to see how the ‘premium’ ethos works",
      "url": "https://www.autoexpress.co.uk/kia/363508/rebrand-heralds-new-era-kia",
      "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1718970410/autoexpress/2024/06/AW607963_dhe67h.jpg",
      "publishedAt": "2024-06-22T16:03:38Z",
      "content": "Of course, general manager James Grimes admits the priority will always be to sell cars GWR Kia alone sells roughly 4,000 cars per year and growing but he did say that the brands growing popularity h… [+1770 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Turbo.fr"
      },
      "author": "Maxime Duchemin",
      "title": "CONFIG – Audi RS e-Tron GT Performance : ça fait cher la fausse Porsche Taycan !",
      "description": "En début de semaine, Audi présentait son e-Tron GT restylée ! Hasard du calendrier, on configurait mercredi une Porsche Taycan Turbo S… Alors autant organiser un match, en s'occupant cette fois de la version aux 4 anneaux ! Pour jouer le jeu à fond, on a choi…",
      "url": "https://www.turbo.fr/audi/e-tron-gt/actualites-auto/config-audi-rs-e-tron-gt-performance-ca-fait-cher-la-fausse-porsche-taycan-196202",
      "urlToImage": "https://www.turbo.fr/sites/default/files/2024-06/Audi%20e-Tron%20GT.jpeg",
      "publishedAt": "2024-06-22T16:00:49Z",
      "content": "En début de semaine, Audi présentait son e-Tron GT restylée ! Hasard du calendrier, on configurait mercredi une Porsche Taycan Turbo S Alors autant organiser un match, en s'occupant cette fois de la … [+3667 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Claire Boyte-White",
      "title": "How ‘Frugal’ Billionaire Elon Musk Splurges: An Inside Look at His $78 Million Private Jet",
      "description": "Elon Musk's comments about his frugal spending habits have been widely publicized, including that he stays in friends' spare rooms when working at Tesla's...",
      "url": "https://finance.yahoo.com/news/frugal-billionaire-elon-musk-splurges-160034287.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ji5PBekyHiPlxjl9THvwJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/6e0018167d5265ac41e3583234768651",
      "publishedAt": "2024-06-22T16:00:34Z",
      "content": "Mike Windle / Getty Images\r\nElon Musks comments about his frugal spending habits have been widely publicized, including that he stays in friends spare rooms when working at Teslas Bay Area headquarte… [+5036 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motor.ru"
      },
      "author": "Александр Пономарёв",
      "title": "Дубайская туристическая полиция получила электрический пикап Tesla Cybertruck",
      "description": "Дубайская туристическая полиция получила электрический пикап Tesla Cybertruck. В начале июня калифорнийская компания Unplugged Performance представила новый проект фирменного подразделения UP.FIT — на базе пикапа Tesla Cybertruck американские специалисты пост…",
      "url": "https://motor.ru/news/cybertruck-dubai-22-06-2024.htm",
      "urlToImage": "https://motor.ru/imgs/2024/06/22/17/6511099/aa3e2e28906b4695d178528f98de43346e153657.jpg",
      "publishedAt": "2024-06-22T16:00:00Z",
      "content": "Tesla Cybertruck. Unplugged Performance UP.FIT Tesla Cybertruck , . Cybertruck , . , , ."
    },
    {
      "source": {
        "id": null,
        "name": "Westernjournal.com"
      },
      "author": "Jack Davis",
      "title": "Nightmare Situation as Tesla Dies in Heatwave, Trapping Toddler Inside",
      "description": "\"When it works, it’s great. But when it doesn’t, it can be deadly,\" a Tesla owner says after an experience with a dead EV battery.",
      "url": "https://www.westernjournal.com/nightmare-situation-tesla-dies-heatwave-trapping-toddler-inside/",
      "urlToImage": "https://www.westernjournal.com/wp-content/uploads/2024/06/tesla.jpg",
      "publishedAt": "2024-06-22T15:45:01Z",
      "content": "When the battery on a Tesla dies, the interior can be little more than a giant oven for someone trapped inside, as an Arizona woman learned.\r\nRenee Sanchez recently learned how quickly owning an EV c… [+2552 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Shiftdelete.net"
      },
      "author": "Ahmet Safa",
      "title": "Tesla rakiplerine müşteri kaptırdı! Rüzgar terse döndü",
      "description": "Bu içerik ilk olarak Tesla rakiplerine müşteri kaptırdı! Rüzgar terse döndü adresinde yayınlandı Teknoloji Haberleri - ShiftDelete.Net.",
      "url": "https://shiftdelete.net/tesla-elektrikli-arac-rakiplerine-musteri-kaptirdi",
      "urlToImage": "https://ares.shiftdelete.net/2024/06/tesla-elektrikli-arac-rakiplerine-musteri-kaptirdi-e1719061001895.jpg",
      "publishedAt": "2024-06-22T15:30:00Z",
      "content": "Tesla, elektrikli araç pazarnda hala baskn durumda olmasna ramen, pazar payn yava yava kaybediyor. Mart aynda Tesla, elektrikli araç segmentinde 50 bin 474 kayt ile liderliini sürdürdü. Ancak, bu rak… [+1921 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "David Nadelle",
      "title": "10 Best Upper-Class Cars in 2024",
      "description": "Everyone recognizes that second only to buying a house, purchasing a car is one of the biggest financial decisions you'll make. Yet, despite popular opinion ...",
      "url": "https://finance.yahoo.com/news/10-best-upper-class-cars-150044194.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/HxJhN6KcGHli1MH2b7L6hw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/18c8fb6642564067a1c4c89f29086da6",
      "publishedAt": "2024-06-22T15:00:44Z",
      "content": "Everyone recognizes that second only to buying a house, purchasing a car is one of the biggest financial decisions youll make. Yet, despite popular opinion which dictates people should spend only 10%… [+5590 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Portfolio.hu"
      },
      "author": "Portfolio.hu",
      "title": "Melyik lehet a világ első 4000 milliárd dolláros cége?",
      "description": "Az Nvidia a héten letaszította a trónról a Microsoftot, ezzel pedig a világ legértékesebb cégévé vált, immáron pedig már három olyan nagy tőzsdei cég is van, melyek piaci értéke egyaránt 3000 milliárd dollár felett van. Az első vállalat azonban amely elérheti…",
      "url": "https://www.portfolio.hu/uzlet/20240622/melyik-lehet-a-vilag-elso-4000-milliard-dollaros-cege-694021",
      "urlToImage": "https://pcdn.hu/articles/images-xl/d/o/l/dollar-deviza-arfolyam-604338.jpg",
      "publishedAt": "2024-06-22T14:15:00Z",
      "content": "Ha csak az elmúlt hónapok trendjeibl indulunk ki, akkor az Nvidia, az Apple, és a Microsoft alig több mint 3 év múlva léphetnék át a 4000 milliárd dolláros szintet, ha azonban a rövidtávú trendeket n… [+2832 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "tagesschau.de"
      },
      "author": "Jacqueline Piwon, rbb",
      "title": "Abschiedsstimmung im Brandenburger Landtag",
      "description": "Im September wählt Brandenburg ein neues Parlament. Die aktuelle Kenia-Koalition wird es in der Form nicht mehr geben. Viele Abgeordnete verlassen den Landtag freiwillig, andere bangen um den Wiedereinzug ins Parlament. Von Jacqueline Piwon.",
      "url": "https://www.tagesschau.de/inland/innenpolitik/landtag-brandenburg-104.html",
      "urlToImage": "https://images.tagesschau.de/image/297c6e8e-bb6a-40f6-b1bd-8f7d09a91091/AAABkDqWnLw/AAABjwnlFvA/16x9-1280/landtag-abgeordnete-brandenburg-100.jpg",
      "publishedAt": "2024-06-22T13:39:05Z",
      "content": "Stand: 22.06.2024 15:39 Uhr\r\nIm September wählt Brandenburg ein neues Parlament. Die aktuelle Kenia-Koalition wird es in der Form nicht mehr geben. Viele Abgeordnete verlassen den Landtag freiwillig,… [+4365 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Steve Hanley",
      "title": "Europe Battery Factory Plans Are In A Shambles",
      "description": "On June 20, 2024, Reuters reported some rather shocking news regarding BMW and its electric car plans. The headline read, “BMW cancels $2 billion battery cells contract with Northvolt.” The report said that BMW had cancelled a 2 billion euros  ($2.15 billion)…",
      "url": "https://cleantechnica.com/2024/06/22/europe-battery-factory-plans-are-in-a-shambles/",
      "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/04/Northvolt-Scania-battery-1.jpg",
      "publishedAt": "2024-06-22T13:37:55Z",
      "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nOn June 20, 2024, Reuters reported some rather shocking news regarding BMW and its electric car plans. The he… [+8748 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Der Tagesspiegel",
      "title": "Tesla kracht in Berliner Krankenhaus: Klinikpersonal versorgt Insassen direkt – Mutter und Neugeborenes im Auto",
      "description": "In Spandau fährt ein Tesla in die frühere Rettungsstelle des Waldkrankenhauses. Im Auto sitzt auch eine Frau mit ihrem zwei Tage alten Kind. Der Wagen soll „plötzlich stark beschleunigt“ haben.",
      "url": "https://www.tagesspiegel.de/berlin/tesla-kracht-in-berliner-krankenhaus-klinikpersonal-versorgt-insassen-direkt--mutter-und-neugeborenes-im-auto-11881994.html",
      "urlToImage": "https://www.tagesspiegel.de/images/evangelisches-waldkrankenhaus-spandau/alternates/BASE_16_9_W1400/evangelisches-waldkrankenhaus-spandau",
      "publishedAt": "2024-06-22T13:35:59Z",
      "content": "Ein Auto ist auf dem Gelände des Evangelischen Waldkrankenhauses im Berliner Bezirk Spandau in ein Gebäude gekracht. Der Wagen habe die Fassade durchbrochen und sei erst nach rund fünf Metern zum Ste… [+1643 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Der Tagesspiegel",
      "title": "Tesla kracht in Berliner Krankenhaus: Verletzte Insassen werden vom Klinikpersonal direkt versorgt",
      "description": "In Spandau fährt ein Auto in die frühere Rettungsstelle des Evangelischen Waldkrankenhauses. Der Unfall geht halbwegs glimpflich aus.",
      "url": "https://www.tagesspiegel.de/berlin/tesla-kracht-in-berliner-krankenhaus-verletzte-insassen-werden-vom-klinikpersonal-direkt-versorgt-11881994.html",
      "urlToImage": "https://www.tagesspiegel.de/images/evangelisches-waldkrankenhaus-spandau/alternates/BASE_16_9_W1400/evangelisches-waldkrankenhaus-spandau",
      "publishedAt": "2024-06-22T13:35:59Z",
      "content": "Ein Auto ist auf dem Gelände des Evangelischen Waldkrankenhauses im Berliner Bezirk Spandau in ein Gebäude gekracht. Der Wagen habe die Fassade durchbrochen und sei erst nach rund fünf Metern zum Ste… [+1127 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Der Tagesspiegel",
      "title": "Tesla kracht in Berliner Krankenhaus: Mutter und Neugeborenes verletzt – machte der Wagen sich selbstständig?",
      "description": "In Spandau fährt ein Tesla in die frühere Rettungsstelle des Waldkrankenhauses. Im Auto sitzt auch eine Frau mit ihrem zwei Tage alten Kind. Der Wagen soll „plötzlich stark beschleunigt“ haben.",
      "url": "https://www.tagesspiegel.de/berlin/tesla-kracht-in-berliner-krankenhaus-mutter-und-neugeborenes-verletzt--machte-der-wagen-sich-selbststandig-11881994.html",
      "urlToImage": "https://www.tagesspiegel.de/images/evangelisches-waldkrankenhaus-spandau/alternates/BASE_16_9_W1400/evangelisches-waldkrankenhaus-spandau",
      "publishedAt": "2024-06-22T13:35:59Z",
      "content": "Ein Auto ist auf dem Gelände des Evangelischen Waldkrankenhauses im Berliner Bezirk Spandau in ein Gebäude gekracht. Der Wagen habe die Fassade durchbrochen und sei erst nach rund fünf Metern zum Ste… [+1950 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Freethoughtblogs.com"
      },
      "author": "Mano Singham",
      "title": "Sacrificing functionality for style",
      "description": "I recently got a ride from a friend in his Tesla and he showed me the many electric features that have replaced formerly mechanical ones, like a button that when touched opens the door, rather than a latch that you pull to release the catch. Many of the famil…",
      "url": "https://freethoughtblogs.com/singham/2024/06/22/sacrificing-functionality-for-style/",
      "urlToImage": "https://freethoughtblogs.com/singham/wp-content/themes/ftb2-theme/images/logo.png",
      "publishedAt": "2024-06-22T13:34:20Z",
      "content": "I recently got a ride from a friend in his Tesla and he showed me the many electric features that have replaced formerly mechanical ones, like a button that when touched opens the door, rather than a… [+3997 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Freerepublic.com"
      },
      "author": "The Register (UK)",
      "title": "Tesla sued for 'systemic' racism at its Fremont, California plant",
      "description": "Yet another lawsuit was this week filed against Tesla citing a \"systemically … racially hostile work environment\" at the company's Fremont, California plant. This one's even widening the envelope to include similar allegations of bad behavior at Tesla's batte…",
      "url": "https://freerepublic.com/focus/f-news/4245989/posts",
      "urlToImage": null,
      "publishedAt": "2024-06-22T13:15:53Z",
      "content": "Skip to comments.\r\nTesla sued for 'systemic' racism at its Fremont, California plantThe Register (UK) ^\r\n | Fri 21 Jun 2024 //\r\n | Brandon Vigliarol\r\nPosted on 06/22/2024 6:15:53 AM PDT by Salman\r\nYe… [+4050 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Electrek"
      },
      "author": "Fred Lambert",
      "title": "Elon Musk haters vandalized dozens of Tesla Cybertrucks",
      "description": "Elon Musk haters have vandalized dozens of Tesla Cybertrucks being held ahead of delivery at a parking lot in Florida.\n\n\n\n more…",
      "url": "http://electrek.co/2024/06/22/elon-musk-haters-vandalized-dozens-tesla-cybertrucks/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/06/Tesla-Cybertruck-Elon-haters.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-06-22T13:13:46Z",
      "content": "Elon Musk haters have vandalized dozens of Tesla Cybertrucks being held ahead of delivery at a parking lot in Florida.\r\nAs we previously reported, Tesla has briefly halted Cybertruck deliveries due t… [+1597 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "SPROUT (NASDAQ:SPT) FRAUD ALERT: Sprout Social, Inc. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "description": "SPROUT (NASDAQ:SPT) FRAUD ALERT: Sprout Social, Inc. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "url": "https://www.investing.com/news/press-releases/sprout-nasdaqspt-fraud-alert-sprout-social-inc-sued-for-securities-fraud-investors-who-lost-money-are-reminded-to-contact-bfa-law-about-the-lawsuit-93CH-3492783",
      "urlToImage": "https://i-invdn-com.investing.com/news/international_newspapers_69x52._800x533_L_1419494241.jpg",
      "publishedAt": "2024-06-22T13:12:13Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP announces the upcoming July 12, 2024, deadline in the Sprout Social (Nasdaq: NASDAQ:SPT) Securities Class Actio… [+2572 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "CRM INVESTOR ALERT: Salesforce, Inc. (NYSE:CRM) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "description": "CRM INVESTOR ALERT: Salesforce, Inc. (NYSE:CRM) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "url": "https://www.investing.com/news/press-releases/crm-investor-alert-salesforce-inc-nysecrm-is-being-investigated-for-securities-fraud-by-bfa-law-investors-who-lost-money-are-reminded-to-contact-the-firm-93CH-3492782",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEA9P078_L.jpg",
      "publishedAt": "2024-06-22T13:12:10Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into Salesforce, Inc. (NYSE:CRM) for potential violations of the fede… [+2369 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "TERADATA (NYSE:TDC) FRAUD ALERT: Teradata Corp. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "description": "TERADATA (NYSE:TDC) FRAUD ALERT: Teradata Corp. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "url": "https://www.investing.com/news/press-releases/teradata-nysetdc-fraud-alert-teradata-corp-sued-for-securities-fraud-investors-who-lost-money-are-reminded-to-contact-bfa-law-about-the-lawsuit-93CH-3492781",
      "urlToImage": "https://i-invdn-com.investing.com/news/news_headline_rolled_69x52._800x533_L_1419494221.jpg",
      "publishedAt": "2024-06-22T13:08:16Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP announces the upcoming August 13, 2024 deadline in the Teradata Corp. (NYSE: NYSE:TDC) securities class action … [+3026 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "VENTYX INVESTOR ALERT: Ventyx's (Nasdaq:VTYX) Board is Being Investigated for Insider Trading, Long-term Investors Are Encouraged to Contact the Firm for Details",
      "description": "VENTYX INVESTOR ALERT: Ventyx's (Nasdaq:VTYX) Board is Being Investigated for Insider Trading, Long-term Investors Are Encouraged to Contact the Firm for Details",
      "url": "https://www.investing.com/news/press-releases/ventyx-investor-alert-ventyxs-nasdaqvtyx-board-is-being-investigated-for-insider-trading-longterm-investors-are-encouraged-to-contact-the-firm-for-details-93CH-3492780",
      "urlToImage": "https://i-invdn-com.investing.com/news/World_News_8_800x533_L_1420026210.jpg",
      "publishedAt": "2024-06-22T13:08:11Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP is investigating Ventyx Biosciences's (Nasdaq:VTYX) Board for Insider Trading. If you are a shareholder of Vent… [+1939 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "CEREVEL (NASDAQ:CERE) INVESTOR ALERT: Cerevel's $45 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "description": "CEREVEL (NASDAQ:CERE) INVESTOR ALERT: Cerevel's $45 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "url": "https://www.investing.com/news/press-releases/cerevel-nasdaqcere-investor-alert-cerevels-45-per-share-offer-is-being-investigated-by-bfa-law-shareholders-are-encouraged-to-contact-the-firm-93CH-3492778",
      "urlToImage": "https://i-invdn-com.investing.com/news/news_headline_rolled_69x52._800x533_L_1419494221.jpg",
      "publishedAt": "2024-06-22T13:08:09Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading law firm Bleichmar Fonti &amp; Auld LLP is investigating the merger between Cerevel Therapeutics Holdings, Inc. (Nasdaq: CERE) and AbbVie (NYSE:ABB… [+2489 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "POWERSCHOOL (NYSE:PWSC) INVESTOR ALERT: PowerSchool's $22.80 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "description": "POWERSCHOOL (NYSE:PWSC) INVESTOR ALERT: PowerSchool's $22.80 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "url": "https://www.investing.com/news/press-releases/powerschool-nysepwsc-investor-alert-powerschools-2280-per-share-offer-is-being-investigated-by-bfa-law-shareholders-are-encouraged-to-contact-the-firm-93CH-3492779",
      "urlToImage": "https://i-invdn-com.investing.com/news/World_News_10_800x533_L_1420026292.jpg",
      "publishedAt": "2024-06-22T13:08:09Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP is investigating the PowerSchool Holdings, Inc. (PowerSchool) (NYSE: PWSC) buyout by Bain Capital. If you inves… [+2955 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "CAE INVESTOR ALERT: CAE, Inc. (NYSE:CAE) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "description": "CAE INVESTOR ALERT: CAE, Inc. (NYSE:CAE) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "url": "https://www.investing.com/news/press-releases/cae-investor-alert-cae-inc-nysecae-is-being-investigated-for-securities-fraud-by-bfa-law-investors-who-lost-money-are-reminded-to-contact-the-firm-93CH-3492777",
      "urlToImage": "https://i-invdn-com.investing.com/news/World_News_8_800x533_L_1420026210.jpg",
      "publishedAt": "2024-06-22T13:08:07Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into CAE, Inc. (NYSE: NYSE:CAE) for potential violations of the feder… [+2365 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.is.fi"
      },
      "author": "Olli Tiihonen",
      "title": "Kun Perttu ja Sara karauttavat autoillansa huoltoasemalle, hämmästys on suurta: ”Oletteko laturia blokkaamassa?”",
      "description": "Tällaisia autoja ei liiemmin nähdä latauspaikoilla.",
      "url": "https://www.is.fi/autot/art-2000010511068.html",
      "urlToImage": "https://is.mediadelivery.fi/img/some/default/c415ab4a514a133b8f629308c4612ef1.jpg",
      "publishedAt": "2024-06-22T13:00:00Z",
      "content": "Tällaisia autoja ei liiemmin nähdä latauspaikoilla.Artikkeli on julkaistu alun perin 7.4.2024.\r\nMoni on hämmentynyt, kun Sara ja Perttu Ahola karauttavat autoillaan sähköautojen latauspaikalle.\r\nSinä… [+6657 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nacion.com"
      },
      "author": "Damián Arroyo C., La Nación / Argentina / GDA",
      "title": "Elon Musk revela su técnica infalible para contratar a los mejores talentos",
      "description": "Elon Musk comparte su técnica infalible para contratar talentos excepcionales. Descubra la pregunta clave que utiliza para identificar a los mejores candidatos.",
      "url": "https://www.nacion.com/revista-dominical/elon-musk-revela-su-tecnica-infalible-para/MWJS47S7XFAQFETO7CY6TXEBFA/story/",
      "urlToImage": "https://www.nacion.com/resizer/IIqo_NWEgNfsYEmViPOsjX2MwHg=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/AJYGMFJR4JA5HD74GLZM7NSHHM.jpg",
      "publishedAt": "2024-06-22T12:59:00Z",
      "content": "Elon Musk, conocido por su capacidad para innovar y liderar grandes proyectos, tiene una pregunta clave que utiliza en sus entrevistas de trabajo para detectar a los mejores candidatos. \r\nDurante una… [+2018 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Epravda.com.ua"
      },
      "author": "Економічна правда",
      "title": "Міністр економіки Німеччини не вважає нові мита ЄС на китайські електромобілі покаранням",
      "description": "Міністр економіки Німеччини Роберт Хабек заявив, що запропоновані Європейським Союзом тарифи на китайські електромобілі не є \"покаранням\".",
      "url": "https://www.epravda.com.ua/news/2024/06/22/715608/",
      "urlToImage": "https://eimg.pravda.com/images/doc/7/1/715608_fb_image_ukr_2024_06_22_16_00_13.png",
      "publishedAt": "2024-06-22T12:57:10Z",
      "content": ", \"\".\r\n , Reuters.\r\n ', , , .\r\n , , , .\r\n\" , . , , , , , . -\",  - .\r\n , ' , .\r\n , , . .\r\n , , .\r\n : . ?\r\n:\r\n, .\r\n '- , .\r\n .\r\n 38,1%, BYD Co. Tesla Inc."
    },
    {
      "source": {
        "id": null,
        "name": "Epravda.com.ua"
      },
      "author": "Экономическая правда",
      "title": "Министр экономики Германии не считает новые пошлины ЕС на китайские электромобили наказанием",
      "description": "Министр экономики Германии Роберт Хабек заявил, что предложенные Европейским Союзом тарифы на китайские электромобили не являются \"наказанием\".",
      "url": "https://www.epravda.com.ua/rus/news/2024/06/22/715608/",
      "urlToImage": "https://eimg.pravda.com/images/doc/7/1/715608_fb_image_rus_2024_06_22_16_00_14.png",
      "publishedAt": "2024-06-22T12:57:10Z",
      "content": ", \"\".\r\n , Reuters.\r\n , , , .\r\n , , , .\r\n\" , . , , , , , . -\", - .\r\n , , .\r\n , , . .\r\n , , .\r\n : . ?\r\n:\r\n, .\r\n - , .\r\n .\r\n 38,1%, BYD Co. Tesla Inc."
    },
    {
      "source": {
        "id": null,
        "name": "ETF Daily News"
      },
      "author": "MarketBeat News",
      "title": "Fragasso Group Inc. Sells 104 Shares of Tesla, Inc. (NASDAQ:TSLA)",
      "description": "Fragasso Group Inc. lessened its position in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 5.5% during the first quarter, according to the company in its most recent filing with the Securities & Exchange Commission. The fund owned 1,787 shares of the electric ve…",
      "url": "https://www.etfdailynews.com/2024/06/22/fragasso-group-inc-sells-104-shares-of-tesla-inc-nasdaqtsla/",
      "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
      "publishedAt": "2024-06-22T12:52:43Z",
      "content": "Fragasso Group Inc. lessened its position in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 5.5% during the first quarter, according to the company in its most recent filing with the Securities &amp; Exc… [+5924 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mail.ru"
      },
      "author": "София Глебездина",
      "title": "Какова жизнь с мозговым чипом и чем опасны ополаскиватели для рта? Дайджест",
      "description": "А также о новых функциях WhatsApp, нейросети, которая генерирует рецепты ядов и масштабном сбое работы соцсетей в России.\nВ WhatsApp появились новые функции для видеозвонков\nПользователям мессенджера WhatsApp скоро (предположительно, в следующем обновлении) с…",
      "url": "https://hi-tech.mail.ru/review/111422-10-top-news-june-3/",
      "urlToImage": "https://resizer.mail.ru/p/980bba4f-6476-5ab2-b4c7-c5c02fdf1cc1/AQAK3d5_1mOR1ncvmDeJyaedHMXllzsh-brqFcop6l1wAvkpTZpDmGHzoXjrD2Pc2brhFiFW-McZ5G8FKB79v4FWZ0g.png",
      "publishedAt": "2024-06-22T12:30:00Z",
      "content": "<ul><li>.    WhatsApp. ,   ;\r\n</li><li> .   ,     ;\r\n</li><li>.     . , ,   .    iOS;\r\n</li><li> «Low light mode».   . « » ,     ,   ;\r\n</li><li> .   3D-.       ,  .\r\n</li></ul>\r\n,   260   . ,     . … [+907 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "Elon Musk predicts universal basic income will take off once AI replaces workers. Read his 8 best quotes about UBI",
      "description": "Elon Musk\nPatrick Pleul/AFP/Getty Images\nElon Musk sees universal basic income as a necessary response to automation eliminating human jobs.\nThe Tesla chief predicts there will be \"universal high income\" that will give people more free time.\nHere are Musk's e…",
      "url": "https://biztoc.com/x/9961bee169288aeb",
      "urlToImage": "https://biztoc.com/cdn/9961bee169288aeb_s.webp",
      "publishedAt": "2024-06-22T12:19:54Z",
      "content": "Elon MuskPatrick Pleul/AFP/Getty ImagesElon Musk sees universal basic income as a necessary response to automation eliminating human jobs.The Tesla chief predicts there will be \"universal high income… [+133 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Tamires Ferreira",
      "title": "Segundo elétrico da Xiaomi é visto nas ruas da China – EV mira na Tesla",
      "description": "Fotos vazadas mostraram veículo coberto andando pelas ruas da China \nO post Segundo elétrico da Xiaomi é visto nas ruas da China – EV mira na Tesla  apareceu primeiro em Olhar Digital.",
      "url": "https://olhardigital.com.br/2024/06/22/carros-e-tecnologia/segundo-eletrico-da-xiaomi-e-visto-nas-ruas-da-china-ev-mira-na-tesla/",
      "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/06/xiaomi-su7.jpg",
      "publishedAt": "2024-06-22T12:19:29Z",
      "content": "Após seis meses do lançamento do seu primeiro veículo elétrico, o SU7, a Xiaomi já tem um novo EV em teste, este para competir direto com o Model Y da Tesla, conforme relatou a Electrek. O possível m… [+1407 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Theron Mohamed",
      "title": "Elon Musk predicts universal basic income will take off once AI replaces workers. Read his 8 best quotes about UBI.",
      "description": "The Tesla and SpaceX chief predicts a \"universal high income\" as AI replaces workers, giving them more freedom in how they spend time and money.",
      "url": "https://www.businessinsider.com/elon-musk-universal-basic-income-ubi-ai-automation-unemployment-quotes-2024-6",
      "urlToImage": "https://i.insider.com/66758bf7886e840164beb996?width=1200&format=jpeg",
      "publishedAt": "2024-06-22T12:14:01Z",
      "content": "Elon MuskPatrick Pleul/AFP/Getty Images\r\n<ul><li>Elon Musk sees universal basic income as a necessary response to automation eliminating human jobs.</li><li>The Tesla chief predicts there will be \"un… [+3544 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Unwire.hk"
      },
      "author": "藍骨",
      "title": "Tesla 今年已裁員至少 14%　全球員工人數減至約 12 萬",
      "description": "根據 Tesla 內部記錄，該公司自 2023 年以來進行的大規模裁員已將全球員工人數（包括臨時工）縮減至 121,000 人左右，相較 2023 年底減少了 14% 以上。\nThe post Tesla 今年已裁員至少 14%　全球員工人數減至約 12 萬 appeared first on 香港 unwire.hk 玩生活．樂科技.",
      "url": "https://unwire.hk/2024/06/22/tesla-has-downsized-by-at-least-14percent-this-year/life-tech/auto/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/06/download-37-694x390.jpg",
      "publishedAt": "2024-06-22T12:00:46Z",
      "content": "Tesla 2023 121,000 2023 14% \r\n 6 17 Tesla CEO Elon Musk Elon Musk \r\nTesla 4 Elon Musk 10% Elon Musk 25% 30%\r\n Tesla Supercharger \r\nCNBC\r\n:<li>Honda N-VAN e 10 15 </li> <li> ONVO </li> <li>Polestar Ph… [+24 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Katie Collins",
      "title": "EV Charging vs. Gas: We Do the Math to See Which is Cheaper - CNET",
      "description": "Whether or not EV operating costs are actually cheaper than a gas-powered car is a hot debate on Reddit. We settle the debate with math and an EV expert.",
      "url": "https://www.cnet.com/home/electric-vehicles/ev-charging-vs-gas-we-do-the-math-to-see-which-is-cheaper/",
      "urlToImage": "https://www.cnet.com/a/img/resize/7cab13b3429e8b95e5aad49b09137c801453c05e/hub/2024/06/20/a38b6d80-1aee-4f7d-8dcb-d8f11e462377/240617-feature-image-car-plates-v01-2.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-06-22T12:00:06Z",
      "content": "EV enthusiasts -- particularly the ones with vanity license plates like \"GAS LOL\" -- like to brag about the cost savings of charging their electric vehicle compared to fueling a gas-powered car. \r\nLo… [+10179 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": "Federico González del Solar",
      "title": "Los viajes de Javier Milei por el mundo, con los premios personales como un atractivo adicional",
      "description": "El Presidente acumula millas a fuerza de distinciones y más encuentros informales que oficiales; Estados Unidos es su destino predilecto, pero también pone el foco en Europa",
      "url": "https://www.lanacion.com.ar/politica/los-viajes-de-javier-milei-por-el-mundo-con-los-premios-personales-como-un-atractivo-adicional-nid22062024/",
      "urlToImage": "https://arc-static.glanacion.com/pf/resources/images/placeholderLN.jpg?d=1623",
      "publishedAt": "2024-06-22T12:00:00Z",
      "content": "Con su última gira por Europa partida en dos tramos, el presidente Javier Milei acumulará para fin de mes un total de nueve salidas del país, con 14 viajes realizados que lo llevaron a tocar suelo en… [+5084 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.bnr.nl"
      },
      "author": "BNR Webredactie",
      "title": "Importheffingen op Chinese auto’s leiden voorlopig niet tot prijsstijgingen",
      "description": "Tesla is voorlopig de enige autofabrikant die zijn prijzen verhoogt vanwege de importheffingen die de Europese Unie oplegt. Andere fabrikanten die in China produceren – zoals het Chinese BYD – kiezen er voorlopig voor de belasting op te vangen in hun winstmar…",
      "url": "https://www.bnr.nl/nieuws/mobiliteit/10550804/importheffingen-op-chinese-autos-leiden-voorlopig-niet-tot-prijsstijgingen",
      "urlToImage": "https://bnr-external-prod.imgix.net/425656-425661.jpeg?q=45&w=1500&auto=format,compress",
      "publishedAt": "2024-06-22T12:00:00Z",
      "content": "Tesla heeft gewaarschuwd dat het zijn prijzen voor de Model 3 moet verhogen vanwege de importheffingen op Chinese auto's. De importheffingen werden vorige week bekendgemaakt en kunnen oplopen tot wel… [+1383 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "Tesla Stock (NASDAQ:TSLA): 2 Catalysts That Indicate a Turnaround",
      "description": "Tesla (NASDAQ:TSLA) stock has performed poorly over the past 12 months due to several factors, ranging from strong competition in the EV space to CEO Elon Musk’s distractions from the company, all exacerbated by valuation concerns. However, I believe two shor…",
      "url": "https://biztoc.com/x/a149a7556cc05213",
      "urlToImage": "https://biztoc.com/cdn/a149a7556cc05213_s.webp",
      "publishedAt": "2024-06-22T11:57:27Z",
      "content": "Tesla (NASDAQ:TSLA) stock has performed poorly over the past 12 months due to several factors, ranging from strong competition in the EV space to CEO Elon Musks distractions from the company, all exa… [+135 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cnbeta.com.tw"
      },
      "author": "ytzong",
      "title": "特斯拉今年裁员比例已超14% 马斯克全员信还透露一个信息",
      "description": "今年4月，特斯拉CEO马斯克宣布将进行大幅裁员，裁员比例超过10%。不过根据第一财经记者了解到的情况，这一裁员比例可能会高达20%。特斯拉今年以来的裁员比例仍在不断扩大。最新内部文件显示，该公司目前员工人数约为12.1万名，这较去年年底该公司超过14万名员工数量削减超过14%。\r\n\n今年4月，特斯拉CEO马斯克宣布将进行大幅裁员，裁员比例超过10%。不过根据第一财经记者了解到的情况，这一裁员比例可能会高达20%。在裁员的同时，马斯克还称要奖励表现出色的员工。6月17日，马斯克在一封发给全体员工的邮件中表示，特斯拉…",
      "url": "https://www.cnbeta.com.tw/articles/tech/1435740.htm",
      "urlToImage": "https://n.sinaimg.cn/sinakd20240622s/225/w1098h727/20240622/1b56-13b5c4fddd69825c1318716d68ecb6d5.jpg",
      "publishedAt": "2024-06-22T11:35:13Z",
      "content": "4CEO10%20%\r\n617\r\n27%Dan IvesAI\r\n2019inefficiency level25%30%\r\n8.5%202420239%12\r\n429·Rebecca Tinucci·Daniel Ho500\r\n7\r\nTesla Master Plan 43040\r\n2025Optimus100200\r\n885Dojo\r\n2025"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      "title": "‘The Next Domino To Fall’—Tech Billionaire Primes Bitcoin For A Massive Price Shock",
      "description": "Tech billionaire Michael Dell has sparked wild speculation his computer company could follow MicroStrategy and Elon Musk’s Tesla into bitcoin...",
      "url": "https://www.forbes.com/sites/digital-assets/2024/06/22/the-next-domino-to-fall-tech-billionaire-primes-bitcoin-for-a-massive-price-shock/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/5f3ee62ffb31aab95c122ce6/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-06-22T11:15:04Z",
      "content": "Bitcoin and crypto prices have swung wildly this week as former U.S. president and 2024 White House hopeful Donald Trump issues a serious warning over a potential U.S. dollar collapse.\r\nSubscribe now… [+3808 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Der Tagesspiegel",
      "title": "Linke: Brandenburgs Linke-Chef schlägt Wagenknecht Rededuell vor",
      "description": "Die Linke steht in Brandenburg vor der Landtagswahl unter Druck. Landeschef Walter ruft die Partei zum Kämpfen auf, kritisiert das Bündnis Sahra Wagenknecht und wendet sich direkt an die Ex-Linke.",
      "url": "https://www.tagesspiegel.de/berlin/linke-brandenburgs-linke-chef-schlagt-wagenknecht-rededuell-vor-11881289.html",
      "urlToImage": "https://www.tagesspiegel.de/berlin/images/landesparteitag-linke-brandenburg1/alternates/BASE_16_9_W1400/landesparteitag-linke-brandenburg",
      "publishedAt": "2024-06-22T11:11:18Z",
      "content": "Die Brandenburger Linke attackiert drei Monate vor der Landtagswahl das Bündnis Sahra Wagenknecht und wendet sich direkt an die Parteigründerin. «Wenn also Sahra Wagenknecht hier überall plakatiert w… [+2694 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "STERN.de"
      },
      "author": "STERN.de",
      "title": "Linke: Brandenburgs Linke-Chef schlägt Wagenknecht Rededuell vor",
      "description": "Die Linke steht in Brandenburg vor der Landtagswahl unter Druck. Landeschef Walter ruft die Partei zum Kämpfen auf, kritisiert das Bündnis Sahra Wagenknecht und wendet sich direkt an die Ex-Linke.",
      "url": "https://www.stern.de/gesellschaft/regional/berlin-brandenburg/linke--brandenburgs-linke-chef-schlaegt-wagenknecht-rededuell-vor-34820814.html",
      "urlToImage": "https://image.stern.de/34820816/t/NS/v1/w1440/r1.7778/-/22--urnnewsmldpacom2009010124062299491526v2w800h600l1125t747r3375b2242jpeg---8402bcc89c774361.jpg",
      "publishedAt": "2024-06-22T11:09:22Z",
      "content": "Die Linke steht in Brandenburg vor der Landtagswahl unter Druck. Landeschef Walter ruft die Partei zum Kämpfen auf, kritisiert das Bündnis Sahra Wagenknecht und wendet sich direkt an die Ex-Linke.\r\nD… [+2848 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Isra Fdez",
      "title": "El \"silencio incómodo\" que utiliza Tim Cook en sus reuniones (y que Jeff Bezos y Elon Musk también aplican)",
      "description": "¿Puede el silencio mejorar la calidad de los debates? De hecho, puede ayudarte a ganarlos. O eso es lo que piensan algunos de los hombres más ricos y audaces del mundo, como son Tim Cook, Jeff Bezos o Elon Musk. De hecho, Steve Jobs era un maestro de esta her…",
      "url": "https://www.applesfera.com/curiosidades/silencio-incomodo-que-utiliza-tim-cook-sus-reuniones-que-jeff-bezos-elon-musk-tambien-aplican",
      "urlToImage": "https://i.blogs.es/847d46/tim-cook-1-/840_560.jpeg",
      "publishedAt": "2024-06-22T11:01:24Z",
      "content": "¿Puede el silencio mejorar la calidad de los debates? De hecho, puede ayudarte a ganarlos. O eso es lo que piensan algunos de los hombres más ricos y audaces del mundo, como son Tim Cook, Jeff Bezos … [+4804 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Tesla уволила 14 % работников по всему миру в этом году",
      "description": "В этом году автопроизводитель Tesla провёл значительное сокращение глобального персонала, численность которого, по данным ресурса CNBC, уменьшилась до чуть более 121 000 человек, включая временных работников, то есть более чем на 14 %. Источник изображения: T…",
      "url": "https://3dnews.ru/1106899/tesla-sokratila-v-etom-godu-14-globalnogo-personala",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/06/22/1106899/New-Model-Y-Main-Hero-Desktop-LHD.jpg",
      "publishedAt": "2024-06-22T10:52:05Z",
      "content": "Tesla , , CNBC, 121 000 , , 14 %.\r\n: Tesla\r\n, , Tesla 17 , CNBC.\r\n Tesla (Elon Musk) , , « Tesla , ».\r\nTesla , , 10 % . .\r\n Tesla IV 2023 , 140 473 . . «» . , 2023 Tesla 14 %, CNBC.\r\n Tesla CNBC , II… [+38 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ritholtz.com"
      },
      "author": "Barry Ritholtz",
      "title": "10 Weekend Reads",
      "description": "What Frank Lloyd Wright tells us about late bloomers The celebrated architect enjoyed two periods of profound productivity — some 50 years apart. https://www.ft.com/content/7219b15b-c614-4a6b-9b5b-6405dc689cbf Roaring Kitty Is Playing With Fire: Influencer Ke…",
      "url": "https://ritholtz.com/2024/06/weekend-reads-620/",
      "urlToImage": null,
      "publishedAt": "2024-06-22T10:30:38Z",
      "content": "What Frank Lloyd Wright tells us about late bloomers The celebrated architect enjoyed two periods of profound productivity some 50 years apart. https://www.ft.com/content/7219b15b-c614-4a6b-9b5b-6405… [+4138 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "CRM INVESTOR ALERT: Salesforce, Inc. (NYSE:CRM) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "description": "Investors that suffered losses in their Salesforce, Inc. investment are encouraged to contact BFA Law about their rights.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902585/0/en/CRM-INVESTOR-ALERT-Salesforce-Inc-NYSE-CRM-is-Being-Investigated-for-Securities-Fraud-by-BFA-Law-Investors-who-Lost-Money-are-Reminded-to-Contact-the-Firm.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:06:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into Salesforce, Inc. (NYSE:CRM) for potential violations of the fede… [+2336 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "SPROUT (NASDAQ:SPT) FRAUD ALERT: Sprout Social, Inc. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "description": "Investors that suffered losses in their Sprout Social, Inc. investment are encouraged to contact BFA Law before the July 12, 2024 Court deadline.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902584/0/en/SPROUT-NASDAQ-SPT-FRAUD-ALERT-Sprout-Social-Inc-Sued-for-Securities-Fraud-Investors-who-Lost-Money-are-Reminded-to-Contact-BFA-Law-About-the-Lawsuit.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:05:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP announces the upcoming July 12, 2024, deadline in the Sprout Social (Nasdaq: SPT) Securities Class Action Lawsu… [+2532 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "TERADATA (NYSE:TDC) FRAUD ALERT: Teradata Corp. Sued for Securities Fraud, Investors who Lost Money are Reminded to Contact BFA Law About the Lawsuit",
      "description": "Investors that suffered losses in their Teradata Corp. investment are encouraged to contact BFA Law before the August 13, 2024 Court deadline.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902583/0/en/TERADATA-NYSE-TDC-FRAUD-ALERT-Teradata-Corp-Sued-for-Securities-Fraud-Investors-who-Lost-Money-are-Reminded-to-Contact-BFA-Law-About-the-Lawsuit.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:05:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP announces the upcoming August 13, 2024 deadline in the Teradata Corp. (NYSE: TDC) securities class action lawsu… [+2987 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "CEREVEL (NASDAQ:CERE) INVESTOR ALERT: Cerevel’s $45 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "description": "Cerevel Shareholders are encouraged to contact BFA Law about their rights relating to the upcoming merger.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902580/0/en/CEREVEL-NASDAQ-CERE-INVESTOR-ALERT-Cerevel-s-45-Per-Share-Offer-is-Being-Investigated-by-BFA-Law-Shareholders-are-Encouraged-to-Contact-the-Firm.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:04:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading law firm Bleichmar Fonti &amp; Auld LLP is investigating the merger between Cerevel Therapeutics Holdings, Inc. (Nasdaq: CERE) and AbbVie, Inc. If … [+2444 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "UIPATH (NYSE:PATH) FRAUD ALERT: UiPath, Inc. Sued for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm About the Lawsuit",
      "description": "Investors that suffered losses in their UiPath, Inc. investment are encouraged to contact BFA Law before August 19, 2024 Court deadline.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902582/0/en/UIPATH-NYSE-PATH-FRAUD-ALERT-UiPath-Inc-Sued-for-Securities-Fraud-by-BFA-Law-Investors-who-Lost-Money-are-Reminded-to-Contact-the-Firm-About-the-Lawsuit.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:04:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces it has filed a lawsuit against UiPath, Inc. (UiPath or the Company) and certain of the… [+4089 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "CAE INVESTOR ALERT: CAE, Inc. (NYSE:CAE) is Being Investigated for Securities Fraud by BFA Law, Investors who Lost Money are Reminded to Contact the Firm",
      "description": "Investors that suffered losses in their CAE, Inc. investment are encouraged to contact BFA Law firm about their rights.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902581/0/en/CAE-INVESTOR-ALERT-CAE-Inc-NYSE-CAE-is-Being-Investigated-for-Securities-Fraud-by-BFA-Law-Investors-who-Lost-Money-are-Reminded-to-Contact-the-Firm.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:04:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into CAE, Inc. (NYSE: CAE) for potential violations of the federal se… [+2330 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "POWERSCHOOL (NYSE:PWSC) INVESTOR ALERT: PowerSchool’s $22.80 Per Share Offer is Being Investigated by BFA Law, Shareholders are Encouraged to Contact the Firm",
      "description": "PowerSchool Shareholders are encouraged to contact BFA Law about their rights relating to the upcoming merger.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902579/0/en/POWERSCHOOL-NYSE-PWSC-INVESTOR-ALERT-PowerSchool-s-22-80-Per-Share-Offer-is-Being-Investigated-by-BFA-Law-Shareholders-are-Encouraged-to-Contact-the-Firm.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:02:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP is investigating the PowerSchool Holdings, Inc. (PowerSchool) (NYSE: PWSC) buyout by Bain Capital. If you inves… [+2923 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "Bleichmar Fonti & Auld",
      "title": "VENTYX INVESTOR ALERT: Ventyx’s (Nasdaq:VTYX) Board is Being Investigated for Insider Trading, Long-term Investors Are Encouraged to Contact the Firm for Details",
      "description": "Ventyx Shareholders are encouraged to contact BFA Law about its investigation into the Board’s insider trading allegations.......",
      "url": "https://www.globenewswire.com/news-release/2024/06/22/2902578/0/en/VENTYX-INVESTOR-ALERT-Ventyx-s-Nasdaq-VTYX-Board-is-Being-Investigated-for-Insider-Trading-Long-term-Investors-Are-Encouraged-to-Contact-the-Firm-for-Details.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
      "publishedAt": "2024-06-22T10:02:00Z",
      "content": "NEW YORK, June 22, 2024 (GLOBE NEWSWIRE) -- Top law firm Bleichmar Fonti &amp; Auld LLP is investigating Ventyx Biosciencess (Nasdaq:VTYX) Board for Insider Trading. If you are a shareholder of Venty… [+1909 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Aljazeera.net"
      },
      "author": "يمان الشريف",
      "title": "سبيس إكس تطلق قمرا صناعيا آخر للاتصالات يغطي القارة الأوروبية",
      "description": "أطلقت شركة صناعة تقنيات استكشاف الفضاء \"سبيس إكس\" صاروخ \"فالكون 9\" وعلى متنه القمر الصناعي \"أسترا 1 بي\"، والآن ينطلق القمر بشكل مستقل للوصول إلى ما يُعرف بـ\"المدار الجغرافي الثابت\".",
      "url": "https://www.aljazeera.net/science/2024/6/22/%d8%b3%d8%a8%d9%8a%d8%b3-%d8%a5%d9%83%d8%b3-%d8%aa%d8%b7%d9%84%d9%82-%d9%82%d9%85%d8%b1%d8%a7-%d8%b5%d9%86%d8%a7%d8%b9%d9%8a%d8%a7-%d8%a2%d8%ae%d8%b1",
      "urlToImage": "https://www.aljazeera.net/wp-content/uploads/2024/06/SES-24_Astra_1P-1719047591.jpg?resize=1920%2C1440",
      "publishedAt": "2024-06-22T09:48:56Z",
      "content": "\"\" 20 / \" 9\" \" 1 \" \" \" . .\r\n 8.5 \" 9 \" \" .\r\n \" \" 35786 \" \" .\r\n \"\" .\r\nFalcon 9 launch of the SES ASTRA 1PSpacex amazing launch pic.twitter.com/OTskUyMDFL\r\n Tesla Pablo (@pablo9948967714) June 20, 2024… [+103 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "futurism.com",
      "title": "Toddler Trapped in Scorching Tesla When Battery Dies",
      "description": "\"When that battery goes, you’re dead in the water.\"\nDeath Trap\nA 20-month-old girl was trapped inside a Tesla Model Y after the vehicle's battery died without warning — in the middle of an Arizona heat wave.\nAs local CBS-affiliated news station AZFamily repor…",
      "url": "https://biztoc.com/x/efc192a3fc578ba5",
      "urlToImage": "https://biztoc.com/cdn/efc192a3fc578ba5_s.webp",
      "publishedAt": "2024-06-22T09:45:21Z",
      "content": "\"When that battery goes, youre dead in the water.\"Death TrapA 20-month-old girl was trapped inside a Tesla Model Y after the vehicle's battery died without warning in the middle of an Arizona heat wa… [+133 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Securityaffairs.com"
      },
      "author": "Pierluigi Paganini",
      "title": "Experts found a bug in the Linux version of RansomHub ransomware",
      "description": "The RansomHub ransomware operators added a Linux encryptor to their arsenal, the version targets VMware ESXi environments. RansomHub ransomware operation relies on a new Linux version of the encrypted to target VMware ESXi environments. Although RansomHub onl…",
      "url": "https://securityaffairs.com/164779/cyber-crime/ransomhub-ransomware-esxi-encryptor.html",
      "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/05/image-36.png",
      "publishedAt": "2024-06-22T09:45:17Z",
      "content": "Experts found a bug in the Linux version of RansomHub ransomware\r\n | UEFICANHAZBUFFEROVERFLOW flaw in Phoenix SecureCore UEFI firmware potentially impacts hundreds of PC and server models\r\n | Russia-… [+78330 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Tom Carter",
      "title": "How Chinese EV makers are slowly taking over the world",
      "description": "China's Tesla rivals, like BYD, are expanding rapidly in developing markets like Brazil, Mexico, and Southeast Asia.",
      "url": "https://www.businessinsider.com/byd-saic-chinese-ev-makers-plot-world-takeover-2024-6",
      "urlToImage": "https://i.insider.com/6669b825764df1611258f121?width=1200&format=jpeg",
      "publishedAt": "2024-06-22T09:22:01Z",
      "content": "Chinese EV players are expanding rapidly in developing markets like Brazil, Mexico, and Southeast Asia.iStock; Rebecca Zisser/BI\r\n<ul><li>China's EV upstarts appear to be plotting world domination. <… [+12687 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Florida Today"
      },
      "author": "Brooke Edwards, Florida Today",
      "title": "Falcon Heavy to launch from Cape Canaveral. Here's what to know about this SpaceX rocket.",
      "description": "Here's what to know about the SpaceX Falcon Heavy, which will launch once again from Florida on June 25.",
      "url": "https://www.floridatoday.com/story/tech/science/space/spacex/2024/06/22/spacex-falcon-heavy-booster-launch-noaa-nasa-satellite-cape-canaveral-florida-powerful-thrust-ksc/74155648007/",
      "urlToImage": "https://media.zenfs.com/en/florida-today/ef65fc1c0ec3005a451a83938560b975",
      "publishedAt": "2024-06-22T09:07:30Z",
      "content": "It's time to bring out the big engines. Those on the Space Coast will soon be in for a treat.\r\nNot one, but three Falcon 9 first stage rockets making up the Falcon Heavy are tentatively scheduled to … [+5482 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jornada.com.mx"
      },
      "author": "DEMOS, Desarrollo de Medios, S.A. de C.V.",
      "title": "Tensiones entre China y la UE podría traer una guerra comercial",
      "description": "Pekín. El Ministerio de Comercio chino afirmó ayer que la Unión Europea (UE) ha seguido intensificando las fricciones comerciales, lo que “puede desencadenar una guerra comercial. La responsabilidad recae enteramente en la UE”, afirmó un portavoz del minister…",
      "url": "https://www.jornada.com.mx/2024/06/22/economia/014n3eco",
      "urlToImage": "https://www.jornada.com.mx/imagemeta/1200x630BN.jpg",
      "publishedAt": "2024-06-22T09:04:44Z",
      "content": "Periódico La JornadaSábado 22 de junio de 2024, p. 14\r\nPekín. El Ministerio de Comercio chino afirmó ayer que la Unión Europea (UE) ha seguido intensificando las fricciones comerciales, lo que puede … [+2262 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jornada.com.mx"
      },
      "author": "DEMOS, Desarrollo de Medios, S.A. de C.V.",
      "title": "BYD construirá nueva fábrica en México; implica crear 10 mil empleos",
      "description": "El fabricante chino de vehículos eléctricos BYD se encuentra en un proceso de análisis para definir en que estado construirá su planta en México, la cual creará alrededor de 10 mil puestos de trabajo. Así lo indicó Jorge Vallejo, director general de BYD en Mé…",
      "url": "https://www.jornada.com.mx/2024/06/22/economia/014n2eco",
      "urlToImage": "https://www.jornada.com.mx/2024/06/22/fotos/014n2eco-1.jpg",
      "publishedAt": "2024-06-22T09:04:44Z",
      "content": "Periódico La JornadaSábado 22 de junio de 2024, p. 14\r\nEl fabricante chino de vehículos eléctricos BYD se encuentra en un proceso de análisis para definir en que estado construirá su planta en México… [+2124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Rubén Andrés",
      "title": "El salario medio anual que cobran los empleados de las \"siete magníficas” de la tecnología, explicado en un gráfico",
      "description": "Trabajar en alguna de las denominadas “siete magníficas” es un sueño para muchos. No solo por los proyectos de vanguardia e innovación en los que están involucradas estas empresas tecnológicas, sino por los buenos salarios que se cobra en ellas.\n<!-- BREAK 1 …",
      "url": "https://www.xataka.com/empresas-y-economia/salario-medio-anual-que-cobran-empleados-siete-magnificas-tecnologia-explicado-grafico",
      "urlToImage": "https://i.blogs.es/efd514/portada/840_560.jpeg",
      "publishedAt": "2024-06-22T09:01:24Z",
      "content": "Trabajar en alguna de las denominadas siete magníficas es un sueño para muchos. No solo por los proyectos de vanguardia e innovación en los que están involucradas estas empresas tecnológicas, sino po… [+6393 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "EV wave still on horizon, but smaller than prior tsunami",
      "description": "EV wave still on horizon, but smaller than prior tsunami",
      "url": "https://www.investing.com/news/stock-market-news/ev-wave-still-on-horizon-but-smaller-than-prior-tsunami-3492752",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEE8G0G4_L.jpg",
      "publishedAt": "2024-06-22T09:01:04Z",
      "content": "Bank of America analysts predict a slower electric vehicle (EV) wave than previously anticipated in their latest note covering the sector. While EVs and hybrids will still account for roughly 60% of … [+1169 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "EV wave still on horizon, but smaller than prior tsunami",
      "description": "EV wave still on horizon, but smaller than prior tsunami",
      "url": "https://www.investing.com/news/stock-market-news/ev-wave-still-on-horizon-but-smaller-than-prior-tsunami-432SI-3492752",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEE8G0G4_L.jpg",
      "publishedAt": "2024-06-22T09:01:04Z",
      "content": "Bank of America analysts predict a slower electric vehicle (EV) wave than previously anticipated in their latest note covering the sector. While EVs and hybrids will still account for roughly 60% of … [+1169 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Rui Neto",
      "title": "Baterias estão prestes a sofrer uma grande revolução graças à sujeita do costume: a IA",
      "description": "Nos últimos meses, temos visto como as fabricantes têm aplicado a IA a diferentes produtos, incluindo smartphones. Empresas como a Tesla, a Samsung, e a Google estão a integrá-la para melhorar a edição de...",
      "url": "https://pplware.sapo.pt/inteligencia-artificial/baterias-estao-prestes-a-sofrer-uma-grande-revolucao-gracas-a-sujeita-do-costume-a-ia/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/04/carregar_carro_eletrico.jpg",
      "publishedAt": "2024-06-22T09:00:45Z",
      "content": "Nos últimos meses, temos visto como as fabricantes têm aplicado a IA a diferentes produtos, incluindo smartphones. Empresas como a Tesla, a Samsung, e a Google estão a integrá-la para melhorar a ediç… [+1758 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ferra.ru"
      },
      "author": "Андрей Кадуков",
      "title": "Маск заявил, что мощность суперкластера Tesla превысит 500 МВт",
      "description": "Илон Маск прокомментировал изданию The Elec видео, снятое беспилотником для демонстрации строительства суперкластера Tesla, мощность которого в настящее время составляют 130 МВт. Но в течение полутора лет мощность суперкластера будет расширена до 500 МВт.",
      "url": "https://www.ferra.ru/news/techlife/mask-zayavil-chto-moshnost-superklastera-tesla-prevysit-500-mvt-21-06-2024.htm",
      "urlToImage": "https://www.ferra.ru/imgs/2024/06/21/14/6510230/8e1a0506bd82b54066d30d20cd9d9062b0cf0353.jpeg",
      "publishedAt": "2024-06-22T09:00:00Z",
      "content": ", , Tesla . Gigafactory , : .\r\n - next-ennai . 50% Tesla AI, Nvidia ."
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
      "title": "Test-Driving The Ocean: Does Fisker Deserve To Emerge From Bankruptcy?",
      "description": "As Fisker enters Chapter 11 bankruptcy protection, the discounts are heavy on the Ocean. Is it worth gambling on the company recovering?",
      "url": "https://www.forbes.com/sites/jamesmorris/2024/06/22/test-driving-the-ocean-does-fisker-deserve-to-emerge-from-bankruptcy/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6675ec945ecd260fa7d5a9b7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-06-22T09:00:00Z",
      "content": "Henrik Fisker is a flawed genius. He helped create the incredible BMW Z8 roadster and the original X5 SUV. He was the production designer for the Aston Martin DB9 and V8 Vantage. But despite the beau… [+10196 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "Elon Musk greift durch - Tesla wirft 14 Prozent seiner Mitarbeiter raus",
      "description": "Der E-Auto-Pionier Tesla reagiert auf schwäche Absatzzahlen: Der Konzern reduziert seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.",
      "url": "https://www.focus.de/finanzen/boerse/elon-musk-greift-durch-tesla-koennte-dieses-jahr-bis-zu-28-000-mitarbeiter-entlassen_id_260073026.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_260073010/elon-musk.jpg?im=Crop%3D%280%2C70%2C1024%2C512%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=7689b3054f4ae9b585abd9912483a6c59401625fd02f946c851f9bab91123224",
      "publishedAt": "2024-06-22T08:43:03Z",
      "content": "Der E-Auto-Pionier Tesla reagiert auf schwäche Absatzzahlen: Der Konzern reduziert seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.Tesla hat im laufenden Jahr bislang mind… [+2403 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "Elon Musk greift durch - Tesla wirft 14 Prozent seiner Mitarbeiter raus",
      "description": "Der E-Auto-Pionier Tesla reagiert auf schwäche Absatzzahlen: Der Konzern reduziert seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.",
      "url": "https://www.focus.de/finanzen/boerse/elon-musk-greift-durch-tesla-wirft-14-prozent-seiner-mitarbeiter-raus_id_260073026.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_260073010/elon-musk.jpg?im=Crop%3D%280%2C70%2C1024%2C512%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=7689b3054f4ae9b585abd9912483a6c59401625fd02f946c851f9bab91123224",
      "publishedAt": "2024-06-22T08:43:03Z",
      "content": "Der E-Auto-Pionier Tesla reagiert auf schwäche Absatzzahlen: Der Konzern reduziert seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.Tesla hat im laufenden Jahr bislang mind… [+2403 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "Elon Musk greift durch - Tesla könnte dieses Jahr bis zu 28.000 Mitarbeiter entlassen",
      "description": "Der E-Auto-Pionier Tesla reagiert auf schwächere Absatzzahlen: Der Konzern reduzierte seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.",
      "url": "https://www.focus.de/finanzen/boerse/elon-musk-greift-durch-tesla-hat-schon-14-prozent-seiner-mitarbeiter-rausgeworfen_id_260073026.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_260021400/elon-musk.jpg?im=Crop%3D%280%2C241%2C2048%2C1024%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=0371bd412228f108b0e54bf0d41e3e94789c93f571ccc034e7c864d0ba43c3a3",
      "publishedAt": "2024-06-22T08:43:03Z",
      "content": "Der E-Auto-Pionier Tesla reagiert auf schwächere Absatzzahlen: Der Konzern reduzierte seine weltweite Belegschaft bereits um mindestens 14 Prozent in diesem Jahr.Tesla hat im laufenden Jahr bislang m… [+2440 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "CATL's TENER Energy Storage System Unveiled at ees Europe 2024, Showcasing Breakthrough Technology",
      "description": "CATL's TENER Energy Storage System Unveiled at ees Europe 2024, Showcasing Breakthrough Technology",
      "url": "https://www.investing.com/news/press-releases/catls-tener-energy-storage-system-unveiled-at-ees-europe-2024-showcasing-breakthrough-technology-93CH-3492751",
      "urlToImage": "https://i-invdn-com.investing.com/news/World_News_10_800x533_L_1420026292.jpg",
      "publishedAt": "2024-06-22T08:40:04Z",
      "content": "MUNICH\r\n, June 22, 2024\r\n /PRNewswire/ -- On June 19\r\n,  CATL unveiled TENER, the world's first mass-producible energy storage system with zero degradation in the first five years of use. CATL unveil… [+4693 chars]"
    },
    {
      "source": {
        "id": "t3n",
        "name": "T3n"
      },
      "author": null,
      "title": "E-Auto: Worauf du beim Kauf wirklich achten solltest",
      "description": "Was ist die wichtigste Maßeinheit für Elektroautos? Kilowatt Ladeleistung, Kilowattstunden Batteriekapazität? Falsch. Es ist ein alter Bekannter, allerdings in neuem Kleid.\nweiterlesen auf t3n.de",
      "url": "https://t3n.de/news/e-auto-kauf-worauf-wirklich-achten-1630677/",
      "urlToImage": "https://t3n.de/news/wp-content/uploads/2023/03/Elektroauto-laden.jpg",
      "publishedAt": "2024-06-22T08:20:00Z",
      "content": "Wer mit der Anschaffung eines Elektroautos liebäugelt, muss sich an einen ganzen Wust neuer Maßeinheiten gewöhnen. Die meines Erachtens wichtigste davon ist uralt und gleichzeitig ziemlich neu: km/h.… [+2688 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Jean-Baptiste Passieux",
      "title": "Les prometteuses voitures électriques de BMW seront (un peu) moins chères grâce à ces deux modèles",
      "description": "BMW vient de confirmer l’arrivée de deux nouvelles voitures électriques compactes dans sa future gamme “Neue Klasse”. De quoi profiter de la charge express et des belles autonomies promises par cette nouvelle plateforme pour un prix (un peu) plus réduit. Voic…",
      "url": "https://www.frandroid.com/marques/bmw/2056354_les-prometteuses-voitures-electriques-de-bmw-vont-bientot-devenir-un-peu-moins-cheres",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/06/p90551948-highres-the-all-new-bmw-1-se.jpg",
      "publishedAt": "2024-06-22T08:12:08Z",
      "content": "BMW vient de confirmer larrivée de deux nouvelles voitures électriques compactes dans sa future gamme Neue Klasse. De quoi profiter de la charge express et des belles autonomies promises par cette no… [+2963 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ilgiornale.it"
      },
      "author": "redazione@ilgiornale-web.it (Veronica Nicosia)",
      "title": "Nel regno di Nvidia. Ecco come un microchip segna le sorti del globo",
      "description": "L'azienda fondata da Jen-Hsun Huang ha chiuso il 2023 con un aumento dei profitti del 400% e nel secondo trimestre del 2024 cresce di un altro 265%",
      "url": "https://www.ilgiornale.it/news/politica/nel-regno-nvidia-ecco-microchip-segna-sorti-globo-2337778.html",
      "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2024/06/22/1719034237-22016697-small.jpg?_=1719034237",
      "publishedAt": "2024-06-22T08:00:02Z",
      "content": "Dopo la crisi, il boom. Questa è la regola del mercato. E nel 2024, superata la crisi dei chip dettata dalla pandemia da Covid-19, scoppia la rivoluzione tecnologica dell'intelligenza artificiale. I … [+6058 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "Xiaomi prepara sucessor do SU7 e o X11 já foi fotografado a circular na rua",
      "description": "O sucesso do Xiaomi SU7 veio mostrar como a marca pode apostar em novos mercados e garantir uma posição importante de mercado. Para dar continuidade a este sucesso a Xiaomi lançará um novo modelo,...",
      "url": "https://pplware.sapo.pt/motores/xiaomi-prepara-sucessor-do-su7-e-o-x11-ja-foi-fotografado-a-circular-na-rua/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/03/mwc_xiaomi_su7_1.jpg",
      "publishedAt": "2024-06-22T08:00:01Z",
      "content": "O sucesso do Xiaomi SU7 veio mostrar como a marca pode apostar em novos mercados e garantir uma posição importante de mercado. Para dar continuidade a este sucesso a Xiaomi lançará um novo modelo, ta… [+2057 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.df.cl"
      },
      "author": "Sandra Burgos",
      "title": "Lo que debes saber al terminar la semana | Pausa en el recorte de tasa, mayor inflación y ajuste al alza en crecimiento",
      "description": "El efecto del alza de las tarifas eléctricas marcó la discusión en el Congreso, luego que se conociera el IPoM de junio. En el mundo, los ojos estuvieron puestos en Nvidia que logró la mayor capitalización bursátil de la historia.",
      "url": "https://www.df.cl/senal-df/doble-shot/pausa-en-el-recorte-de-tasa-mayor-inflacion-y-ajuste-al-alza-en",
      "urlToImage": "https://www.df.cl/noticias/site/artic/20240621/imag/foto_0000000120240621180409/Doble-Shot-2024-06-22-4.jpg",
      "publishedAt": "2024-06-22T08:00:00Z",
      "content": "Sin duda esta fue una semana marcada por la política monetaria, con el Banco Central y su Consejo liderado por Rosanna Costa, protagonizando la información económica. El martes el Consejo del institu… [+10922 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Diego Gutiérrez",
      "title": "Stellantis ensamblará baterías para eléctricos a escasos 10 km de la Puerta del Sol de Madrid",
      "description": "Tras los primeros pasos dados el pasado 6 de mayo, las nuevas instalaciones de ensamblaje de baterías de Stellantis Madrid empiezan a trabajar a velocidad de crucero, tras meses de trabajo intenso en los que se han construido las nuevas instalaciones y se ha …",
      "url": "https://www.hibridosyelectricos.com/coches/stellantis-ensamblara-baterias-electricos-escasos-10-km-puerta-sol-madrid_74702_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/72/47/82/baterias-stellantis-madrid_17_2000x1126.jpeg",
      "publishedAt": "2024-06-22T07:45:00Z",
      "content": "Tras los primeros pasos dados el pasado 6 de mayo, las nuevas instalaciones de ensamblaje de baterías de Stellantis Madrid empiezan a trabajar a velocidad de crucero, tras meses de trabajo intenso en… [+3218 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hotnews.ro"
      },
      "author": "Alexandra Coșlea",
      "title": "China a investit o sumă astronomică în industria mașinilor electrice. „Guvernele occidentale au pierdut timpul”",
      "description": "Amploarea sprijinului guvernamental reprezintă 18,8% din vânzările totale de maşini electrice între 2009 şi 2023, a declarat Scott Kennedy, directorul pentru afaceri şi economie chineză la CSIS, notează News.ro El a observat că raportul dintre…",
      "url": "https://hotnews.ro/china-a-investit-o-suma-astronomica-in-industria-masinilor-electrice-guvernele-occidentale-au-pierdut-timpul-1526655",
      "urlToImage": "https://hotnews.ro/wp-content/uploads/2024/06/Masini-electrice-NIO.jpg",
      "publishedAt": "2024-06-22T07:42:39Z",
      "content": "Amploarea sprijinului guvernamental reprezint 18,8% din vânzrile totale de maini electrice între 2009 i 2023, a declarat Scott Kennedy, directorul pentru afaceri i economie chinez la CSIS, noteaz New… [+3482 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ithome.com"
      },
      "author": null,
      "title": "黄仁勋封神时刻，英伟达市值全球第一背后，一个创造历史的精明刀客与营销鬼才",
      "description": "经此一战，黄仁勋彻底封神！\r\n作者 |  ZeR0编辑 |  漠影6 月 19 日，英伟达再创历史，总市值超越微软，问鼎全球第一。这是市场史上最快最耀眼的崛起。两年时间，英伟达市值狂飙突进，从 4000 亿、1 万亿飞速攀升到 3 万亿美元，又用短短 14 天从市值第三跃居第二再冲到第一，在微软苹果股价双双下跌时独自领涨，完成了一场酣畅淋漓的史诗级突袭。英伟达创始人黄仁勋不愧是科技界预言家，连英文名 Jensen 都充满命运的暗示，作为芯片业如雷贯耳的“皮衣刀客”，带领“核弹厂”从硅谷轰炸到华尔街，让华人创办的企…",
      "url": "https://www.ithome.com/0/776/958.htm",
      "urlToImage": null,
      "publishedAt": "2024-06-22T07:40:12Z",
      "content": "|  ZeR0\r\n |  \r\n6 19 \r\n4000 1 3 14 \r\n Jensen \r\n GPU \r\n21 21 AI \r\n AI AI AI \r\n 31 \r\n CUDA\r\n01.\r\n0 GPU CUDA AI \r\niPhoneiPadMacBook Air GPU \r\n2008 \r\n0 \r\n1993 3D Direct3D\r\n Xbox ATI\r\n AMD AMD CPU AMD PC A… [+1009 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Faz.net"
      },
      "author": "Dennis Kremer",
      "title": "Javier Milei im Porträt: Der Provokateur aus Argentinien",
      "description": "Der argentinische Präsident Javier Milei gibt den Anarchisten. Mit Radikalreformen will er dem Kapitalismus freien Lauf lassen. Jetzt kommt er nach Deutschland.",
      "url": "https://www.faz.net/aktuell/wirtschaft/javier-milei-im-portraet-der-provokateur-aus-argentinien-in-deutschland-19804835.html",
      "urlToImage": "https://media0.faz.net/ppmedia/aktuell/50330883/1.9804834/facebook_teaser/der-oekonom-javier-milei-53.jpg",
      "publishedAt": "2024-06-22T07:34:55Z",
      "content": "Im Saal klatschen die ersten Zuhörer, der Applaus kommt erst zögerlich, wird dann immer stärker. Elon Musk, Chef des Elektroautobauers Tesla und nie um ein provokantes Statement verlegen, wird nachhe… [+11215 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "techcrunch.com",
      "title": "Tesla makes Musk best-paid CEO of all time and Fisker bites the dust",
      "description": "Elon Musk just convinced Tesla shareholders to approve his $56 billion pay package, making him the highest-paid CEO in history — assuming he can dodge a Delaware judge’s disapproval. And where better to stage this circus than Texas, home of big everything, in…",
      "url": "https://biztoc.com/x/a627ddf545780c64",
      "urlToImage": "https://biztoc.com/cdn/a627ddf545780c64_s.webp",
      "publishedAt": "2024-06-22T07:21:14Z",
      "content": "Elon Musk just convinced Tesla shareholders to approve his $56 billion pay package, making him the highest-paid CEO in history assuming he can dodge a Delaware judges disapproval. And where better to… [+134 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": null,
        "name": "Android.com.pl"
      },
      "author": "Łukasz Pająk",
      "title": "Przetestowałem BMW iX2 i śmiało mogę powiedzieć, że to rewolucja",
      "description": "Przed wami test BMW iX2 xDrive30, czyli najmocniejszej, elektrycznej odmiany drugiej generacji modelu X2. Modelu, który dotychczas nie był jakoś wybitnie traktowany przez producenta, a wręcz można było odnieść wrażenie, że zapomniany. Jednak debiut samochodu,…",
      "url": "https://android.com.pl/moto/751139-test-bmw-ix2-xdrive30-recenzja-opinia/",
      "urlToImage": "https://static.android.com.pl/uploads/2024/06/test-bmw-ix2-xdrive30-recenzja-opinia-302-1280x853.jpg",
      "publishedAt": "2024-06-22T07:15:00Z",
      "content": "Przed wami test BMW iX2 xDrive30, czyli najmocniejszej, elektrycznej odmiany drugiej generacji modelu X2. Modelu, który dotychczas nie by jako wybitnie traktowany przez producenta, a wrcz mona byo od… [+30267 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android.com.pl"
      },
      "author": "Łukasz Pająk",
      "title": "Przetestowałem BMW iX2 i śmiało mogę powiedzieć, że to rewolucja",
      "description": "Przed wami test BMW iX2 xDrive30, czyli najmocniejszej, elektrycznej odmiany drugiej generacji modelu X2. Modelu, który dotychczas nie był jakoś wybitnie traktowany przez producenta, a wręcz można było odnieść wrażenie, że zapomniany. Jednak debiut samochodu,…",
      "url": "https://android.com.pl/moto/751139-przetestowalem-bmw-ix2-i-smialo-moge-powiedziec-ze-to-rewolucja/",
      "urlToImage": "https://static.android.com.pl/uploads/2024/06/test-bmw-ix2-xdrive30-recenzja-opinia-302-1280x853.jpg",
      "publishedAt": "2024-06-22T07:15:00Z",
      "content": "Przed wami test BMW iX2 xDrive30, czyli najmocniejszej, elektrycznej odmiany drugiej generacji modelu X2. Modelu, który dotychczas nie by jako wybitnie traktowany przez producenta, a wrcz mona byo od… [+30267 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "TipRanks",
      "title": "Tesla Stock (NASDAQ:TSLA): 2 Catalysts That Indicate a Turnaround",
      "description": "Tesla (NASDAQ:TSLA) stock has performed poorly over the past 12 months due to several factors, ranging from strong competition in the EV space to CEO Elon...",
      "url": "https://finance.yahoo.com/news/tesla-stock-nasdaq-tsla-2-070629550.html",
      "urlToImage": "https://media.zenfs.com/en/tipranks_452/d7c15f9564a1b95c9daa6fdd33dc1c38",
      "publishedAt": "2024-06-22T07:06:29Z",
      "content": "Tesla (NASDAQ:TSLA) stock has performed poorly over the past 12 months due to several factors, ranging from strong competition in the EV space to CEO Elon Musks distractions from the company, all exa… [+5365 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Smartworld.it"
      },
      "author": "Antonio Lepore",
      "title": "Xiaomi vuole sfidare Tesla Model Y e le prime foto della nuova auto lo confermano!",
      "description": "A pochi mesi dal lancio della SU7, Xiaomi sta lavorando sulla nuova auto, che sarà un SUV compatto: ecco le prime foto spia scattate in Cina.\r\nL'articolo Xiaomi vuole sfidare Tesla Model Y e le prime foto della nuova auto lo confermano! sembra essere il primo…",
      "url": "https://mobility.smartworld.it/xiaomi-nuova-auto-suv.html",
      "urlToImage": "https://mobility.smartworld.it/images/2024/06/22/xiaomi-nuova-auto-2_1200x675.jpeg",
      "publishedAt": "2024-06-22T06:49:00Z",
      "content": "Sono trascorsi sei mesi da quando Xiaomi ha lanciato la sua prima auto, il SU7. L'azienda cinese, però, non si è fermata, mettendosi già a lavoro per sviluppare un secondo modello. In tal senso, alcu… [+1465 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Alejandro González",
      "title": "El precio del último SUV de Renault hará que este híbrido, de 4,4 litros de consumo, siga siendo un éxito",
      "description": "El Renault Symbioz es un SUV híbrido del segmento B enfocado, principalmente, en ofrecer todo el espacio posible dentro de sus posiblidades. Recientemente hemos conocido que ha establecido su precio de partida 32.026 euros con promociones, un precio alto para…",
      "url": "https://www.hibridosyelectricos.com/coches/precio-ultimo-suv-renault-hara-este-hibrido-44-litros-consumo-siga-siendo-exito_74631_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/72/07/62/dos-an-os-despue-s-de-su-lanzamiento-sigue-convenciando-frente-a-rivales-ma-s-nuevos_17_2000x1126.jpeg",
      "publishedAt": "2024-06-22T06:45:00Z",
      "content": "El Renault Symbioz es un SUV híbrido del segmento B enfocado, principalmente, en ofrecer todo el espacio posible dentro de sus posiblidades. Recientemente hemos conocido que ha establecido su precio … [+4335 chars]"
    }
  ];

  ngOnInit(): void {

  }

}
