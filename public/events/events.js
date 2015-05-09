function EventsController() {
    this.classic = true;
    
    this.keywords='';
    this.distance=8;
    this.groups='local';
    
    this.events = [
        {
            type: "message",
            person: "Sabine De Waele",
            img: "img/a3.jpg",
            offer: true,
            title: "Rabarberchutney",
            message: "Zelfgemaakte chutney van rabarber met abrikoos, limoen, gember, pepertjes en nog andere kruiden."
        },
        {
            type: "transaction",
            from: "Edwin Mol",
            to: "Jou",
            description: "Bedankt voor de heerlijke aardperen !"
        },
        {
            type: "message",
            person: "Mike Torck",
            img: "img/a1.jpg",
            demand : true,
            title: "Wie kent windows (versie 8) goed ?",
            message: "Soms weet ik dat iets bestaat in windows, maar weet ik niet zo goed hoe ik het zelf kan instellen. Is er iemand met goede kennis van Windows ? (20 duimkes per uur)",
            responses : [
                {
                    person: "Jij",
                    message: "Hoi Mike, ik wil je wel helpen. Is er iets wat je specifiek zoekt ?"
                }
            ]
        },
        {
            type: "message",
            person: "Nathalie Gols",
            img: "img/a5.jpg",
            demand: true,
            title: "Defecte schakelaar",
            message: "Eén van de schakelaars in mijn living is defect... Wie zou dat voor mij kunnen herstellen ?",
            responses: [
                {
                    person: "Edwin",
                    message : "Hoi Nathalie, is het een schakelaar die in de wand is ingewerkt ?"
                },
                {
                    person: "Nathalie",
                    message : "Hoi Edwin, hij staat eigenlijk meer op de muur, niet écht erin.. Is dat een probleem ?"
                }
            ]
        },
        {
            type: "person",
            firstname: "Ivo",
            lastname: "van den Maagdenberg",
            messages: [
                {
                    title: "(Vraag) Eten soms"
                },
                {
                    title: "(Aanbod) herstellen van JOUW fiets !"
                }
            ]
        },
        {
            type: "message",
            person: "Nathalie Gols",
            img: "img/a5.jpg",
            offer: true,
            title: "Vegetarisch kookles",
            message: "Ben je pas veggie, of wil je dat graag worden ? Ik geef je graag wat meer uitleg, onder het bereiden van een lekker gerecht.",
        },
        {
            type: "event",
            person: "Rita Strooband",
            date: "4 april 2015",
            title: "Indisch Veggie Etentje",
            message: "Wie heeft er zin om mee aan te schuiven aan ons vegetarisch Indisch buffet ? Er is plaats voor maximum 16 personen."
        },
        {
            type: "message",
            person: "Erik Batoo",
            img: "img/a2.jpg",
            offer: true,
            title: "Bio asperges",
            message: "Ik heb, zoals elk voorjaar, een overproductie aan zelfgekweekte bio-asperges. Wie wil er een bussel ? Ik kan ze komen brengen (per fietd). 5 duimkes / bussel.",
        },
    ];
    
    this.transactions = [
        {
            from: "Steven Plas",
            to: "Nathalie Gols",
            amount: 50,
            message: "Bedankt voor de veggie lasagne",
            timestamp: "2015-01-01T11:01:01"
        },
        {
            from: "Mike Torck",
            to: "Sabine De Waele",
            amount: 10,
            message: "Bedankt om Senne naar de voetbal te brengen :-)",
            timestamp: "2015-02-01T16:04:04"
        },
        {
            from: "Steven Plas",
            to: "Sabine De Waele",
            amount: 5,
            message: "Knolselder plantjes",
            timestamp: "2015-02-14T09:55:00"
        },
        {
            from: "Nathalie Gols",
            to: "Steven Plas",
            amount: 200,
            message: "Tuinwerken",
            timestamp: "2015-03-04T11:34:01"
        }
    ];
    
    this.availableColors = ['Eten en Drinken','Artisanaal','Gezondheid en Verzorging','Herstellingen','Huishouden','Klussen','Tuin','Vervoer','Hergebruik'];
    this.multipleDemo = {};
    this.multipleDemo.colors = [];
    this.request = false;
    this.update = function() {
        sync = function(array, item,shouldBePresent) {
            if(shouldBePresent) {
                if(array.indexOf(item) == -1) {
                    array.push(item);
                }
            } else {
                var index = array.indexOf(item);
                if(index != -1) {
                    array.splice(index,1);
                }
            }
            
        }
        sync(this.multipleDemo.colors, "Vraag",this.request);
        sync(this.multipleDemo.colors,"Aanbod",this.offer);        
    };    
};

angular
    .module('inspinia')
    .controller('EventsController', EventsController);