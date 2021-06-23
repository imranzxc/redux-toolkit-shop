# Оффлайн интернет-магазин на React (без Redux)

## Summary 

Разработка приложения на React – это часто попытка красиво отобразить содержимое [глобального стейта](https://studme.org/379221/informatika/globalnoe_sostoyanie). 

В качестве глобального стейта (глобального состояния) обычно выступает JavaScript-объект, т.к. он позволяет хранить много разнотипных значений.

Компоненты приложения обращаются к глобальному стейту, забирая из него необходимые данные для дальнейшей отрисовки. Некоторые компоненты обращаются к стейту для того, чтобы его как-то изменить. **Когда компонент изменяет глобальный стейт очень важно следить за тем, чтобы он изменил только его определенную нужную часть, а не весь объект стейта.**

В данном челлендже тебе придется на практике столкнуться со всеми нюансами работы с глобальным стейтом. Также нужно будет разобраться со "сложными" компонентами, которые взаимодействуют с глобальным стейтом, с родительским компонентом, а также отрисовывают свои дочерние компоненты.

После выполнения челленджа у тебя должно получиться следующее приложение: [react-shopcamp.herokuapp.com](https://react-shopcamp.herokuapp.com/). Дизайн твоего проекта может отличаться от демонстрационного, однако следи за тем, чтобы не было "съехавших" блоков и других интерфейсных ошибок.

### Техническое задание

– При клике на название сайта в шапке профиля должны выводиться все продукты.

– При клике на название категории в сайдбаре выводятся только продукты из этой категории (должно быть реализовано на роутах, в проекте есть заготовка).

– Если товара нет на складе (`left = 0`), то кнопка добавления не активна (`disabled={true}`).

– После добавления товара в корзину кнопка также не активна.

– Над иконкой корзины количество товаров в ней. Если товаров нет, то бейдж не должен отображаться.

– При клике на иконку корзины всплывает окно с содержимым корзины. Если корзина пуста, то выводится соответствующее сообщение.

– Список товаров должен содержать порядоковый номер, фотографию, название и остаток товара на складе за вычетом количества, которое уже добавлено в корзину.

– При открытии корзины в строке товаров должна быть возможность увеличить или уменьшить количество товара.

– При уменьшении количества товаров минимальное значение должно быть равно единице.

– При увеличении количества товаров максимальное значение должно быть равно остатку товара на складе (значение `left`)

– Должна быть возможность удаления товара из корзины.

![](./demo.gif)

## Releases

В этом челлендже нет строго фиксированных релизов. Можешь начинать с той части приложения, где тебе удобнее.

### Важные темы, которые помогут тебе быстрее разобраться с проектом

#### dispatch – action – reducer 

Хорошо разберись с этой связкой. Любое изменение в глобальном стейте делается через вызов `dispatch`. В `dispatch` передается `action` со свойством `type`. Затем вызывается `reducer`, который должен вернуть **новый измененный глобальный стейт**. Никаких других способов изменения стейта нет.

#### position

Для позиционирования блока корзины тебе понадобится CSS-свойство `position` и другие свойства, которые используются вместе с ним. Удели полчаса на разбор этих свойств отдельно от приложения.

#### find, filter, map

Методы обхода массива нужны в проекте повсеместно. Вкратце запомни:

`filter` – если что-то нужно удалить  
`map` – если нужно изменить что-то внутри массива  
`find` – если нужно найти один элемент массива по определенному условию.

#### spread

Оператор распространения `...` часто нужен когда в массив или объект добавляется что-то новое не удаляя старое. К примеру тебе нужно будет добавлять товары в массив корзины😉.

