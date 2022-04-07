# Accessible app loading pattern
Single Page Applications (SPA's) can load content incrementally, or partially reload parts of the same page. For accessibility purposes the loading state must be conveyed to assistive technology.

This example demonstrates `role="progressbar"`, `role="status"` and `role="status"` enhanced with JavaScript.

## `role="progressbar"`
Uses an ascending tone (in some browser and AT combinations) to convey audibly the progress of the application. The full `progressrole` [authoring guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role) provides an example which does not appear to be supported in assistive technology.

## `role="status"`
Provides audible feedback. Where the loading state must be conveyed repeatedly until loaded, this approach is in effective.

## `role="status"` enhanced with JavaScript
Provides audible feedback and toggles the text in the container from empty to "loading..." on a 1 second interval to trigger the assistive technoloy to repeatedly announce loading.
