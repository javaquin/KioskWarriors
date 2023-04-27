
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
    services: [
      { url: 'mad-dk-demo997794@spaindemo-gaxf6-sandbox.rooms.webex.com', name: 'Administración' },
      { url: 'mad-deskpro-demo@spaindemo-gaxf6-sandbox.rooms.webex.com', name: 'Servicios' },
      { url: 'mad-dkm-demo@spaindemo-gaxf6-sandbox.rooms.webex.com', name: 'Enfermería' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

