type requestMethods = "post" | "get" | "put" | "delete"

export interface ConfigModel {
  url: string,
  method?: requestMethods
}

const userRequests: Record<string, ConfigModel> = {
  "GET_USER_SIMPLE_INFO": {
    url: "/user/get-user-simple-info",
    method: "get"
  },
  "SEARCH_USER_BRIEF": {
    url: "/user/search-user-brief",
    method: "get"
  },
  "GET_INFO": {
    url: "/user/get",
    method: "get"
  },
  "SIMPLE_LIFE": {
    url: "/user/simple-life/{id}",
    method: 'post'
  },
  "POST_USER_INFO": {
    url: "/user/person-info-post",
    method: "post"
  },
}

const photoRequests: Record<string, ConfigModel> = {
  "AVATAR_UPLOAD": {
    url: "/photo/avatar/upload",
    method: "post"
  },
  "PHOTO_UPLOAD": {
    url: "/photo/user/photos/upload",
    method: "post"
  },
  "DELETE_UPLOAD": {
    url: "/photo/user/photos/delete",
    method: "delete"
  }
}

const musicRequests: Record<string, ConfigModel> = {
  "MUSIC_UPLOAD": {
    url: "/music/upload",
    method: "post"
  },
  "MUSIC_COVER_UPLOAD": {
    url: "/music/cover/upload",
    method: "post"
  },
  "MUSIC_USER_UPLOAD": {
    url: "/music/user/upload",
    method: "post"
  },
  "MUSIC_QUERY_BY_USERID": {
    url: "/music/query/{userId}",
    method: "post"
  },
}

const articleRequests: Record<string, ConfigModel> = {
  "ARTICLE_PHOTO_UPLOAD": {
    url: "/article/photo/upload",
    method: "post"
  },
  "ARTICLE_UPLOAD": {
    url: "/article/upload",
    method: "post"
  },
  "ARTICLE_QUERY": {
    url: "/article/query/{articleId}",
    method: "get"
  },
  "ARTICLE_QUERY_BY_TYPE": {
    url: "/article/query-by-type/{userid}/{type}",
    method: "get"
  },
  "ARTICLE_QUERY_BY_USERID": {
    url: "/article/query-by-userid/{userId}",
    method: "post"
  },
}

const videoRequests: Record<string, ConfigModel> = {
  "VIDEO_USER_UPLOAD": {
    url: "/video/user/upload",
    method: "post"
  },
  "VIDEO_QUERY_BY_USERID": {
    url: "/video/query/{userId}",
    method: "post"
  },
}

const CONFIG_METHODS: Record<string, ConfigModel> = {
  ...userRequests,
  ...photoRequests,
  ...musicRequests,
  ...articleRequests,
  ...videoRequests
}

export default CONFIG_METHODS;