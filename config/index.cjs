/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx53ec51ffc7880f4e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7d43ad8d85e4536e0fa6d7fada92b1a9',

  PROVINCE: '福建',
  CITY: '宁德',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7JCs59hvPdQXFju0IjTd9FhbRYg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Fn3yrRBTNp47nCQ3hm904axSpqk7bBVYAJUaiPw2mzE',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '1996', date: '03-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '老公', year: '1996', date: '10-04',
        },
        {
          
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-14' },
        
      ],
    },
  ],


 
    }
  ],

}

module.exports = USER_CONFIG

