import { assert } from 'chai';
import { landingPage } from '../pages/LandingePage';
import * as systemLabels from '../constants/SystemLabels.constant';

class LandingValidation {
    checkSiteTitle() {
        assert.equal(landingPage.title, systemLabels.SITE_TITLE);
    }
}

export const landingValidation = new LandingValidation();
