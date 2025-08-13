# Как этим пользоваться
Подключаем файл `accordion.js` к документу и создаем
аккордеон в таком виде:
```html
<div class="accordion">
    <div class="accordion__item">
        <div class="accordion__title">Title #1</div>
        <div class="accordion__text accordion__text_hidden">Some text #1</div>
    </div>
    <div class="accordion__item">
        <div class="accordion__title">Title #2</div>
        <div class="accordion__text accordion__text_hidden">Some text #2</div>
    </div>
    <div class="accordion__item">
        <div class="accordion__title">Title #3</div>
        <div class="accordion__text accordion__text_hidden">Some text #3</div>
    </div>
</div>
```
При необходимости названия классов можно поменять в файле `accordion.js`.