import { loginPage } from '../pages/Login.page';
// import { loginValidation } from '../validations/Login.validation';
import { context } from '../../data/Context';
import { dashBoardSummary } from '../pages/DashboardSummary.page';

describe('Schedule a class scenario', () => {
    before(() => {
        loginPage.open();
    });

    it('Login with valid credentails', () => {
        loginPage.login(context.logins.user);
    });

    it('Verify user on dashboard', () => {
        dashBoardSummary.verifyDashboard();
    });

    it('Navigate to Classes tab', () => {
        dashBoardSummary.navigateToClasses();
    });

    it('Schedule classes for specified data', () => {
        dashBoardSummary.scheduleClass();
    });
});
