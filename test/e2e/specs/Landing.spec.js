import { landingPage } from '../pages/LandingePage';
import { landingValidation } from '../validations/Landing.validation';

describe('Landing page', () => {
    before(() => {
        landingPage.open();
    });

    it('Displays the title on landing page', () => {
        landingValidation.checkSiteTitle();
    });
});
