# 学び

## filter 関数

`const filterNotes = notes.filter((note) => note.id !== id);`

アロー関数で実行する判定が true の時だけ戻り値に格納する

## テンプレートリテラル

```JavaScript
className={`app-sidebar-note ${note.id === activeNote && "active"}`}
```

`${}`を使って文字列の中に式を埋め込むことができる。

# 気になること

## map 関数

`notes.map((note) => ());`って書くけど、なんでアロー関数の右側が`()`なんだろう。

function 定義するときは`const hogehoge() =>{}`みたいにアロー関数の右側が`{}`なのに。
