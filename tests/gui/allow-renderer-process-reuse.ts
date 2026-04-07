import { app } from 'electron';
import remoteMain from '@electron/remote/main';

if (app !== undefined) {
	remoteMain.initialize();

	app.on('browser-window-created', (_event, window) => {
		remoteMain.enable(window.webContents);
	});
}
