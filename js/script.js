const messageText = document.querySelector('#messageText');
const Button = document.querySelector('#btn');

Button.addEventListener("click",() => {
    const listNumber = Math.ceil(Math.random() * 2);
    messageText.innerHTML = messageList[listNumber].main;
});

const messageList =[
    {
        listNumber: "template",
        main: `text<br>`
    },//カンマを忘れずに！
    {
        listNumber: 1,
        main: `あなたがあなたらしく生きることが<br>
        この世界で何よりも大切なことです。<br>
        <br>
        それ以外に大切なことがあるのだとすれば<br>
        それは「あなたが望むこと」だけなのです。<br>
        <br>
        それはつまり<br>
        あなたの“自由意思”がこの世界で<br>
        一番力を持つということです。<br>
        <br>
        あなたがあなたを信じてください。<br>
        <br>
        この世界を思うままに創造する力とは<br>
        あなたが存在する意味そのものなのです。<br>`
    },
    {
        listNumber: 2,
        main: `あなたが望むもの<br>
        それがこの世界のすべてです。<br>
        <br>
        破滅を恐れないでください。<br>
        それはすでにあなたの中にあります。<br>
        <br>
        幸福を恐れないでください。<br>
        それはすでにあなたの中にあります。<br>
        <br>
        すべてがすでにあなたの中にあり<br>
        すべてがあなたから始まっていることを<br>
        思い出してください。<br>
        <br>
        あなたがあなたの世界を創造しています。<br>
        それだけがこの世界の真実なのです。<br>`
    },

];
