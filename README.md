# Top Bar

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/litalino/flarum-top-bar.svg)](https://packagist.org/packages/litalino/flarum-top-bar) [![Total Downloads](https://img.shields.io/packagist/dt/litalino/flarum-top-bar.svg)](https://packagist.org/packages/litalino/flarum-top-bar)

A [Flarum](http://flarum.org) extension. Allows to create a customizable Top Bar.

![alt home](https://i.imgur.com/aohIU5N.png)

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

```<ul>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Private Customers">Private Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Business Customers">Business Customers</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Help">Help</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="Cookie">Cookie</a></li>
                <li class="TopBar-item"><a href="#" external="" target="_blank" title="My Sunrise">My Sunrise</a></li>
</ul>```

If you want the top bar tag to be on the left: add the bottom css to Custom Styles: Admin -> Appearance -> Custom Styles

```.TopBar ul {
     justify-content: flex-start !important;
}```


## Links

- [Packagist](https://packagist.org/packages/litalino/flarum-top-bar)
- [GitHub](https://github.com/litalino/flarum-top-bar)
- [Discuss](https://discuss.flarum.org/d/33866-top-bar-extension)
