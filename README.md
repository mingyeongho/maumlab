<h1 align='center'>마음연구소 채팅 프로그램</h1>

기간. 23.02.01 ~23.02.

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>

<h2 id='overview'>Overview</h2>

### 로그인 회원가입

<video src='https://user-images.githubusercontent.com/57670160/217443126-9f3a646a-b93c-4a1f-9052-85f38da98981.mov' ></video>

### 1대1 채팅

<video src='https://user-images.githubusercontent.com/57670160/217443423-721825a5-1235-4d56-a4df-10693551da51.mov'></video>

### 그룹 채팅

<video src='https://user-images.githubusercontent.com/57670160/217443728-d2a58190-b1b4-47c0-ac3d-f6c7161f3deb.mov'></video>

<h2 id='run'>환경설정 및 실행</h2>

<h2 id='features'>요구사항</h2>

- [x] 회원가입

  - 회원가입을 하면서 Authentication과 Firestore에 모두 저장

- [x] 로그인

  - 로그인을 하면서 uid를 가지고 Authentication에서 계정이 존재하는지 확인을 하고 Firestore에서 계정을 찾는다.

- [x] 유저 목록

- [x] 1:1 채팅

- [x] 그룹 채팅

<h2 id='library'>라이브러리</h2>

![image](https://user-images.githubusercontent.com/57670160/217441770-61c52e62-f0a8-4495-af67-30024f658e57.png)

<h2 id='structure'>폴더 구조</h2>

<pre>
renderer
├── Hoc
│   ├── withAuth.tsx
│   └── withNavs.tsx
├── assets
│   └── images
│       ├── logo.png
│       ├── message.svg
│       ├── messenger.svg
│       ├── setting.svg
│       └── user.svg
├── components
│   ├── AddGroup
│   │   ├── AddGroup.style.tsx
│   │   ├── AddGroup.tsx
│   │   ├── AddItem
│   │   │   ├── AddItem.style.tsx
│   │   │   └── AddItem.tsx
│   │   └── hooks
│   │       └── useAddGroup.ts
│   ├── Chat
│   │   ├── ChatList.style.tsx
│   │   ├── ChatList.tsx
│   │   ├── ChatListItem
│   │   │   ├── ChatListItem.style.tsx
│   │   │   ├── ChatListItem.tsx
│   │   │   └── hooks
│   │   │       └── useChatListItem.ts
│   │   └── hooks
│   │       └── useChatList.ts
│   ├── ChatRoom
│   │   ├── ChatForm
│   │   │   ├── ChatForm.style.tsx
│   │   │   ├── ChatForm.tsx
│   │   │   └── hooks
│   │   │       └── useChatForm.ts
│   │   ├── ChatRecord
│   │   │   ├── ChatItem
│   │   │   │   ├── MyChat
│   │   │   │   │   ├── MyChat.style.tsx
│   │   │   │   │   └── MyChat.tsx
│   │   │   │   └── PeerChat
│   │   │   │       ├── PeerChat.style.tsx
│   │   │   │       └── PeerChat.tsx
│   │   │   ├── ChatRecord.style.tsx
│   │   │   ├── ChatRecord.tsx
│   │   │   └── hooks
│   │   │       └── useChatRecord.ts
│   │   ├── ChatRoom.style.tsx
│   │   ├── ChatRoom.tsx
│   │   └── Profile
│   │       ├── Profile.style.tsx
│   │       ├── Profile.tsx
│   │       └── hooks
│   │           └── useProfile.ts
│   ├── Common
│   │   └── Separate.tsx
│   ├── GroupChat
│   │   ├── GroupChatList.style.tsx
│   │   ├── GroupChatList.tsx
│   │   ├── GroupChatListItem
│   │   │   ├── GroupChatListItem.style.tsx
│   │   │   ├── GroupChatListItem.tsx
│   │   │   └── hooks
│   │   │       └── useGroupChatListItem.ts
│   │   └── hooks
│   │       └── useGroupChatList.ts
│   ├── GroupChatRoom
│   │   ├── ChatForm
│   │   │   ├── GroupChatForm.style.tsx
│   │   │   ├── GroupChatForm.tsx
│   │   │   └── hooks
│   │   │       └── useGroupChatForm.ts
│   │   ├── ChatRecord
│   │   │   ├── GroupChatRecord.style.tsx
│   │   │   ├── GroupChatRecord.tsx
│   │   │   └── hooks
│   │   │       └── useGroupChatRecord.ts
│   │   ├── GroupChatRoom.style.tsx
│   │   ├── GroupChatRoom.tsx
│   │   └── Profile
│   │       ├── GroupProfile.style.tsx
│   │       ├── GroupProfile.tsx
│   │       └── hooks
│   │           └── useGroupProfile.ts
│   ├── Home
│   │   ├── Friends
│   │   │   ├── Friend
│   │   │   │   ├── Friend.style.tsx
│   │   │   │   ├── Friend.tsx
│   │   │   │   └── hooks
│   │   │   │       └── useFriend.ts
│   │   │   ├── Friends.style.tsx
│   │   │   ├── Friends.tsx
│   │   │   └── hooks
│   │   │       └── useFriends.ts
│   │   ├── Home.style.tsx
│   │   ├── Home.tsx
│   │   ├── My
│   │   │   ├── My.style.tsx
│   │   │   ├── My.tsx
│   │   │   └── hooks
│   │   │       └── useMy.ts
│   │   └── hooks
│   │       └── useHome.ts
│   ├── Login
│   │   ├── Login.style.tsx
│   │   ├── Login.tsx
│   │   └── hooks
│   │       └── useLogin.ts
│   ├── Logout
│   │   ├── Logout.style.tsx
│   │   └── Logout.tsx
│   ├── Navs
│   │   ├── Navs.style.tsx
│   │   └── Navs.tsx
│   ├── Signup
│   │   ├── Signup.style.tsx
│   │   ├── Signup.tsx
│   │   └── hooks
│   │       └── useSignup.ts
│   └── function
│       ├── convertTimestamp.ts
│       ├── generatedGroupId.ts
│       ├── generatedId.ts
│       └── isValid.ts
├── firebase
│   └── firebase.ts
├── next-env.d.ts
├── next.config.js
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── chat
│   │   ├── [uid].tsx
│   │   └── index.tsx
│   ├── group
│   │   ├── [roomId].tsx
│   │   ├── addGroup.tsx
│   │   └── index.tsx
│   ├── home.tsx
│   ├── login.tsx
│   ├── logout.tsx
│   └── signup.tsx
├── styles
│   ├── GlobalStyle.tsx
│   └── Variable.tsx
├── tsconfig.json
└── utils
    ├── error.ts
    ├── interface.ts
    └── types.ts
</pre>

<h2 id='agonize'>고민한 부분</h2>

- 로그인 Persistence

- Realtime Database

<h2 id='improve'>개선사항</h2>

- Firestore 실시간 업데이트가 되지 않아 Realtime Database를 사용했습니다.
