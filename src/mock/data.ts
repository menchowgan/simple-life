import type {
  ArticleSimpleInfoModel,
  PhotoModel,
  MusicModel,
  VideoModel
} from '@/utils/interfaces'

const vidoe: VideoModel =  {
  title: '我们的爱情',
  evalution: '记录下我们的爱情！',
  artist: '甘梦超 & 徐婷婷'
}

const article: ArticleSimpleInfoModel = {
  brief: 
"页面由本人进行个性化设计符合自己的风格，旨在分享日常工作和学习之用、以及自己的兴趣爱好，音乐游戏旅游发表相应的文章进行分享;\n在本人个人网页搭建中使用Vue3作为框架，实践自己封装axios http请求库，实现拦截器对请求钱和请求后的config和response进行进一步处理；后端使用go结合Gin后端框架进行开发，对前端上传的图片音频文件进行存取，访问者在房页面时请求后台获取展示数据。。。",
  date: "2022-06-12T13:06:32.027+08:00",
  id: 1,
  imgUrl: "http://8.136.84.136:81/1/article/vue&gin.jpg",
  title: "Vue3 + Gin(Go)搭建个人主页",
  userId: 1
}

const musics: MusicModel[] = [{
  id: 1,
  audioUrl: 'http://dl.stream.qqmusic.qq.com/C4000004d30U0tsdrH.m4a?guid=4878077028&vkey=0469B8D9B4072A2D4FA2F8AE9288290A34964110FAD88CF6EEC023A6D88410FBEEEF355CCE4AC56F4C9120CE801E97BB01AE067A8173CF32&uin=&fromtag=120032',
  title: '乌梅子酱',
  paused: false,
  evalution: '太经典了'
}]

const photos: PhotoModel[] = [
  {
    id: 0,
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchenpi%2F809071%2Fo_bg.jpg&refer=http%3A%2F%2Fimages.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=7cec63749b30c1e95f355c1257d7551a"
  },
  {
    id: 1,
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchenpi%2F809071%2Fo_bg.jpg&refer=http%3A%2F%2Fimages.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=7cec63749b30c1e95f355c1257d7551a",
  },
  {
    id: 2,
    url: "https://img2.baidu.com/it/u=70814297,2782616976&fm=253&fmt=auto&app=138&f=JPEG?w=490&h=513",
  },
  {
    id: 3,
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F1118135%2F201707%2F1118135-20170719095351052-380810440.jpg&refer=http%3A%2F%2Fimages2015.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=27b05c424f2cad2a9adb6f99eb69e3bb"
  }
]

const articleSimpleInfos: ArticleSimpleInfoModel[] = [{
  title: 'Vue3 + Gin',
  brief: '本人目前前端从业一年，前端学习时长三年，从基础的HTML+CSS+JavaScript，到jQuery，再到Vue全家桶，系统学习过三件套和两个框架，实践经验两到三个，做此个人主页一是以提高技术为目标，二是分享个人学习经验和日常兴趣爱好，为自己创造个自己的创作空间。',
  date: '2023-03-18'
}, {
  title: 'Vue3 + Gin',
  brief: '本人目前前端从业一年，前端学习时长三年，从基础的HTML+CSS+JavaScript，到jQuery，再到Vue全家桶，系统学习过三件套和两个框架，实践经验两到三个，做此个人主页一是以提高技术为目标，二是分享个人学习经验和日常兴趣爱好，为自己创造个自己的创作空间。',
  date: '2023-03-18'
}, {
  title: 'Vue3 + Gin',
  brief: '本人目前前端从业一年，前端学习时长三年，从基础的HTML+CSS+JavaScript，到jQuery，再到Vue全家桶，系统学习过三件套和两个框架，实践经验两到三个，做此个人主页一是以提高技术为目标，二是分享个人学习经验和日常兴趣爱好，为自己创造个自己的创作空间。',
  date: '2023-03-18'
}]
 
const audios: MusicModel[] = [
  {
    id: 1,
    audioUrl: 'http://dl.stream.qqmusic.qq.com/C4000004d30U0tsdrH.m4a?guid=4878077028&vkey=0469B8D9B4072A2D4FA2F8AE9288290A34964110FAD88CF6EEC023A6D88410FBEEEF355CCE4AC56F4C9120CE801E97BB01AE067A8173CF32&uin=&fromtag=120032',
    title: '乌梅子酱',
    artist: '李荣浩',
    paused: false,
    evalution: '太经典了'
  },
  {
    id: 1,
    audioUrl: 'http://dl.stream.qqmusic.qq.com/C4000004d30U0tsdrH.m4a?guid=4878077028&vkey=0469B8D9B4072A2D4FA2F8AE9288290A34964110FAD88CF6EEC023A6D88410FBEEEF355CCE4AC56F4C9120CE801E97BB01AE067A8173CF32&uin=&fromtag=120032',
    title: '乌梅子酱',
    artist: '李荣浩',
    paused: false,
    evalution: '太经典了'
  },
]


export {
  vidoe,
  article,
  musics,
  photos,
  articleSimpleInfos,
  audios
}