import { landingPage } from '../pages/TestLanding.page'
describe('Landing page testing', () =>{
    before(() => {
        console.log("Hii I'm in before block of landing page.\n");
    });
        
    it('first try',() => {
        landingPage.open();
    });
});

