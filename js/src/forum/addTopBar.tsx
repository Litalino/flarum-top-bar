import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import TopBar from './components/TopBar';

export default function () {
	extend(HeaderPrimary.prototype, 'items', function (items) {
		items.add('top-bar', <TopBar />, 100);
	});
	extend(HeaderSecondary.prototype, 'items', function (items) {
		//items.add('top-bar', <TopBar />, -100);
	});
}