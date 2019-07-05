# Riot 4 Examples

This is a sample project using Riot 4 which you need only browser to compile.
I use all range of frameworks depend on my purpose. For most of my internal company projects 
don't require heavy lifting frameworks with Node to transpile; such as, Vue, Angular, or React.
Having said that, I cannot go back too basic, e.g. only jQuery, in order to avoid chaotic situation in the future.

The best part of Riot is that it compiles on the browser, and it supports all modern 
component based UI mechanism with reasonable learning curve. This is very useful for me because
I have to split tasks with other team members in different skill levels.

*"Understand and stay way of cargo cult" - [Julio Biason .Net 4.0 - Things I Learnt The Hard Way (in 30 Years of Software Development)](https://blog.juliobiason.net/thoughts/things-i-learnt-the-hard-way/)*

## Stack 

1. [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and [SB Admin 2](https://startbootstrap.com/themes/sb-admin-2/) - CSS Template and Design
2. [Riot 4](https://riot.js.org/) - Componet based UI Library
3. [Akita 4](https://netbasal.gitbook.io/akita/) - State Management [CDN](https://www.pika.dev/packages/@datorama/akita)
4. [Axios 0.19.0](https://github.com/axios/axios) - HTTP
5. [Navigo 6](https://github.com/krasimir/navigo) - Routing

I carefully selected other components to fit Riot's theme ... minimalistic but mature enough. They are not random gathering from github.

## Running

you can use any http server on your machine. Clone this repo then

```
npm i -g live-server
```

Then

```
live-server
```

or for python user

```
python3 -m http.server
```

## Implementation

You can login using any credentials (type anyting in username and password). 
All dummy data files are located under /api/ folder.

I saved external libraries under /vendor/. This is because I hate some minor update of those libraries
break the current setup; however, most of case, you don't have to save those files, just directly
link to from the CDN (even simpler).

I was also playing around with Akita since I was watching this from last year as replacement of rxjs. 
Using Akita, I implemented a breadcrumb which you can push some items, and pop
when you go back. Try to click "Friends" section of details page.

![sample.png (600×312)](https://raw.githubusercontent.com/kiichi/riotjs4-examples/master/screenshot/sample.png)

## Known issue

Note: somehow left side of this statement below returns null if subscribe contains this.update inside.
it works if it assigns it to a temp variable, then attach it to the state in separate line.
See onMounted event in each component

```javascript
const sub = this.query.select('list').subscribe(list => {
    this.update({list:list})
});
this.state.subscription = sub;
```


## Reference

- [MDN - Module Examples](https://github.com/mdn/js-examples/)
- [damusix/riot-4-boilerplate: A complete starting point for Riot 4](https://github.com/damusix/riot-4-boilerplate)
- [nesterow/frontless-redux: redux store for frontless](https://github.com/nesterow/frontless-redux)
