# Accessible app loading pattern
Single Page Applications (SPA's) can load content incrementally, or partially reload parts of the same page. For accessibility purposes the loading state must be conveyed to assistive technology.

This example demonstrates `role="progressbar"`, `role="status"` and `role="status"` + JavaScript. The JavaScript uses the method `innerHTML` to alter the text content within the DIV container. The behaviour we're wanting to recreate is the assistive technology repeating loading until the content has finished loading.

[Accessible app loading](https://canaxess.github.io/app-loading-pattern/index.html)

## `role="progressbar"`
Uses an ascending tone (in some browser and AT combinations) to convey audibly the progress. The full `progressbar` role [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role) and [aria authoring guide](https://www.w3.org/TR/wai-aria-1.1/#progressbar) provides an example which does not appear to be consistently supported in assistive technology.

## `role="status"`
Provides audible feedback once only. Where the loading state must be conveyed repeatedly until loaded, this approach is in effective.

## `role="status"` + JavaScript
Provides audible feedback and toggles the text in the container from empty to "loading..." on a 1 second interval to trigger the assistive technology to repeatedly announce loading.

## Screen reader compatibility for `role="status"` + JavaScript
|   | JAWS <sup>v2021</sup> | NVDA <sup>v2020</sup>  |VoiceOver   |Talkback   |
|---|:-:|:-:|:-:|:-:|
| Edge <sup>v100</sup>  | :heavy_check_mark:  |:heavy_check_mark:   | :white_circle:  | :white_circle:  |
| Chrome <sup>v100</sup>  |:heavy_check_mark:   | :heavy_check_mark:   |:white_circle:   | :white_circle:  |
| FireFox <sup>v99</sup>  | :x:  | :heavy_check_mark:  | :white_circle:  | :white_circle:  |
| Ipad <sup>v12.5.5</sup> | :white_circle:  | :white_circle:  | :heavy_check_mark:  | :white_circle:  |
| Android <sup>v11</sup> | :white_circle:  | :white_circle:  | :white_circle:  | :heavy_check_mark:   |
| MacOS  | :white_circle:  | :white_circle:  |   | :white_circle:  |
