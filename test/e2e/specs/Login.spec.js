import { loginPage } from '../pages/Login.page';
import { loginValidation } from '../validations/Login.validation';
import { context } from '../../data/Context';

describe('Signin page.', () => {
    before(() => {
        loginPage.open();
    });

    it('Displays login message successfully.', () => {
        loginPage.login(context.logins.user);
        loginValidation.checkLogoutButton();
    });
});
