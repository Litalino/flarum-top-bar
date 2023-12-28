import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
//import IndexPage from 'flarum/forum/components/IndexPage';
//import DiscussionPage from 'flarum/forum/components/DiscussionPage';
//import PostsUserPage from 'flarum/forum/components/PostsUserPage';
//import DiscussionsUserPage from 'flarum/forum/components/DiscussionsUserPage';

import addTopBar from './addTopBar';

app.initializers.add('litalino/flarum-top-bar', () => {

  addTopBar();


});
