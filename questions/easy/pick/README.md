<!--
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 18:00:46
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-14 18:01:27
-->
#### Implement the built-in Pick<T, K> generic without using it.

#### Constructs a type by picking the set of properties K from T

#### For example

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```