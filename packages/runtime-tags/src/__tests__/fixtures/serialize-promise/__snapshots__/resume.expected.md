# Render
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      0
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{promise:new Promise((f,r)=&gt;_.a={f,r})}}),1,"__tests__/template.marko_0_promise"];M._.w();M._.r.push(_=&gt;(_.a.f("hello"),_.c={}))
    </script>
  </body>
</html>
```


# Render ASYNC
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      hello
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{promise:new Promise((f,r)=&gt;_.a={f,r})}}),1,"__tests__/template.marko_0_promise"];M._.w();M._.r.push(_=&gt;(_.a.f("hello"),_.c={}))
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
INSERT html/body/div/#text
```