// Declare deferredInstallPrompt globally
let deferredInstallPrompt = null;

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

butInstall.addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choiceResult = await deferredInstallPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA has been installed.');
    }
    deferredInstallPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed.');
});
