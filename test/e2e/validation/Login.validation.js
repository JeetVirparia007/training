import { assert } from 'chai';
import { dashBoardSummary } from '../pages/DashboardSummary.page';
import { LOGOUT_BUTTON_TEXT } from '../constants/SystemLabels.constant';
// import { loginPage } from '../pages/Login.page';
// import * as systemMessages from '../constants/SystemMessages.constant';

class LoginValidation {
    // checkUserLoggedMessage(userFullName) {
    //     assert.equal(
    //         loginPage.welcomeMessage.getText(),
    //         `${systemMessages.FEEDBACK_USER_WELCOME} ${userFullName} !`,
    //     );
    // }

    // checkUserName(userName) {
    //     assert.equal(loginPage.userLoggedIn.getText(), userName);
    // }

    checkLogoutButton() {
        assert.equal(
            dashBoardSummary.logoutButton.getText(),
            LOGOUT_BUTTON_TEXT,
        );
    }
}

export const loginValidation = new LoginValidation();
