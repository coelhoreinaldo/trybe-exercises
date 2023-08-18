export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  console.log(`${notificationType}: ${message}` || message);
};