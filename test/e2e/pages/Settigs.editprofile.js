import {
    PROFILE_IMAGE, 
    USERNAME_LBL,
    FULLNAME_LBL,
    EDIT_ICON 
} from '../constants/Settings.editprofile.constant';

class EditProfile {

    get profileImage () {
        return(PROFILE_IMAGE);
    }

    get usernameLbl () {
        return(USERNAME_LBL);
    }

    get fullnameLbl () {
        return(FULLNAME_LBL);
    }

    get editIcon () {
        return(EDIT_ICON);
    }

    editUserName() {
        this.editIcon.click()
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

export const editProfile = new EditProfile();