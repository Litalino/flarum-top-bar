import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

/**
 * Component used to add some navigation links to the top of the page
 */
export default class TopBar extends Component {
	oninit(vnode) {
		super.oninit(vnode);
	}

	oncreate(vnode) {
		super.oncreate(vnode);
	}

	onupdate(vnode) {
		super.onupdate(vnode);
	}

	view() {
		return (
			<span className='TopBar'>
				<div className='container'>
					{m.trust(app.forum.attribute('litalino-top-bar.topbarHTML'))}
				</div>
			</span>
		);
	}
}