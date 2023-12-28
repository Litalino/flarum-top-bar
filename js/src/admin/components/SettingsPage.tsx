import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

export default class SettingsPage extends ExtensionPage {
  content() {
    const eg = `<ul>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Private Customers">Private Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Business Customers">Business Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Help">Help</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Cookie">Cookie</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="My Sunrise">My Sunrise</a></li>
               </ul>`;
    return (
      <div className="AuthorFilterSettingsPage">
        <div className="container">
          <p className="helpText">{app.translator.trans('litalino-top-bar.admin.settings.intro')}</p>
          <p className="exText">{app.translator.trans('litalino-top-bar.admin.settings.intro')}</p>
          <div className="Form">
            {this.buildSettingComponent({
              label: app.translator.trans('litalino-top-bar.admin.settings.topbar_html_label'),
              help: app.translator.trans('litalino-top-bar.admin.settings.topbar_html_help'),
              type: 'textarea',
              setting: 'litalino-top-bar.topbar',
              placeholder: eg
            })}
            {this.submitButton()}
          </div>
        </div>
      </div>
    );
  }
}