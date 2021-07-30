/** 
 * 
*/
class DesktopNotification {
    /** */
    title = ""
    /** */
    options = {}

    /**
     * DesktopNotification class constructor.
     * @param {string} title - The notification `title`.
     * @param {object} options - The notification `options`.
     * @return void
     */
    constructor(title, options) {
        this.title = title
        this.options = options
    }

    /**
     * Displays the desktop notification object on the screen.
     * @return {Notification} A Notification object.
     */
    display() {
        const notification = new Notification(this.title, this.options)
    }
}

export default DesktopNotification // exporting class for import in an external module.