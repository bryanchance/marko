# Render
```html
<html>
  <head />
  <body>
    <!--M_[5-->
    <button>
      0
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_]4 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.b={"#scopeOffset/1":3,count:0,"#childScope/0":_.a={},"ClosureScopes:count":_.e=new Set},2:_.a,4:{"ConditionalScope:#text/0":_.c={_:_.b,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},5:_.c},_.a["@TagVariableChange"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.a),_.a["/TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),(_.e).add(_.c),_.d),5,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[5-->
    <button>
      1
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_]4 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.b={"#scopeOffset/1":3,count:0,"#childScope/0":_.a={},"ClosureScopes:count":_.e=new Set},2:_.a,4:{"ConditionalScope:#text/0":_.c={_:_.b,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},5:_.c},_.a["@TagVariableChange"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.a),_.a["/TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),(_.e).add(_.c),_.d),5,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[5-->
    <button>
      2
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_]4 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.b={"#scopeOffset/1":3,count:0,"#childScope/0":_.a={},"ClosureScopes:count":_.e=new Set},2:_.a,4:{"ConditionalScope:#text/0":_.c={_:_.b,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},5:_.c},_.a["@TagVariableChange"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.a),_.a["/TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),(_.e).add(_.c),_.d),5,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[5-->
    <button>
      3
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_]4 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.b={"#scopeOffset/1":3,count:0,"#childScope/0":_.a={},"ClosureScopes:count":_.e=new Set},2:_.a,4:{"ConditionalScope:#text/0":_.c={_:_.b,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},5:_.c},_.a["@TagVariableChange"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.a),_.a["/TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.b),(_.e).add(_.c),_.d),5,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```