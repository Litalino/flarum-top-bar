# Top Bar

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/litalino/flarum-top-bar.svg)](https://packagist.org/packages/litalino/flarum-top-bar) [![Total Downloads](https://img.shields.io/packagist/dt/litalino/flarum-top-bar.svg)](https://packagist.org/packages/litalino/flarum-top-bar)

A [Flarum](http://flarum.org) extension. Allows to create a customizable Top Bar.

![alt home](https://i.imgur.com/aohIU5N.png)
![TopBar-drop](https://github.com/Litalino/flarum-top-bar/assets/99712477/74fb82eb-8897-45ff-b372-84d24eb11b79)


**Scrolled**
![alt Scrolled](https://i.imgur.com/X1zqLEG.png)

**Admin**
![alt Admin](https://i.imgur.com/vzOlWJo.png)

**Mobile**
<p align="center">
  <img src="https://i.imgur.com/a9aZXgL.png" title="Mobile"/>
</p>

## Installation

Install with composer:

```sh
composer require litalino/flarum-top-bar:"*"
```

## Updating

```sh
composer update litalino/flarum-top-bar:"*"
php flarum migrate
php flarum cache:clear
```
### Add Code 🇦

```
<ul>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Private Customers">Private Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Business Customers">Business Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Help">Help</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Cookie">Cookie</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="My Sunrise">My Sunrise</a></li>
</ul>

or

<ul>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Private Customers">Private Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Business Customers">Business Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Help">Help</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Cookie">Cookie</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="My Sunrise">My Sunrise</a></li>
                <li class="TopBar-item Sub-menu-On">
                    <span class="ButtonGroup Dropdown dropdown Dropdown--split LinkDropdown itemCount4">
                        <a class="LinksButton SplitDropdown-button Button  Button--link" href="#">
                            <span class="LinksButton-title">About</span>
                        </a>
                        <button class="Dropdown-toggle Button Button--icon  Button--link" data-toggle="dropdown" aria-expanded="false">
                            <i aria-hidden="true" class="icon fas fa-caret-down Button-caret"></i>
                        </button>
                        <ul class="Dropdown-menu dropdown-menu Dropdown-menu--right">
                            <li class="item-link2">
                                <a class="LinksButton SplitDropdown-button Button  Button--link" href="#">
                                    <span class="LinksButton-title">About</span>
                                </a>
                            </li>
                            <li class="item-link2-3">
                                <a class="LinksButton Button Button--link LinksButton--inDropdown" href="#">
                                    <i aria-hidden="true" class="icon fa fa-question Button-icon LinksButton-icon"></i>
                                    <span class="LinksButton-title">Faq</span>
                                </a>
                            </li>
                            <li class="item-link2-1">
                                <a class="LinksButton Button Button--link LinksButton--inDropdown" external="" href="#">
                                    <i aria-hidden="true" class="icon fas fa-quote-left Button-icon LinksButton-icon"></i>
                                    <span class="LinksButton-title">Quy tắc</span>
                                </a>
                            </li>
                            <li class="item-link2-4">
                                <a class="LinksButton Button Button--link LinksButton--inDropdown" href="#">
                                    <i aria-hidden="true" class="icon fas fa-book Button-icon LinksButton-icon"></i>
                                    <span class="LinksButton-title">Chính sách</span>
                                </a>
                            </li>
                        </ul>
                    </span>
                </li>
</ul>

```

If you want the top bar tag to be on the left: add the bottom css to Custom Styles: Admin -> Appearance -> Custom Styles

```
.TopBar ul {
     justify-content: flex-start !important;
}
```


#### Links

- [Packagist](https://packagist.org/packages/litalino/flarum-top-bar)
- [GitHub](https://github.com/litalino/flarum-top-bar)
- [Discuss](https://discuss.flarum.org/d/33866-top-bar-extension)
