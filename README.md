# Title-Case
Method for title-casing stuff

## In Progress! :large_blue_diamond:
Since CSS doesn't include any transform methods for uppercasing stuff, and neither does JavaScript, I thought I'd add something to the prototype for English speakers 

### Examples of what this should look like in use:

String.prototype.titleCase([special cases: Array])

```javascript
'fiddler on the roof'.titleCase()
// 'Fiddler on the Roof'
'at&t is amazing: the movie'.titleCase(['AT&T'])
// 'AT&T is Amazing: the Movie
'garfield 3: cat on a hot lasagne roof'.titleCase(['On','A','hot'])
// 'Garfield 3: Cat On A hot Lasagne Roof'
```
