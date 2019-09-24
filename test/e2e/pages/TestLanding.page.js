

class LandingPage{
    open(){
        browser.url('/');
    }

    get title(){
        return browser.getTitle();
    }

}


export const landingPage = new LandingPage();