## CSS Lesson Outline

IMO the num 1 overlooked part of software dev is CSS

Elements are nice but they are really just prepackaged CSS
    (Exception: input.  special because it handles text input)

Turn div into button, walk through code
  border, display, padding, margin, hex codes
  pseudo classes

Flexbox
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

Examples:
https://projects.invisionapp.com/d/main#/console/10073721/214820298/preview
- blue download button
- table in top left
- whole page?


RESPONSIVE DESIGN SETUP:
Great tutorial: https://developers.google.com/web/fundamentals/design-and-ux/responsive/

1) set viewport:
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
2) what is a media query?
```
@media (query) {
  /* CSS Rules used when query matches */
}
```
    these options:
      min-width
      max-width
      min-height
      max-height
      orientation=portrait
      orientation=landscape
      print

    ... plus boolean logic!

    example:
```
@media (min-width: 500px) and (max-width: 600px) {
    h1 {
      color: fuchsia;
    }

    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
}
```

3) device specific stylesheets:

```
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
```

4) add media queries:


Some guidelines:
- start smallest, work up
- use chrome devtools to view under different devices
