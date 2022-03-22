
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
      { url: 'javaquin@cisco.com', name: 'Management' },
      { url: 'erica.talking@ivr.vc', name: 'Facilities' },
      { url: 'erica.talking@ivr.vc', name: 'Nurses' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

