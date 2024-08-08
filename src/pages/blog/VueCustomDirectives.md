# 自定义指令 v-xxx

<!--不推荐在组件上使用,而是使用在DOM元素上-->

[自定义指令 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/reusability/custom-directives.html)

## 最简使用

### 在组件中使用

```
<script setup lang="ts">
import {Directive} from "vue";

const vFocus:Directive = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus>
</template>
```

在`script setup`中以`vXxx`命名的变量(camelCase)会被视为**自定义指令**

类型为`Directive`

一般都会用`script setup`的了所以不用的情况用到再另外看

### 全局注册

```
app.directive('xxx', {
  /* ... */
})
```

> 只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 `v-bind` 这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好。

## 指令钩子

```
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

跟生命周期钩子差不多,基本不用看

### 每个参数

* `el` DOM元素本身,用于操作DOM **最常用**
* `binding` 是一个对象,包含以下值
  * `value` 传递给指令的值 `v-xxxxx="2"` 则`value`的值为`2`
  * `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
  * `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
  * `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
  * `instance`：使用该指令的组件实例。 **不懂**
  * `dir`：指令的定义对象。 **不懂**
* `vnode` 虚拟DOM **用不上**
* `prevVnode`：代表之前的渲染中指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。**用不上**

## 简化形式

仅仅在 `mounted` 和 `updated` 上实现相同的行为

直接传入一个**函数**而非**对象**

```
<script setup lang="ts">
import {Directive} from "vue";

const vFocus: Directive = (el:HTMLInputElement) => {
  el.focus()
}
</script>

<template>
  <div>自定义指令</div>
  <input v-focus>
</template>
```

## 实战

创建一个自定义指令`v-copy`实现双击复制给定文本,如果没有给定文本,则复制dom元素中的文本,如果都没有则弹窗报错

```
<script setup lang="ts">
import {Directive} from "vue";

interface CopyElement extends HTMLElement {
  copyValue: string
  _copyMsg: () => Promise<void>
}

const vCopy: Directive = {
  created: (el: CopyElement, binding) => {
    if (binding.value) {
      el.copyValue = binding.value
    } else if (el.innerText) {
      el.copyValue = el.innerText
    }

    const copyMsg = async () => {
      el.style.backgroundColor = 'blue'
      const clipboard = navigator.clipboard
      if (clipboard) {
        try {
          if (!el.copyValue) throw Error('无可复制文本')
          await clipboard.writeText(el.copyValue)
          alert('复制成功,复制的文本为 ' + el.copyValue)
        } catch (e: any) {
          alert('复制失败:' + (e as Error).message)
        }
      }
    }
    el.addEventListener('dblclick', copyMsg)
    el._copyMsg = copyMsg
  },
  updated: (el: CopyElement, binding) => {
    el.copyValue = binding.value
  },
  beforeUnmount: (el: CopyElement) => {
    el.removeEventListener('dblclick', el._copyMsg)
  }
}
</script>

<template>
  <div>自定义指令</div>
  <div class="box" v-copy="'你好hahahah'">asdasd</div>
  <div class="box" v-copy>我是div的文本</div>
</template>

```

**优化空间很大**

## 批量全局注册组件

参考自`pure-admin`[Pure Admin 保姆级文档 (pure-admin.github.io)](https://pure-admin.github.io/pure-admin-doc/)

创建一个文件夹专门用来保存自定义组件

```
├───directives
│   │   index.ts
│   │   
│   ├───copy
│   │       index.ts
│   │       
│   └───foucs
│           index.ts
```

`index` 作为出口文件

每个命令暴露并在index中统一暴露

```
//./foucs/index.ts
import {Directive} from "vue";

export const focus:Directive = (el:HTMLInputElement)=> el.focus() //简单示例
```

```
//./index.ts
export * from './copy/index'
export * from './foucs/index'
```

在入口文件`main.ts`中导入

```
// main.ts
import * as directives from "./directives";
Object.keys(directives)
    .forEach(key =>
        app.directive(key, (directives as { [key: string]: Directive })[key]))
```

使用Object.key()方法将对象转换为key的数组[Object.keys() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

并使用`forEach`方法循环遍历注册
