# 煎蛋接口

## 无聊图
get: `http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_pic_comments&page=1`

返回:

```js
{
  "status": "ok",
  "current_page": 1,
  "page_count": 261,
  "total_comments": 6511,
  "count": 25,
  "comments": [
    {
      "comment_content": "包*子
<img src="http://ww3.sinaimg.cn/mw1024/0073tLPGgy1fr9gwsbhe2g305k08b7wj.gif" />",
      "pics": [
        "http://ww3.sinaimg.cn/mw1024/0073tLPGgy1fr9gwsbhe2g305k08b7wj.gif"
      ],
      "comment_ID": "3812127",
      "vote_negative": "18",
      "sub_comment_count": "6",
      "user_id": "0",
      "comment_date": "2018-05-13 09:44:46",
      "text_content": "包*子
",
      "vote_positive": "13",
      "comment_post_ID": "26402",
      "comment_author": "dimanche",
      "comment_date_gmt": "2018-05-13 01:44:46"
    }
  ]
}
```

点oo

post: `http://i.jandan.net/index.php?acv_ajax=true&option=1`  body: {ID: "{comment_post_ID}"} 

返回

```
3811994|THANK YOU  |1
```

点xx

post: `http://i.jandan.net/index.php?acv_ajax=true&option=0` body: {ID: "{comment_post_ID}"}


获取评论

get: `http://i.jandan.net/tucao/{id}` comment_ID

```js
{
  "code": 0,
  "tucao": [
    {
      "comment_reply_ID": "0",
      "is_jandan_user": 0,
      "comment_parent": "0",
      "comment_ID": "2154528",
      "vote_negative": "0",
      "comment_date": "2018-05-15 22:00:16",
      "comment_date_int": 1526392816,
      "is_tip_user": 0,
      "vote_positive": "6",
      "comment_post_ID": "3816084",
      "comment_author": "h",
      "comment_content": "鸣人打卡。"
    },
    
  ],
  "hot_tucao": [
    {
      "comment_reply_ID": "0",
      "is_jandan_user": 0,
      "comment_parent": "0",
      "comment_ID": "2154528",
      "vote_negative": "0",
      "comment_date": "2018-05-15 22:00:16",
      "comment_date_int": 1526392816,
      "is_tip_user": 0,
      "vote_positive": "6",
      "comment_post_ID": "3816084",
      "comment_author": "h",
      "comment_content": "鸣人打卡。"
    }
  ],
  "has_next_page": false
}
```

## 妹子图

get: `http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=1`

返回:

```js
{
  "status": "ok",
  "current_page": 1,
  "page_count": 74,
  "total_comments": 1832,
  "count": 25,
  "comments": [
    {
      "comment_content": "<img src="http://wx3.sinaimg.cn/mw600/0076BSS5ly1fr9gqt6lllj30jj11in2u.jpg" />",
      "pics": [
        "http://wx3.sinaimg.cn/mw600/0076BSS5ly1fr9gqt6lllj30jj11in2u.jpg"
      ],
      "comment_ID": "3812120",
      "vote_negative": "4",
      "sub_comment_count": "0",
      "user_id": "0",
      "comment_date": "2018-05-13 09:39:04",
      "text_content": "",
      "vote_positive": "0",
      "comment_post_ID": "21183",
      "comment_author": "腿看",
      "comment_date_gmt": "2018-05-13 01:39:04"
    }
  ]
}
```

