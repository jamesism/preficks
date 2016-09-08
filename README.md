# preficks

Resolves a css property to a prefixed one if necessary.

```
// get a prefixed transform prop name
// preficks('transform') ~ 'webkitTransform'
el.style[preficks('transform')] = 'scale(1337)';
```
