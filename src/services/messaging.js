import Torch from 'react-native-torch';
import notifee, {AndroidColor} from '@notifee/react-native';

class NotificationSystem {
  torch = false;
  intervalId = null;
  notify() {
    this.intervalId = setInterval(() => {
      Torch.switchState(!this.torch);
      this.torch = !this.torch;
    }, 50);
  }

  clearFlashing = () => {
    clearInterval(this.intervalId);
    Torch.switchState(false);
  };
}

const channelId = await notifee.createChannel({
  id: 'default',
  name: 'Default Notify Channel',
});

export const onMessage = async (remoteMessage) => {
  await notifee.displayNotification({
    title: 'Twoje danie jest gotowe',
    body: 'Odbierz teraz swój posiłek',
    android: {
      channelId,
      vibrationPattern: [300, 500, 300, 500, 300, 500, 300, 500],
      lights: [AndroidColor.RED, 300, 600, 300, 600, 300, 600, 300, 600],
    },
  });
  // const notify = new NotificationSystem();
  // notify.notify();
  // setTimeout(notify.clearFlashing, 5000);
};
