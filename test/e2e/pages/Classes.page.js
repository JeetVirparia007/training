class Classes {
    get scheduleBtn() {
        return $('button[title^="Schedule"]');
    }

    get typeDropDown() {
        return $(
            'div[class^="modal fade show"] #schedule-form-new-event-selet-type',
        );
    }

    get saveBtn() {
        return $('button[class^="btn yellow-button-theme"]');
    }

    get cancelBtn() {
        return $('button[class^="btn btn-cancel"]');
    }

    scheduleClass() {
        // this.typeDropDown.
        // InProgress
    }
}
export const classesPage = new Classes();
