import {
    GENERAL_SELECTOR, 
    ADMIN_USER_SELECTOR,
    PERMISSION_SELECTOR 
} from '../constants/Settings.constant';

class Settings {
    open() {
        browser.url(SIGNIN_PAGE_URL);
    }

    get genealTab () {
        return(GENERAL_SELECTOR);
    }

    get adminUserTab () {
        return(ADMIN_USER_SELECTOR);
    }

    get permissionTab () {
        return(PERMISSION_SELECTOR);
    }

    clickOnTab(tabName) {
        switch(tabName) {
            case "General" :
                this.genealTab.click()

            case "Admin User" :
                this.adminUserTab.click()

            case "Permission" :
                this.permissionTab.click()
        }
    }
}


export const settings = new Settings();