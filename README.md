리액트를 이용한 영화앱 입니다. 해외 무료 api로(proxy를 사용해 불법적 이용이 아닙니다!) 최신 영화 20개를 평점 순으로 정렬하여 보여주는 앱입니다.

처음이라 책을 보며 만들었지만 부족함이 많습니다.
클론코딩 방식으로 프로그래밍 했지만 단순 받아쓰기하는 것이 아니라 코드 한줄 한줄 이해하며 코딩하기 위해 열심히 노력했기 때문에 만드는 과정이 재미있었고, 완성하기까지 오랜 시간이 걸렸습니다.
첫 프로그래밍부터 난이도가 높았고 api사용도 어려웠지만 그만큼 의미있고 도움이 되는 일이었습니다.
연습용으로 만든 거라지만 국내 데이터도 아니고, 이벤트도 없어 실용성이 낮은 점이 아쉬웠습니다. 또 시간이 지남에 따라 최신 영화들도 바뀔텐데 데이터가 업데이트 되도록 만들지 못한 것이 아쉬웠습니다.


https://youtu.be/ibqd_zGzT_I
실행 동영상입니다!!

먼저 실행시켰을 때 데이터를 가져오는 동안 로딩화면이 뜨도록 구성했습니다. (src.routes.Home.js)

기본 화면인 홈 화면에서는 20개의 영화들을 평점이 높은 순으로 정렬했습니다.
영화 카드에 영화의 포스터, 제목, 연도, 장르, 줄거리가 나타납니다. (src.component.Movie.js / src.component.Movie.css)

영화 카드를 클릭하면 상세페이지에 영화의 제목이 있습니다. (src.routes.Detail.js)

네비게이션으로 홈 버튼과 어바웃 버튼을 누르면 해당 화면으로 이동할 수 있습니다. (src.component.Navigation.js / src.component.Navigation.css / src.App.js)
네비게이션의 어바웃 화면으로 가면 간단한 앱 소개와 제 이름, 완성 날짜가 카드에 표시됩니다. (src.routes.About.js / src.routes.About.css)
