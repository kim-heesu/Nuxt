## 라우팅
```
pages 폴더 안에 파일 생성 시 별도의 작업 없이도 라우팅 된다.
대소문자 꼭 구분하기 
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


### 그 외 동일

## 기본구조
```
<div class="wrap">
    <Header />
    <Nuxt> ← router-view와 같은 역할 
        <template>
            <div class="content-wrap">
                <div class="inner"></div> // inner는 필요에 따라 선택하여 사용
            </div>
        </template>
    </ Nuxt>
    <Footer />
</div>
```

## 네이밍규칙
```
* 클래스명 <div class="content-wrap"></div>
- 사용


* 이미지명 img_section_info.png
_ 사용


* 변수명 let testItem
* 아이디명 <button id="btnTestContent"></button>
카멜케이스 사용
---------------------------
html,css 에서는 "" 사용
script 작성시 '' 사용 
---------------------------
```

## css 작성순서 권장
```
position 관련 (position,top,left...)
display (display,)
vertical-align
flex,grid 사용 시 관련 스타일
width
height
margin , padding
text 속성 (font letter-spacing color)
박스모델 속성 (border, border-radius,box-shadow ...)
etc
```
