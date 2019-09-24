import { loginPage } from '../pages/Login.page';
import { settings } from '../pages/Settings.page';
import { editProfile } from '../pages/Settigs.editprofile';
import { dashBoardSummary } from '../pages/DashboardSummary.page';

describe('Edit Profile from settings.', () => {
    before(() => {
        loginPage.open();
        loginPage.login(context.logins.user);
    });

    it('Navigate edit profile from settings tab', () => {
        dashBoardSummary.navigateToSettings();
        settings.clickOnTab("General");
    });

    it('Updated UserName and verify updated username', () => {
        // TODO::
    });
});
