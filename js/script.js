// 1.Напишите программу, которая считает количество секунд в часе.

let secondToMinute = 60;
let minuteToHour = 60;
let hour = secondToMinute * minuteToHour;

console.log(hour);

// 2.Создайте переменную myNumber и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода alert.

let myNumber = 2022;
alert(myNumber);

// 3.Спросите имя пользователя с помощью метода prompt. Выведите сообщение на страницу с помощью document.write : “Рад знакомству {имя пользователя}!”.
let name = prompt("Здравствуйте,как ваше имя?");
document.write("Рад знакомству!" + name);

// 4.Даны два числа a, b. Написать программу, которая считает среднее арифметическое двух чисел.

let a = 45;
let b = 55;

a += b;
console.log(a);

// 5.Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.

let youNumber = prompt("This is your number.");
youNumber++;
document.write(youNumber);

// 6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
// - Имя
// - Возраст
// - Список друзей
// - Почтовый адрес
// - Электронный адрес

let user = {
  userName: "Aiperi",
  age: 31,
  friendList: "Aidai Tilek Maksat",
  mailAddress: true,
  emailAddress: "aipei.cholponkulova.alt@gmail.com",
};
console.log(user.userName);
console.log(user.age);
console.log(user.friendList);
console.log(user.mailAddress);
console.log(user.emailAddress);

// 7. Создайте объект описывающий блог-пост на сайте:
// - Название поста
// - Автор поста
// - Дата публикации поста
// - Тело поста (содержит текст поста)
// - Картинка поста (содержит url картинки)
// - Теги поста

// let blogPost = {
//   postTitle: "macarons",
//   postAutor: "edim doma",
//   postPublicationDate: "02.08.2019",
//   postText:
//     "Как только у нас его не называют — макарон, макарун, макаронс, макарони… Истинные сластены сразу понимают, о чем идет речь. О знаменитом французском десерте на основе миндальной меренги. И хотя выглядит он незамысловато, приготовить его по всем канонам — целое искусство, освоить которое непросто. Сегодня мы раскроем главные кулинарные хитрости легендарного лакомства, разберем оригинальные рецепты, а заодно узнаем историю его возникновения.",
//   postFoto:
//     "https://e3.edimdoma.ru/data/posts/0002/2907/22907-ed4_wide.jpg?1631188310",
//   postTeg: "#nice, #macarons, #tastymacarons, #edimdoma",
// };
// console.log(blogPost.postTitle);
// console.log(blogPost.postAutor);
// console.log(blogPost.postPublicationDate);
// console.log(blogPost.postText);
// console.log(blogPost.postFoto);
// console.log(blogPost.postTeg);

// 8.Создайте массив с именами пользователей.

let userName = ["Azamat", "Aidai", "Abai", "Belek", "Kanat"];
console.log(userName);

// 9.Создайте массив с url адресами на разные картинки.

let urlImg = [
  "https://cookery.site/wp-content/uploads/2019/12/photo_948761.jpg",
  "https://s1.eda.ru/StaticContent/Photos/140902214744/140918171452/p_O.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGX2y4EQy10h7k_RjBBExd_MiicE3PVLTTTFRoBjGOXMrZ_kX55_lsuAAZ6JRPkdxfEio&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaB8xBKRvpgaylDL7K0kojQTvXW871bcZhpArToenTBeSLpUvc6-AMbE0tnxvKmGETwU&usqp=CAU",
];

console.log(urlImg);

// 10.Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.

let blogPost = [
  {
    postTitle: "macarons",
    postAutor: "edim doma",
    postPublicationDate: "02.08.2019",

    postText:
      "Как только у нас его не называют — макарон, макарун, макаронс, макарони… Истинные сластены сразу понимают, о чем идет речь. О знаменитом французском десерте на основе миндальной меренги. И хотя выглядит он незамысловато, приготовить его по всем канонам — целое искусство, освоить которое непросто. Сегодня мы раскроем главные кулинарные хитрости легендарного лакомства, разберем оригинальные рецепты, а заодно узнаем историю его возникновения.",

    postFoto:
      "https://e3.edimdoma.ru/data/posts/0002/2907/22907-ed4_wide.jpg?1631188310",
    postTeg: "#nice, #macarons, #tastymacarons, #edimdoma",
  },
];
console.log(blogPost);
