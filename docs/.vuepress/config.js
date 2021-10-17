module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '十六', // 网站的标题
    description: '十六的测试博客', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        //logo: '/dh_logo.jpg',
        author: 'me',
        record: '鄂ICP备2020023485号',
        recordLink: 'http://beian.miit.gov.cn',
        "startYear": "2017", //开始年份
        nav: [
          { text: 'Home', link: '/' },
          // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
          { text: '百度', link: 'https://www.baidu.com' },
          { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
          { text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: '' },
          // 支持嵌套,形成下拉式的导航菜单
          {
            text: '语言',
            ariaLabel: 'Language Menu',
            items: [
              { text: '中文', link: '/language/chinese/' },
              { text: '英文', link: '/language/english/' }
            ]
          }
        ]
      }
  }