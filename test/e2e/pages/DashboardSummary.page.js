import {
    LOGO_IMAGE_SELECTOR,
    LOGOUT_BUTTON_SELECTOR,
    CLASSES_TAB_SELECTOR,
    CALENDAR_TAB_SELECTOR,
    SETTINGS_TAB_SELECTOR
} from '../constants/DashboardSummuryPageSelectors.constant';

class DashBoardSummary {
    get logoImg() {
        return $(LOGO_IMAGE_SELECTOR);
    }

    get classesTab() {
        return $(CLASSES_TAB_SELECTOR);
    }

    get calenderTab() {
        return $(CLASSES_TAB_SELECTOR);
    }

    get settingTab() {
        return $(SETTINGS_TAB_SELECTOR);
    }

    get logoutButton() {
        return $(LOGOUT_BUTTON_SELECTOR);
    }

    verifyDashboard() {
        this.logoImg.waitForExist();
    }

    navigateToClasses() {
        this.classesTab.click();
    }

    navigateToSettings() {
        this.settingTab.click();
    }

    scheduleClass() {}
}

export const dashBoardSummary = new DashBoardSummary();
