import app from 'flarum/forum/app';
import addTopBar from './addTopBar';

app.initializers.add('litalino/flarum-top-bar', () => {

  addTopBar();

});
