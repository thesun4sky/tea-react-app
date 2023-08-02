# Tea React App

## 프로젝트 개요

이 프로젝트는 [CreateReact App](https://github.com/facebook/create-react-app)를 기반으로 만들어 졌습니다.

백엔드 프로젝트는 [SpringBlog App](https://github.com/thesun4sky/spring-blog)을 참조해서 연동해주세요.

## 디렉토리 구조
```bash
├── src                         # 소스 코드가 위치하는 디렉토리
│   ├── components             # 컴포넌트들이 위치하는 디렉토리
│   │   ├── Login.js           # 로그인 컴포넌트 파일 (로그인 관련 UI와 로직)
│   │   └── MemberSignUp.js    # 회원 가입 컴포넌트 파일 (회원 가입 관련 UI와 로직)
│   ├── App.css                # 전체 애플리케이션 스타일을 정의한 CSS 파일
│   ├── App.js                 # 전체 애플리케이션의 라우트와 레이아웃을 정의한 React 컴포넌트 파일
│   ├── App.test.js            # 애플리케이션 테스트를 위한 테스트 파일
│   ├── index.css              # index.js 파일에 의해 사용되는 CSS 파일
│   ├── index.js               # 애플리케이션의 진입점으로 사용되는 파일
│   └── logo.svg               # 로고 이미지 파일
├── package.json               # 프로젝트의 메타데이터 및 종속성을 정의한 파일 (npm 패키지 정보 포함)
└── README.md                  # 프로젝트에 대한 설명이 담긴 마크다운 파일
```

## 사용 가능한 스크립트

프로젝트 디렉터리에서 다음을 실행할 수 있습니다:

### 'npm start'

앱을 개발 모드로 실행합니다.\
브라우저에서 보려면 [http://localhost:3000](http://localhost:3000)을 엽니다.

변경하면 페이지가 다시 로드됩니다.\
또한 콘솔에 보풀 오류가 있을 수 있습니다.

### 'npm test'

대화형 감시 모드에서 테스트 주자를 실행합니다.\
자세한 내용은 [테스트 실행](https://facebook.github.io/create-react-app/docs/running-tests) 에 대한 섹션을 참조하십시오.

### 'npm run build'

제작을 위한 앱을 'build' 폴더에 빌드합니다.\
React를 프로덕션 모드로 올바르게 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

빌드가 최소화되고 파일 이름에 해시가 포함됩니다.\
앱을 배포할 준비가 되었습니다!

자세한 내용은 [deployment](https://facebook.github.io/create-react-app/docs/deployment) 에 대한 섹션을 참조하십시오.

### 'npm run eject'

**참고: 복구 불가능한 명령입니다. 일단 'eject'하면 돌아갈 수 없습니다!**

빌드 도구 및 구성 선택에 만족하지 않으면 언제든지 '이젝트'할 수 있습니다. 이 명령은 프로젝트에서 단일 빌드 종속성을 제거합니다.

대신 모든 구성 파일과 과도 종속성(웹 팩, 바벨, ESLint 등)을 프로젝트에 복사하므로 사용자가 이를 완전히 제어할 수 있습니다. eject를 제외한 모든 명령은 여전히 작동하지만 복사된 스크립트를 가리키므로 조정할 수 있습니다. 이 시점에서 사용자는 스스로 수행할 수 있습니다.

큐레이팅된 기능 세트는 소규모 및 중간 배포에 적합하며 이 기능을 사용할 필요가 없다고 느껴서는 안 됩니다. 그러나 이 도구를 사용할 준비가 되었을 때 사용자 지정할 수 없다면 이 도구가 유용하지 않을 것이라는 것을 이해합니다.

## 자세히 알아보기

자세한 내용은 [반응 앱 작성 설명서](https://facebook.github.io/create-react-app/docs/getting-started) 에서 확인할 수 있습니다.

React를 배우려면 [React 설명서](https://reactjs.org/) 를 확인하십시오.
