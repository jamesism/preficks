# preficks

Resolves a css property to a prefixed one if necessary.

```
// get a prefixed transform prop name
// preficks('transform') ~ 'webkitTransform'
el.style[preficks('transform')] = 'scale(1337)';
```

The second param is a boolean to indicate whether or not you're in react land and need capital prefixes for some reason.

```
// preficks('transform', true) ~ 'WebkitTransform'
<Component style={{[preficks('transform', true)]: 'scale(1337)'}} />
```
