# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div />
    <!--M_*1 #div/1-->
    <div>
      <div>
        1
        <!--M_*3 #text/0-->
      </div>
      <!--M_$3-->
      <div>
        <div>
          1.1
          <!--M_*5 #text/0-->
        </div>
        <!--M_$5-->
      </div>
      <div>
        <div>
          1.2
          <!--M_*7 #text/0-->
        </div>
        <!--M_$7-->
      </div>
      <div>
        <div>
          1.3
          <!--M_*9 #text/0-->
        </div>
        <!--M_$9-->
      </div>
      <!--M_|2 #text/1 8 6 4-->
    </div>
    <div>
      <div>
        2
        <!--M_*11 #text/0-->
      </div>
      <!--M_$11-->
      <div>
        <div>
          2.1
          <!--M_*13 #text/0-->
        </div>
        <!--M_$13-->
      </div>
      <div>
        <div>
          2.2
          <!--M_*15 #text/0-->
        </div>
        <!--M_$15-->
      </div>
      <div>
        <div>
          2.3
          <!--M_*17 #text/0-->
        </div>
        <!--M_$17-->
      </div>
      <!--M_|10 #text/1 16 14 12-->
    </div>
    <div>
      <div>
        3
        <!--M_*19 #text/0-->
      </div>
      <!--M_$19-->
      <div>
        <div>
          3.1
          <!--M_*21 #text/0-->
        </div>
        <!--M_$21-->
      </div>
      <div>
        <div>
          3.2
          <!--M_*23 #text/0-->
        </div>
        <!--M_$23-->
      </div>
      <div>
        <div>
          3.3
          <!--M_*25 #text/0-->
        </div>
        <!--M_$25-->
      </div>
      <!--M_|18 #text/1 24 22 20-->
    </div>
    <!--M_|1 #text/2 18 10 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D={1:_.a={items:[1,2,3],"LoopScopeMap:#text/2":new Map(_.b=[[0,_.f={outerItem:1,"#childScope/0":_.c={name:"1"},"LoopScopeMap:#text/1":new Map(_.d=[[0,_.g={"#childScope/0":_.e={name:"1.1"}}],[1,_.i={"#childScope/0":_.h={name:"1.2"}}],[2,_.k={"#childScope/0":_.j={name:"1.3"}}]])}],[1,_.o={outerItem:2,"#childScope/0":_.l={name:"2"},"LoopScopeMap:#text/1":new Map(_.m=[[0,_.p={"#childScope/0":_.n={name:"2.1"}}],[1,_.r={"#childScope/0":_.q={name:"2.2"}}],[2,_.t={"#childScope/0":_.s={name:"2.3"}}]])}],[2,_.x={outerItem:3,"#childScope/0":_.u={name:"3"},"LoopScopeMap:#text/1":new Map(_.v=[[0,_.y={"#childScope/0":_.w={name:"3.1"}}],[1,_.A={"#childScope/0":_.z={name:"3.2"}}],[2,_.C={"#childScope/0":_.B={name:"3.3"}}]])}]])},2:_.f,3:_.c,4:_.g,5:_.e,6:_.i,7:_.h,8:_.k,9:_.j,10:_.o,11:_.l,12:_.p,13:_.n,14:_.r,15:_.q,16:_.t,17:_.s,18:_.x,19:_.u,20:_.y,21:_.w,22:_.A,23:_.z,24:_.C,25:_.B},_.f._=_.o._=_.x._=_.a,_.a.write=_.c.write=_.e.write=_.h.write=_.j.write=_.l.write=_.n.write=_.q.write=_.s.write=_.u.write=_.w.write=_.z.write=_.B.write=_._["__tests__/template.marko_0/write"](_.a),_.g._=_.i._=_.k._=_.f,_.p._=_.r._=_.t._=_.o,_.y._=_.A._=_.C._=_.x,_.D),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",9,"__tests__/tags/child.marko_0_name_write",11,"__tests__/tags/child.marko_0_name_write",13,"__tests__/tags/child.marko_0_name_write",15,"__tests__/tags/child.marko_0_name_write",17,"__tests__/tags/child.marko_0_name_write",19,"__tests__/tags/child.marko_0_name_write",21,"__tests__/tags/child.marko_0_name_write",23,"__tests__/tags/child.marko_0_name_write",25,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
