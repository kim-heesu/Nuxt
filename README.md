## 라우팅
```
pages 폴더 안에 파일 생성 시 별도의 작업 없이도 라우팅 된다.
대소문자 꼭 구분하기

동적라우팅은?
/movie/:id 같은 애는 pages/movie/_id.vue로 만들면 된다.
_(언더바)는 파라미터를 의미한다.
```

## app.vue
```
App.vue → layouts/default.vue
Nuxt.js 안에는 App.vue라는 파일이 없다.
대신 layouts/default.vue가 그 역할을 대신한다.
```

## 404페이지
```
nuxt에서 자동으로 페이지를 찾을 수 없을 경우에 layouts폴더안에 있는 error라는 vue파일을 실행해서 보여준다.
```

## meta태그 다르게 설정하기
```
nuxt.config.js 안에 기본적인 내용을 넣고
바뀌어야하는 정보에는 hid속성 추가해주기

메타태그가 바껴야하는 페이지에 가서 head(){} 를 이용해 바뀌어야하는 내용 다시 작성해주기
hid기준으로 덮어써지니 참고!
```
