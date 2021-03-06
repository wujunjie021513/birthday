// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
// 感谢大佬！2020年11月10日初版尝试，11日修改完稿
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "（一）", 
        "巴黎现在气温挺低的",
        "头发要吹干了才去睡觉",
        "当心别感冒啦",
        "三餐也要好好吃~",
        "（二）",
        "2020年是跌宕起伏的一年",
        "发生了很多不可思议的事情",
        "虽然有好事、也有坏事",
        "但终究会成为前进的力量",
        "（三）",
        "茄，生日快乐！",
        "不知道封城后蛋糕好买吗", 
        "送你一个电子大蛋糕啦！",
        "愿你身体健康~",
        "愿你工作快乐！",
        "愿你诸事顺利~",
        "愿你不忘初心",
        "Finally",
        "配乐是蜂蜜与四叶草的bgm",
        "柔和的时间",
        "我很喜欢它平静的感觉",
        "也分享给你",
        "希望你的盒子里",
        "有更多的欢笑和快乐",
        "最后再说一遍",
        "生日快乐~~!",
        "（撒花~）",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "巴黎现在气温挺低的": "./imgs/1_1_Paris.png",
        "头发要吹干了才去睡觉": "./imgs/1_2_Hair.png",
        "2020年是跌宕起伏的一年": "./imgs/2_1.png",
        "虽然有好事、也有坏事": "./imgs/2_3.png",
        "但终究会成为前进的力量": "./imgs/2_4.png",
        "茄，生日快乐！": "./imgs/qie.png",
        "送你一个电子大蛋糕啦！": "./imgs/3_3.png",
        "柔和的时间": "./imgs/4_2.png",
        "有更多的欢笑和快乐": "./imgs/4_6.png",
        "生日快乐~~!": "./imgs/4_8.png",
        "（撒花~）": "./imgs/4_9.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "按一按试试？",
        play: "放音乐",
        bannar_coming: "挂生日彩带",
        balloons_flying: "放生日气球",
        cake_fadein: "来个生日大蛋糕",
        light_candle: "点根蜡烛",
        wish_message: "茄生日快乐啦啦啦!",
        story: "一小段留言~",
    }
};
