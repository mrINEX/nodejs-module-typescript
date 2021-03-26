namespace App {
  export function addToInfo(message: string, infoElement: HTMLDivElement): void {
    const messageElement: HTMLDivElement = document.createElement('div');
    messageElement.innerHTML = (
      `<div class='list-group-item text-center text-giant'>
        <code>${message}</code>
      </div>`
    );
    infoElement.append(messageElement);
  }
}
