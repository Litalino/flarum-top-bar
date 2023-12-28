import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('litalino/top-bar', () => {
  app.extensionData.for('litalino-top-bar').registerPage(SettingsPage);
});