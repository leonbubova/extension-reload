# Extension Reload

Ever wanted to code a Chrome extension but manually reloading the extension every time you saved was keeping you from continuing?

Fear no more and let [Extension Reload](https://github.com/leonbubova/extension-reload) handle that for you.

## Get started

1. Clone this repo:

```
git clone https://github.com/leonbubova/extension-reload.git
```

2. Go to your [Chrome Extensions](chrome://extensions/), find the extension you are developing right now and copy the ID
3. Open `background.js` and paste the ID in the first line:

```
var id = "ollopneandcnbhhmgahsdieoceacfafd"
```

4. Go to your [Chrome Extensions](chrome://extensions/) again and click `Load unpacked extension`
5. Select the root of `extension-reload` and confirm


Congratulations, on every page refresh your extension will now get reloaded.

Happy coding!