destroyed 3.1
destroyed 3.2
destroyed 3.3
destroyed 3
destroyed 1.3
destroyed 2.3
    </div>
    <!--M_*1 #div/1-->
    <div>
      <div>
        1
        <!--M_*3 #text/0-->
      </div>
      <!--M_$3-->
      <div>
        <div>
          1.1
          <!--M_*5 #text/0-->
        </div>
        <!--M_$5-->
      </div>
      <div>
        <div>
          1.2
          <!--M_*7 #text/0-->
        </div>
        <!--M_$7-->
      </div>
      <!--M_|2 #text/1 8 6 4-->
    </div>
    <div>
      <div>
        2
        <!--M_*11 #text/0-->
      </div>
      <!--M_$11-->
      <div>
        <div>
          2.1
          <!--M_*13 #text/0-->
        </div>
        <!--M_$13-->
      </div>
      <div>
        <div>
          2.2
          <!--M_*15 #text/0-->
        </div>
        <!--M_$15-->
      </div>
      <!--M_|10 #text/1 16 14 12-->
    </div>
    <!--M_|1 #text/2 18 10 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D={1:_.a={items:[1,2,3],"LoopScopeMap:#text/2":new Map(_.b=[[0,_.f={outerItem:1,"#childScope/0":_.c={name:"1"},"LoopScopeMap:#text/1":new Map(_.d=[[0,_.g={"#childScope/0":_.e={name:"1.1"}}],[1,_.i={"#childScope/0":_.h={name:"1.2"}}],[2,_.k={"#childScope/0":_.j={name:"1.3"}}]])}],[1,_.o={outerItem:2,"#childScope/0":_.l={name:"2"},"LoopScopeMap:#text/1":new Map(_.m=[[0,_.p={"#childScope/0":_.n={name:"2.1"}}],[1,_.r={"#childScope/0":_.q={name:"2.2"}}],[2,_.t={"#childScope/0":_.s={name:"2.3"}}]])}],[2,_.x={outerItem:3,"#childScope/0":_.u={name:"3"},"LoopScopeMap:#text/1":new Map(_.v=[[0,_.y={"#childScope/0":_.w={name:"3.1"}}],[1,_.A={"#childScope/0":_.z={name:"3.2"}}],[2,_.C={"#childScope/0":_.B={name:"3.3"}}]])}]])},2:_.f,3:_.c,4:_.g,5:_.e,6:_.i,7:_.h,8:_.k,9:_.j,10:_.o,11:_.l,12:_.p,13:_.n,14:_.r,15:_.q,16:_.t,17:_.s,18:_.x,19:_.u,20:_.y,21:_.w,22:_.A,23:_.z,24:_.C,25:_.B},_.f._=_.o._=_.x._=_.a,_.a.write=_.c.write=_.e.write=_.h.write=_.j.write=_.l.write=_.n.write=_.q.write=_.s.write=_.u.write=_.w.write=_.z.write=_.B.write=_._["__tests__/template.marko_0/write"](_.a),_.g._=_.i._=_.k._=_.f,_.p._=_.r._=_.t._=_.o,_.y._=_.A._=_.C._=_.x,_.D),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",9,"__tests__/tags/child.marko_0_name_write",11,"__tests__/tags/child.marko_0_name_write",13,"__tests__/tags/child.marko_0_name_write",15,"__tests__/tags/child.marko_0_name_write",17,"__tests__/tags/child.marko_0_name_write",19,"__tests__/tags/child.marko_0_name_write",21,"__tests__/tags/child.marko_0_name_write",23,"__tests__/tags/child.marko_0_name_write",25,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE div after html/body/div2
REMOVE #text in html/body/div0
INSERT #text
REMOVE div after html/body/div1/div2
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE div after html/body/div2/div2
```