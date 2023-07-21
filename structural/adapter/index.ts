import NotificationService from "./src/services/notification.service";
import INotification from "./src/providers/notification.interface";
import FacebookNotification from "./src/providers/facebook-notification";
import SlackAdapterNotification from "./src/providers/slack-adapter-notification";
import SlackNotification from "./src/providers/slack-notification";

const providers: INotification[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(
        new SlackNotification()
    )
];

const notificationService = new NotificationService(providers);
notificationService.post("Titulo Info", "Contenido de la información");