import { default as notification } from "./notification.js"

const DEF = "default" // default permission ("not denied / not granted")
const DEN = "denied" // permission to display notification denied
const GRA = "granted" // permission to display notification granted

/** An (alias) `_n` for `Notification`  (shortens the code). */
let _n = Notification

/** The notification permission. */
let _permission = _n.permission

/**  The DesktopNotification class instance. */
let _notification = new notification("New message", {body: "Hey dude... Sup with you?", icon: "assets/img/notification_icon.png"})

// setInterval(() => {
    if (_permission === GRA) { // permission is granted
        _notification.display() // display notification
    } else {
        switch (_permission) {
            case DEF : // permission is neither granted nor denied
                _n.requestPermission().then( // request permission to display notification
                    (permission) => {
                        if (permission === GRA) {
                            _notification.display() // display notification
                        }
                    });
                break;
            case DEN : // permission is denied
                // remind the user that they could always change notification settings
                alert("Hello there... You could always allow notifications in your settings when need be.")
            default:
                break;
        }
    }
// }, 5000);




// only request permission in response to a user gesture.
// alert a user once in case permission is denied, reminding them they could always change it in the settings.
// notification should have an icon.
// notification should work in multiple languages (english, french, spanish, arabic, russian).
// use the local storage to save settings