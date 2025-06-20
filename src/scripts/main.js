/**
 * 노래 생성기 웹 인터페이스 메인 스크립트
 */

// 인스트루멘탈 데이터
const instrumentalData = {
  // 테마 카테고리 및 테마 (application.yaml 및 instrumental_themes.json 기반)
  themes: [
    { 
      category: '자연 & 환경', 
      categoryEname: 'nature',
      items: [
        { id: 1, name: '여행', ename: 'Journey' },
        { id: 2, name: '온천', ename: 'Hot Springs' },
        { id: 3, name: '숲', ename: 'Forest' },
        { id: 4, name: '바다', ename: 'Sea' },
        { id: 5, name: '산', ename: 'Mountain' },
        { id: 6, name: '강', ename: 'River' },
        { id: 7, name: '사막', ename: 'Desert' },
        { id: 8, name: '눈/겨울', ename: 'Snow/Winter' },
        { id: 9, name: '봄', ename: 'Spring' },
        { id: 10, name: '여름', ename: 'Summer' },
        { id: 11, name: '가을', ename: 'Autumn' },
        { id: 12, name: '새벽', ename: 'Dawn' },
        { id: 13, name: '일몰', ename: 'Sunset' },
        { id: 14, name: '밤하늘', ename: 'Night Sky' },
        { id: 15, name: '비', ename: 'Rain' },
        { id: 16, name: '바람', ename: 'Wind' },
        { id: 17, name: '화원', ename: 'Garden' },
        { id: 18, name: '들판', ename: 'Field' }
      ]
    },
    { 
      category: '감정 & 무드', 
      categoryEname: 'emotion',
      items: [
        { id: 19, name: '평온', ename: 'Serenity' },
        { id: 20, name: '명상', ename: 'Meditation' },
        { id: 21, name: '로맨틱', ename: 'Romantic' },
        { id: 22, name: '우울', ename: 'Melancholy' },
        { id: 23, name: '기쁨', ename: 'Joy' },
        { id: 24, name: '향수', ename: 'Nostalgia' },
        { id: 25, name: '신비', ename: 'Mystery' },
        { id: 26, name: '긴장감', ename: 'Tension' },
        { id: 27, name: '희망', ename: 'Hope' },
        { id: 28, name: '고독', ename: 'Solitude' },
        { id: 29, name: '위로', ename: 'Comfort' },
        { id: 30, name: '설렘', ename: 'Excitement' },
        { id: 31, name: '감동', ename: 'Moving' },
        { id: 32, name: '치유', ename: 'Healing' },
        { id: 33, name: '용기', ename: 'Courage' }
      ]
    },
    { 
      category: '공간 & 장소', 
      categoryEname: 'space',
      items: [
        { id: 34, name: '카페', ename: 'Cafe' },
        { id: 35, name: '도서관', ename: 'Library' },
        { id: 36, name: '성당', ename: 'Cathedral' },
        { id: 37, name: '궁전', ename: 'Palace' },
        { id: 38, name: '마을', ename: 'Village' },
        { id: 39, name: '도시', ename: 'City' },
        { id: 40, name: '서점', ename: 'Bookstore' },
        { id: 41, name: '미술관', ename: 'Art Gallery' },
        { id: 42, name: '정원', ename: 'Garden' },
        { id: 43, name: '지하철', ename: 'Subway' },
        { id: 44, name: '공항', ename: 'Airport' },
        { id: 45, name: '해변', ename: 'Beach' }
      ]
    },
    { 
      category: '시간 & 계절감', 
      categoryEname: 'season',
      items: [
        { id: 46, name: '아침', ename: 'Morning' },
        { id: 47, name: '점심', ename: 'Noon' },
        { id: 48, name: '저녁', ename: 'Evening' },
        { id: 49, name: '심야', ename: 'Late Night' },
        { id: 50, name: '주말', ename: 'Weekend' },
        { id: 51, name: '휴일', ename: 'Holiday' },
        { id: 52, name: '추억', ename: 'Memories' },
        { id: 53, name: '미래', ename: 'Future' }
      ]
    },
    { 
      category: '라이프스타일',
      categoryEname: 'lifestyle',
      items: [
        { id: 54, name: '독서', ename: 'Reading' },
        { id: 55, name: '요리', ename: 'Cooking' },
        { id: 56, name: '운동', ename: 'Exercise' },
        { id: 57, name: '산책', ename: 'Stroll' },
        { id: 58, name: '드라이브', ename: 'Drive' },
        { id: 59, name: '쇼핑', ename: 'Shopping' },
        { id: 60, name: '휴식', ename: 'Rest' },
        { id: 61, name: '공부', ename: 'Study' },
        { id: 62, name: '청소', ename: 'Cleaning' },
        { id: 63, name: '화장', ename: 'Makeup' }
      ]
    },
    {
      category: '문화 & 예술',
      categoryEname: 'culture',
      items: [
        { id: 64, name: '클래식', ename: 'Classical' },
        { id: 65, name: '재즈', ename: 'Jazz' },
        { id: 66, name: '보사노바', ename: 'Bossa Nova' },
        { id: 67, name: '뉴에이지', ename: 'New Age' },
        { id: 68, name: '미니멀', ename: 'Minimal' },
        { id: 69, name: '앰비언트', ename: 'Ambient' },
        { id: 70, name: '일렉트로니카', ename: 'Electronica' },
        { id: 71, name: '퓨전', ename: 'Fusion' }
      ]
    },
    {
      category: '특별한 순간',
      categoryEname: 'moment',
      items: [
        { id: 72, name: '결혼식', ename: 'Wedding' },
        { id: 73, name: '생일', ename: 'Birthday' },
        { id: 74, name: '졸업', ename: 'Graduation' },
        { id: 75, name: '크리스마스', ename: 'Christmas' },
        { id: 76, name: '신년', ename: 'New Year' },
        { id: 77, name: '기념일', ename: 'Anniversary' },
        { id: 78, name: '축제', ename: 'Festival' }
      ]
    },
    {
      category: '활동 & 취미',
      categoryEname: 'activity',
      items: [
        { id: 79, name: '요가', ename: 'Yoga' },
        { id: 80, name: '마사지', ename: 'Massage' },
        { id: 81, name: '스파', ename: 'Spa' },
        { id: 82, name: '피크닉', ename: 'Picnic' },
        { id: 83, name: '캠핑', ename: 'Camping' },
        { id: 84, name: '낚시', ename: 'Fishing' },
        { id: 85, name: '정원 가꾸기', ename: 'Gardening' },
        { id: 86, name: '차 마시기', ename: 'Tea Drinking' }
      ]
    },
    {
      category: '컬러 테마',
      categoryEname: 'color',
      items: [
        { id: 87, name: '블루', ename: 'Blue' },
        { id: 88, name: '그린', ename: 'Green' },
        { id: 89, name: '화이트', ename: 'White' },
        { id: 90, name: '골드', ename: 'Gold' },
        { id: 91, name: '핑크', ename: 'Pink' },
        { id: 92, name: '퍼플', ename: 'Purple' },
        { id: 93, name: '브라운', ename: 'Brown' }
      ]
    },
    {
      category: '컨셉 테마',
      categoryEname: 'concept',
      items: [
        { id: 94, name: '동화', ename: 'Fairy Tale' },
        { id: 95, name: '영화음악', ename: 'Film Score' },
        { id: 96, name: '게임음악', ename: 'Game Music' },
        { id: 97, name: '광고음악', ename: 'Advertisement Music' },
        { id: 98, name: '애니메이션', ename: 'Animation' },
        { id: 99, name: '드라마', ename: 'Drama' },
        { id: 100, name: '다큐멘터리', ename: 'Documentary' }
      ]
    }
  ],
  
  // 악기 목록 (서양, 한국, 일본)
  western_instruments: [
    { id: 'violin', name: '바이올린', category: 'string' },
    { id: 'viola', name: '비올라', category: 'string' },
    { id: 'cello', name: '첼로', category: 'string' },
    { id: 'double_bass', name: '더블 베이스', category: 'string' },
    { id: 'harp', name: '하프', category: 'string' },
    { id: 'guitar', name: '기타', category: 'string' },
    { id: 'piano', name: '피아노', category: 'percussion' },
    { id: 'harpsichord', name: '하프시코드', category: 'percussion' },
    { id: 'accordion', name: '아코디언', category: 'wind' },
    { id: 'flute', name: '플루트', category: 'wind' },
    { id: 'clarinet', name: '클라리넷', category: 'wind' },
    { id: 'oboe', name: '오보에', category: 'wind' },
    { id: 'bassoon', name: '바순', category: 'wind' },
    { id: 'trumpet', name: '트럼펫', category: 'brass' },
    { id: 'horn', name: '호른', category: 'brass' },
    { id: 'trombone', name: '트롬본', category: 'brass' },
    { id: 'tuba', name: '튜바', category: 'brass' },
    { id: 'drums', name: '드럼', category: 'percussion' },
    { id: 'xylophone', name: '실로폰', category: 'percussion' },
    { id: 'marimba', name: '마림바', category: 'percussion' },
    { id: 'timpani', name: '팀파니', category: 'percussion' }
  ],
  
  korean_instruments: [
    { id: 'gayageum', name: '가야금', category: 'string' },
    { id: 'geomungo', name: '거문고', category: 'string' },
    { id: 'haegeum', name: '해금', category: 'string' },
    { id: 'ajaeng', name: '아쟁', category: 'string' },
    { id: 'daegeum', name: '대금', category: 'wind' },
    { id: 'piri', name: '피리', category: 'wind' },
    { id: 'taepyeongso', name: '태평소', category: 'wind' },
    { id: 'saenghwang', name: '생황', category: 'wind' },
    { id: 'janggu', name: '장구', category: 'percussion' },
    { id: 'buk', name: '북', category: 'percussion' },
    { id: 'kkwaenggwari', name: '꽹과리', category: 'percussion' },
    { id: 'jing', name: '징', category: 'percussion' }
  ],
  
  japanese_instruments: [
    { id: 'koto', name: '고토', category: 'string' },
    { id: 'shamisen', name: '샤미센', category: 'string' },
    { id: 'biwa', name: '비와', category: 'string' },
    { id: 'shakuhachi', name: '샤쿠하치', category: 'wind' },
    { id: 'hichiriki', name: '히치리키', category: 'wind' },
    { id: 'shinobue', name: '시노부에', category: 'wind' },
    { id: 'taiko', name: '타이코', category: 'percussion' },
    { id: 'shime_daiko', name: '시메 다이코', category: 'percussion' },
    { id: 'kane', name: '카네', category: 'percussion' },
    { id: 'mokugyo', name: '목교', category: 'percussion' }
  ],
};

// 언어 및 언어 세트 데이터
const languageData = {
  languages: [
    { code: 'kr', name: '한국어' },
    { code: 'jp', name: '일본어' },
    { code: 'en', name: '영어' },
    { code: 'de', name: '독일어' },
    { code: 'fr', name: '프랑스어' },
    { code: 'it', name: '이탈리아어' },
    { code: 'es', name: '스페인어' },
    { code: 'ar', name: '아랍어' },
    { code: 'tw', name: '대만어' },
    { code: 'hi', name: '힌디어' },
    { code: 'th', name: '태국어' },
    { code: 'vi', name: '베트남어' },
    { code: 'ru', name: '러시아어' },
    { code: 'cn', name: '중국어' },
    { code: 'tr', name: '터키어' },
    { code: 'mn', name: '몽골어' },
    { code: 'hu', name: '헝가리어' },
    { code: 'pl', name: '폴란드어' },
    { code: 'ro', name: '루마니아어' },
    { code: 'cs', name: '체코어' },
    { code: 'uk', name: '우크라이나어' },
    { code: 'uz', name: '우즈베크어' },
    { code: 'nl', name: '네덜란드어' },
    { code: 'el', name: '그리스어' },
    { code: 'pt', name: '포르투갈어' },
    { code: 'fa', name: '페르시아어' },
    { code: 'sw', name: '스와힐리어' },
    { code: 'id', name: '인도네시아어' },
    { code: 'bn', name: '벵골어' },
    { code: 'ms', name: '말레이어' },
    { code: 'tl', name: '타갈로그어' },
    { code: 'ne', name: '네팔어' },
    { code: 'ur', name: '우르두어' },
    { code: 'ps', name: '파슈토어' },
    { code: 'my', name: '미얀마어' },
    { code: 'lo', name: '라오스어' },
    { code: 'km', name: '캄보디아어' }
  ],
  languageSets: [
    { name: '단일 언어', codes: [''], count: 1 },
    { name: '3개국 기본', codes: ['kr', 'jp', 'en'], count: 3 },
    { name: '7개국 기본', codes: ['kr', 'jp', 'en', 'de', 'fr', 'it', 'es'], count: 7 },
    { name: '14개국 세트', codes: ['kr', 'jp', 'en', 'de', 'fr', 'it', 'es', 'ar', 'tw', 'hi', 'th', 'vi', 'ru', 'cn'], count: 14 },
    { name: '20개국 세트', codes: ['jp', 'sw', 'id', 'th', 'kr', 'tw', 'de', 'mn', 'vi', 'es', 'ar', 'en', 'it', 'in', 'tr', 'pl', 'fr', 'hu', 'cn', 'ru'], count: 20 },
    { name: '35개국 세트', codes: ['kr', 'jp', 'en', 'de', 'fr', 'it', 'es', 'tr', 'mn', 'hu', 'pl', 'ro', 'cs', 'uk', 'uz', 'nl', 'el', 'pt', 'ar', 'fa', 'hi', 'sw', 'id', 'tw', 'bn', 'ms', 'tl', 'vi', 'th', 'ne', 'ur', 'ps', 'my', 'ru', 'cn'], count: 35 },
    { name: '37개국 전체', codes: ['kr', 'jp', 'en', 'de', 'fr', 'it', 'es', 'tr', 'mn', 'hu', 'pl', 'ro', 'cs', 'uk', 'uz', 'nl', 'el', 'pt', 'ar', 'fa', 'hi', 'sw', 'id', 'tw', 'bn', 'ms', 'tl', 'vi', 'th', 'ne', 'ur', 'ps', 'my', 'lo', 'km', 'ru', 'cn'], count: 37 }
  ]
};

// 파일 및 디렉토리 구조 생성 함수
function generateDirectoryStructure(config) {
  const { type, name, options } = config;
  let structure = '';

  function addLine(text, indent = 0) {
    const indentStr = '  '.repeat(indent);
    structure += `${indentStr}${text}\n`;
  }

  addLine(`📁 ${name}`, 0);
  
  if (type === 'single') {
    // 싱글 앨범 구조
    addLine(`├── ${name}_${options.language}.md`, 1);
    addLine('├── draft.md', 1);
    addLine('├── notes.md', 1);
    addLine('├── final.md', 1);
    if (options.createMetadata) {
      addLine('├── song_metadata_distrokid.json', 1);
      addLine('├── sns_metadata.json', 1);
    }
    addLine('└── src/', 1);
    addLine('    ├── img/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── movie/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── music/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── srt/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    └── sns/', 2);
    addLine('        └── .gitkeep', 2);
  }
  else if (type === 'global') {
    // 글로벌 앨범 구조
    const languages = languageData.languageSets[options.languageSet - 1].codes;
    
    addLine('├── draft.md', 1);
    addLine('├── notes.md', 1);
    addLine('├── final.md', 1);
    
    for (let i = 0; i < languages.length; i++) {
      const langCode = languages[i] || 'kr'; // 빈 문자열인 경우 kr로 대체
      const langIndex = i + 1;
      addLine(`├── ${langIndex.toString().padStart(2, '0')}_${name}_${langCode}.md`, 1);
    }
    
    if (options.createMetadata) {
      addLine('├── song_metadata_distrokid.json', 1);
      addLine('├── sns_metadata.json', 1);
    }
    
    addLine('└── src/', 1);
    addLine('    ├── img/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── movie/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── music/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── srt/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    └── sns/', 2);
    addLine('        └── .gitkeep', 2);
  }
  else if (type === 'special') {
    // 스페셜 앨범 구조
    const tracks = options.tracks.split(',').map(track => track.trim()).filter(track => track);
    
    addLine('├── draft.md', 1);
    addLine('├── notes.md', 1);
    addLine('├── final.md', 1);
    
    for (let i = 0; i < tracks.length; i++) {
      const trackName = tracks[i];
      const trackIndex = i + 1;
      const safeTrackName = trackName.replace(/[\\/:*?"<>|]/g, '_').replace(/ /g, '_');
      addLine(`├── ${trackIndex.toString().padStart(2, '0')}_${safeTrackName}.md`, 1);
    }
    
    if (options.createMetadata) {
      addLine('├── song_metadata_distrokid.json', 1);
      addLine('├── sns_metadata.json', 1);
    }
    
    addLine('└── src/', 1);
    addLine('    ├── img/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── movie/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── music/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── srt/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    └── sns/', 2);
    addLine('        └── .gitkeep', 2);
  }
  else if (type === 'instrumental') {
    // 인스트루멘탈 구조
    const themeText = options.theme ? `_${options.theme}` : '';
    
    // 선택된 악기 이름 표시
    let instrumentsText = '';
    const allInstruments = [
      ...options.westernInstruments || [], 
      ...options.koreanInstruments || [], 
      ...options.japaneseInstruments || []
    ];
    
    if (allInstruments.length > 0) {
      // 선택된 악기가 있으면 악기 이름을 파일명에 포함
      instrumentsText = `_${allInstruments.slice(0, 3).join('-')}`;
      if (allInstruments.length > 3) {
        instrumentsText += `-etc`;
      }
    }
    
    const mainFile = `${name}${instrumentsText}${themeText}.md`;
    
    addLine(`├── ${mainFile}`, 1);
    addLine('├── draft.md', 1);
    addLine('├── notes.md', 1);
    
    // 선택된 악기 유형에 따라 추가 정보 표시
    if (allInstruments.length > 0) {
      const westernCount = (options.westernInstruments || []).length;
      const koreanCount = (options.koreanInstruments || []).length;
      const japaneseCount = (options.japaneseInstruments || []).length;
      
      if (westernCount > 0 || koreanCount > 0 || japaneseCount > 0) {
        addLine('├── selected_instruments.md', 1);
        if (westernCount > 0) {
          addLine(`├── western_instruments_${westernCount}.md`, 1);
        }
        if (koreanCount > 0) {
          addLine(`├── korean_instruments_${koreanCount}.md`, 1);
        }
        if (japaneseCount > 0) {
          addLine(`├── japanese_instruments_${japaneseCount}.md`, 1);
        }
      }
    }
    
    // 트랙이 여러 개인 경우
    if (options.trackCount > 1) {
      for (let i = 1; i <= options.trackCount; i++) {
        const trackPrefix = i.toString().padStart(2, '0');
        const isSpecial = (i === 1 && options.specialFirstTrack);
        const trackSuffix = isSpecial ? '_intro' : '';
        addLine(`├── ${trackPrefix}_track${trackSuffix}.md`, 1);
      }
    }
    
    // 가사가 있는 경우
    if (options.hasLyrics) {
      addLine('├── lyrics_draft.md', 1);
      addLine('├── lyrics_final.md', 1);
    }
    
    // 선택된 악기 목록 표시
    if (allInstruments.length > 0) {
      addLine('├── instruments.md', 1);
    }
    
    addLine('└── src/', 1);
    addLine('    ├── img/', 2);
    addLine('    │   └── .gitkeep', 2);
    addLine('    ├── music/', 2);
    addLine('    │   └── .gitkeep', 2);
    if (options.hasLyrics) {
      addLine('    ├── vocal/', 2);
      addLine('    │   └── .gitkeep', 2);
    }
    addLine('    └── notes/', 2);
    addLine('        └── .gitkeep', 2);
  }
  
  return structure;
}

// Alpine.js 메인 컴포넌트
function songCreator() {
  return {
    activeTab: 'single', // 기본 탭
    
    // 탭별 데이터
    single: {
      name: '',
      language: 'kr',
      createMetadata: true
    },
    global: {
      name: '',
      languageSet: 3, // 기본값: 7개국 세트
      createMetadata: true
    },
    special: {
      name: '',
      tracks: '',
      createMetadata: true
    },
    
    // 테마 카테고리 선택 시 테마 목록 업데이트
    updateThemeItems() {
      const selectedCategory = this.instrumental.themeCategory;
      const category = instrumentalData.themes.find(c => c.categoryEname === selectedCategory);
      
      if (category) {
        this.filteredThemes = category.items;
        console.log(`카테고리 '${category.category}'의 테마 ${this.filteredThemes.length}개 로드됨`);
      } else {
        this.filteredThemes = [];
      }
    },
    instrumental: {
      name: '',
      themeCategory: '',
      themeCategoryEname: '',
      theme: '',
      hasLyrics: false,
      specialFirstTrack: false,
      trackCount: 1,
      westernInstruments: [],
      koreanInstruments: [],
      japaneseInstruments: [],
      useExistingTheme: false,
      createdSongs: []  // 장르 삭제 및 createdSongs 유지
    },
    
    // 테마/카테고리 질문 관련
    showCategoryThemeQuestion: false,
    tempInstrumentalData: null,
    
    // 미리보기 데이터
    preview: {
      structure: '',
      tab: '',
      showContent: false,
      showShellScript: false,
      showBatchScript: false
    },
    
    // 데이터 초기화
    availableLanguages: languageData.languages,
    languageSets: languageData.languageSets,
    
  // 인스트루멘탈 데이터
  instrumentalThemes: instrumentalData.themes,
  extendedThemeCategories: instrumentalData.themes.map(category => ({
    categoryName: category.category,
    categoryEname: category.categoryEname
  })),
  filteredThemes: [],
  westernInstruments: instrumentalData.western_instruments,
  koreanInstruments: instrumentalData.korean_instruments,
  japaneseInstruments: instrumentalData.japanese_instruments,
    
    // 생성 함수들
    generateSingle() {
      if (!this.single.name) {
        alert('곡 이름을 입력해주세요.');
        return;
      }
      
      this.preview.structure = generateDirectoryStructure({
        type: 'single',
        name: this.single.name,
        options: {
          language: this.single.language,
          createMetadata: this.single.createMetadata
        }
      });
      this.preview.tab = 'single';
    },
    
    generateGlobal() {
      if (!this.global.name) {
        alert('곡 이름을 입력해주세요.');
        return;
      }
      
      this.preview.structure = generateDirectoryStructure({
        type: 'global',
        name: this.global.name,
        options: {
          languageSet: this.global.languageSet,
          createMetadata: this.global.createMetadata
        }
      });
      this.preview.tab = 'global';
    },
    
    generateSpecial() {
      if (!this.special.name) {
        alert('앨범 이름을 입력해주세요.');
        return;
      }
      
      if (!this.special.tracks) {
        alert('트랙 목록을 입력해주세요.');
        return;
      }
      
      this.preview.structure = generateDirectoryStructure({
        type: 'special',
        name: this.special.name,
        options: {
          tracks: this.special.tracks,
          createMetadata: this.special.createMetadata
        }
      });
      this.preview.tab = 'special';
    },
    
    generateInstrumental() {
      if (!this.instrumental.name) {
        alert('곡 이름을 입력해주세요.');
        return;
      }
      
      let songOptions = {};
      
      // 기존 테마 사용 옵션이 선택된 경우
      if (this.instrumental.useExistingTheme && this.instrumental.createdSongs.length > 0) {
        // 선택된 기존 테마 가져오기 (인덱스 기반)
        const selectedIndex = parseInt(document.getElementById('instrumental-existing-theme').value || 0, 10);
        const existingSong = this.instrumental.createdSongs[selectedIndex] || this.instrumental.createdSongs[0];
        
        // 기존 테마 정보 가져오기
        songOptions = {
          theme: existingSong.theme,
          region: existingSong.region,
          instrumentType: existingSong.instrumentType,
          hasLyrics: existingSong.hasLyrics,
          specialFirstTrack: existingSong.specialFirstTrack,
          trackCount: parseInt(this.instrumental.trackCount, 10) || 1, // 트랙 수는 현재 입력된 값 사용
          westernInstruments: existingSong.westernInstruments || [],
          koreanInstruments: existingSong.koreanInstruments || [],
          japaneseInstruments: existingSong.japaneseInstruments || []
        };
        
        console.log('기존 테마 기반으로 곡 생성:', songOptions);
      } else {
        // 새로운 설정으로 곡 생성
        songOptions = {
          theme: this.instrumental.theme,
          region: this.instrumental.region,
          instrumentType: this.instrumental.instrumentType,
          hasLyrics: this.instrumental.hasLyrics,
          specialFirstTrack: this.instrumental.specialFirstTrack,
          trackCount: parseInt(this.instrumental.trackCount, 10) || 1,
          westernInstruments: this.instrumental.westernInstruments,
          koreanInstruments: this.instrumental.koreanInstruments,
          japaneseInstruments: this.instrumental.japaneseInstruments
        };
      }
      
      // 이미 생성된 곡 목록에 현재 곡 추가
      const newSong = {
        name: this.instrumental.name,
        theme: songOptions.theme,
        region: songOptions.region,
        instrumentType: songOptions.instrumentType,
        hasLyrics: songOptions.hasLyrics,
        specialFirstTrack: songOptions.specialFirstTrack,
        trackCount: songOptions.trackCount,
        westernInstruments: [...songOptions.westernInstruments],
        koreanInstruments: [...songOptions.koreanInstruments],
        japaneseInstruments: [...songOptions.japaneseInstruments]
      };
      
      this.instrumental.createdSongs.push(newSong);
      
      // 국가/지역 필드가 삭제되었으므로 기본값 설정
      if (!songOptions.region) {
        songOptions.region = 'global_music';
      }
      
      this.preview.structure = generateDirectoryStructure({
        type: 'instrumental',
        name: this.instrumental.name,
        options: songOptions
      });
      this.preview.tab = 'instrumental';
      
      // 곡 생성 후 '기존 테마 사용' 옵션 초기화
      this.instrumental.useExistingTheme = false;
    },
    
    // 미리보기 토글 및 다운로드
    togglePreview() {
      this.preview.showContent = !this.preview.showContent;
      // 다른 모든 보기 닫기
      this.preview.showShellScript = false;
      this.preview.showBatchScript = false;
    },
    
    downloadPreviewFile() {
      if (!this.preview.structure) return;
      
      const name = this.preview.tab === 'single' ? this.single.name : 
                   this.preview.tab === 'global' ? this.global.name : 
                   this.preview.tab === 'special' ? this.special.name : 
                   this.instrumental.name;
                   
      const filename = `${name}_directory_structure.txt`;
                         
      const blob = new Blob([this.preview.structure], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    },
    
    // 쉘 스크립트 토글 및 다운로드
    toggleShellScript() {
      this.preview.showShellScript = !this.preview.showShellScript;
      // 다른 모든 보기 닫기
      this.preview.showContent = false;
      this.preview.showBatchScript = false;
    },
    
    // 배치 스크립트 토글 및 다운로드
    toggleBatchScript() {
      this.preview.showBatchScript = !this.preview.showBatchScript;
      // 다른 모든 보기 닫기
      this.preview.showContent = false;
      this.preview.showShellScript = false;
    },
      
    // 스크립트 생성 및 다운로드
    getScript(scriptType) {
      if (!this.preview.structure) return '';
      
      const name = this.preview.tab === 'single' ? this.single.name : 
                   this.preview.tab === 'global' ? this.global.name : 
                   this.preview.tab === 'special' ? this.special.name : 
                   this.instrumental.name;
      
      let script = '';
      const lines = this.preview.structure.split('\n');
      
      if (scriptType === 'shell') {
        // 쉘 스크립트(.sh) 생성
        script = '#!/bin/bash\n\n';
        script += '# 이 스크립트는 디렉토리 구조를 자동으로 생성합니다.\n';
        script += `# 생성일: ${new Date().toLocaleDateString()}\n\n`;
        
        let currentPath = '';
        for (const line of lines) {
          if (!line.trim()) continue;
          
          // 디렉토리 추출
          if (line.includes('📁')) {
            const dirName = line.replace('📁', '').trim();
            script += `# 메인 폴더 생성\n`;
            script += `mkdir -p "${dirName}"\n`;
            currentPath = dirName;
          } else if (line.includes('└──') || line.includes('├──')) {
            const item = line.replace(/[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 디렉토리
              const dirPath = `${currentPath}/${item}`.replace(/\/\//g, '/');
              script += `mkdir -p "${dirPath}"\n`;
            } else if (item !== '.gitkeep') {
              // 파일 (단, .gitkeep은 제외)
              const filePath = `${currentPath}/${item}`.replace(/\/\//g, '/');
              script += `touch "${filePath}"\n`;
            }
          } else if (line.includes('    └──') || line.includes('    ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 서브 디렉토리
              const subDir = item.replace('/', '');
              const dirPath = `${currentPath}/src/${subDir}`.replace(/\/\//g, '/');
              script += `mkdir -p "${dirPath}"\n`;
            } 
          } else if (line.includes('        └──') || line.includes('        ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            // gitkeep 파일 등은 불필요하므로 생략
          }
        }
        
        script += '\necho "디렉토리 구조 생성 완료!"\n';
        
          return {
          content: script,
          filename: `${name}_create_structure.sh`
        };
      } 
      else if (scriptType === 'batch') {
        // 배치 파일(.bat) 생성 - Windows용
        script = '@echo off\n';
        script += 'rem 이 배치 파일은 디렉토리 구조를 자동으로 생성합니다.\n';
        script += `rem 생성일: ${new Date().toLocaleDateString()}\n\n`;
        
        let currentPath = '';
        for (const line of lines) {
          if (!line.trim()) continue;
          
          // 디렉토리 추출
          if (line.includes('📁')) {
            const dirName = line.replace('📁', '').trim();
            script += `rem 메인 폴더 생성\n`;
            script += `mkdir "%CD%\\${dirName}"\n`;
            currentPath = dirName;
          } else if (line.includes('└──') || line.includes('├──')) {
            const item = line.replace(/[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 디렉토리
              const dirPath = `${currentPath}\\${item.slice(0, -1)}`;
              script += `mkdir "%CD%\\${dirPath}"\n`;
            } else if (item !== '.gitkeep') {
              // 파일 (단, .gitkeep은 제외)
              const filePath = `${currentPath}\\${item}`;
              script += `type nul > "%CD%\\${filePath}"\n`;
            }
          } else if (line.includes('    └──') || line.includes('    ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 서브 디렉토리
              const subDir = item.replace('/', '');
              const dirPath = `${currentPath}\\src\\${subDir}`;
              script += `mkdir "%CD%\\${dirPath}"\n`;
            } 
          } else if (line.includes('        └──') || line.includes('        ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            // gitkeep 파일 등은 불필요하므로 생략
          }
        }
        
        script += '\necho 디렉토리 구조 생성 완료!\n';
        script += 'pause\n';
        
        return {
          content: script,
          filename: `${name}_create_structure.bat`
        };
      }
      
      return null;
    },
    
    // 실제 파일 다운로드 실행
    downloadFile(content, filename) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    },
    
    // 카테고리 이름 가져오기 함수
    getCategoryNameByEname(categoryEname) {
      const category = instrumentalData.themes.find(cat => cat.categoryEname === categoryEname);
      return category ? category.category : '카테고리 없음';
    },
    
    // 테마 이름 가져오기 함수
    getThemeNameByEname(themeEname, categoryEname) {
      // 카테고리를 먼저 찾음
      const category = instrumentalData.themes.find(cat => cat.categoryEname === categoryEname);
      if (!category) return '테마 없음';
      
      // 해당 카테고리에서 테마를 찾음
      const theme = category.items.find(item => item.ename.toLowerCase() === themeEname);
      return theme ? theme.name : '테마 없음';
    },
    
    // 인스트루멘탈 리스트에 곡 추가
    addInstrumentalToList() {
      if (!this.instrumental.name) {
        alert('앨범 제목을 입력해주세요.');
        return;
      }
      
      if (!this.instrumental.themeCategory || !this.instrumental.theme) {
        alert('테마 카테고리와 테마를 선택해주세요.');
        return;
      }
      
      // 임시 데이터 저장
      this.tempInstrumentalData = {
        name: this.instrumental.name,
        themeCategory: this.instrumental.themeCategory,
        theme: this.instrumental.theme,
        westernInstruments: [...this.instrumental.westernInstruments],
        koreanInstruments: [...this.instrumental.koreanInstruments],
        japaneseInstruments: [...this.instrumental.japaneseInstruments],
        hasLyrics: this.instrumental.hasLyrics,
        specialFirstTrack: this.instrumental.specialFirstTrack
      };
      
      // 테마/카테고리 질문 표시
      this.showCategoryThemeQuestion = true;
    },
    
    // 테마/카테고리 질문 응답 처리
    answerCategoryThemeQuestion(useSameThemeCategory) {
      this.showCategoryThemeQuestion = false;
      
      if (!this.tempInstrumentalData) return;
      
      if (useSameThemeCategory) {
        // 트랙 수 설정 대화상자 표시
        const trackCount = prompt("트랙 수를 입력하세요 (1-20):", "1");
        if (trackCount !== null) {
          const parsedTrackCount = parseInt(trackCount, 10);
          if (!isNaN(parsedTrackCount) && parsedTrackCount >= 1 && parsedTrackCount <= 20) {
            this.tempInstrumentalData.trackCount = parsedTrackCount;
          } else {
            alert("유효한 트랙 수가 아닙니다. 기본값 1로 설정됩니다.");
            this.tempInstrumentalData.trackCount = 1;
          }
        } else {
          this.tempInstrumentalData.trackCount = 1;
        }
      } else {
        // 트랙 수 사용하지 않음
        this.tempInstrumentalData.trackCount = null;
      }
      
      // 선택된 테마 카테고리 정보 찾기
      const selectedCategory = instrumentalData.themes.find(cat => cat.categoryEname === this.instrumental.themeCategory);
      const selectedTheme = selectedCategory?.items.find(theme => theme.ename.toLowerCase() === this.instrumental.theme);
      
      // 파일명 생성
      const instrumentsText = this.getInstrumentsText(this.tempInstrumentalData);
      const themeText = this.instrumental.theme ? `_${this.instrumental.theme}` : '';
      const filename = `${this.tempInstrumentalData.name}${instrumentsText}${themeText}.md`;
      
      // 생성된 곡 목록에 추가
      this.instrumental.createdSongs.push({
        name: this.tempInstrumentalData.name,
        themeCategoryEname: this.instrumental.themeCategory,
        theme: this.instrumental.theme,
        filename: filename,
        westernInstruments: this.tempInstrumentalData.westernInstruments,
        koreanInstruments: this.tempInstrumentalData.koreanInstruments,
        japaneseInstruments: this.tempInstrumentalData.japaneseInstruments,
        hasLyrics: this.tempInstrumentalData.hasLyrics,
        specialFirstTrack: this.tempInstrumentalData.specialFirstTrack,
        trackCount: this.tempInstrumentalData.trackCount
      });
      
      // 입력 필드 초기화
      this.resetInstrumentalForm();
      
      // 임시 데이터 초기화
      this.tempInstrumentalData = null;
    },
    
    // 악기 목록 텍스트 생성
    getInstrumentsText(data) {
      const allInstruments = [
        ...data.westernInstruments || [],
        ...data.koreanInstruments || [],
        ...data.japaneseInstruments || []
      ];
      
      if (allInstruments.length > 0) {
        const instrumentsText = `_${allInstruments.slice(0, 3).join('-')}`;
        if (allInstruments.length > 3) {
          return instrumentsText + '-etc';
        }
        return instrumentsText;
      }
      return '';
    },
    
    // 폼 초기화
    resetInstrumentalForm() {
      this.instrumental.name = '';
      this.instrumental.themeCategory = '';
      this.instrumental.theme = '';
      this.instrumental.westernInstruments = [];
      this.instrumental.koreanInstruments = [];
      this.instrumental.japaneseInstruments = [];
      this.instrumental.hasLyrics = false;
      this.instrumental.specialFirstTrack = false;
    },
    
    // 모든 곡 생성
    generateInstrumentals() {
      if (this.instrumental.createdSongs.length === 0) {
        alert('생성할 곡이 없습니다.');
        return;
      }
      
      // 미리보기 구조 생성
      let structure = '';
      for (let i = 0; i < this.instrumental.createdSongs.length; i++) {
        const song = this.instrumental.createdSongs[i];
        structure += `${i+1}. ${song.name} (${this.getCategoryNameByEname(song.themeCategoryEname)} - ${this.getThemeNameByEname(song.theme, song.themeCategoryEname)})\n`;
        structure += `   - 파일명: ${song.filename}\n`;
        
        if (song.trackCount) {
          structure += `   - 트랙 수: ${song.trackCount}\n`;
        }
        
        const instrumentTypes = [];
        if (song.westernInstruments?.length > 0) instrumentTypes.push('서양악기');
        if (song.koreanInstruments?.length > 0) instrumentTypes.push('한국 전통악기');
        if (song.japaneseInstruments?.length > 0) instrumentTypes.push('일본 전통악기');
        
        if (instrumentTypes.length > 0) {
          structure += `   - 사용된 악기: ${instrumentTypes.join(', ')}\n`;
        }
        
        if (song.hasLyrics) {
          structure += `   - 가사 포함: 예\n`;
        }
        
        structure += '\n';
      }
      
      this.preview.structure = structure;
      this.preview.tab = 'instrumental';
    },
    
    togglePreview() {
      this.preview.showContent = !this.preview.showContent;
      // 다른 모든 보기 닫기
      this.preview.showShellScript = false;
      this.preview.showBatchScript = false;
    },
    
    downloadPreviewFile() {
      if (!this.preview.structure) return;
      
      const name = this.preview.tab === 'single' ? this.single.name : 
                   this.preview.tab === 'global' ? this.global.name : 
                   this.preview.tab === 'special' ? this.special.name : 
                   this.instrumental.name;
                   
      const filename = `${name}_directory_structure.txt`;
                         
      const blob = new Blob([this.preview.structure], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    },
    
    toggleShellScript() {
      this.preview.showShellScript = !this.preview.showShellScript;
      // 다른 모든 보기 닫기
      this.preview.showContent = false;
      this.preview.showBatchScript = false;
    },
    
    toggleBatchScript() {
      this.preview.showBatchScript = !this.preview.showBatchScript;
      // 다른 모든 보기 닫기
      this.preview.showContent = false;
      this.preview.showShellScript = false;
    },
      
    getScript(scriptType) {
      if (!this.preview.structure) return '';
      
      const name = this.preview.tab === 'single' ? this.single.name : 
                   this.preview.tab === 'global' ? this.global.name : 
                   this.preview.tab === 'special' ? this.special.name : 
                   this.instrumental.name;
      
      let script = '';
      const lines = this.preview.structure.split('\n');
      
      if (scriptType === 'shell') {
        // 쉘 스크립트(.sh) 생성
        script = '#!/bin/bash\n\n';
        script += '# 이 스크립트는 디렉토리 구조를 자동으로 생성합니다.\n';
        script += `# 생성일: ${new Date().toLocaleDateString()}\n\n`;
        
        let currentPath = '';
        for (const line of lines) {
          if (!line.trim()) continue;
          
          // 디렉토리 추출
          if (line.includes('📁')) {
            const dirName = line.replace('📁', '').trim();
            script += `# 메인 폴더 생성\n`;
            script += `mkdir -p "${dirName}"\n`;
            currentPath = dirName;
          } else if (line.includes('└──') || line.includes('├──')) {
            const item = line.replace(/[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 디렉토리
              const dirPath = `${currentPath}/${item}`.replace(/\/\//g, '/');
              script += `mkdir -p "${dirPath}"\n`;
            } else if (item !== '.gitkeep') {
              // 파일 (단, .gitkeep은 제외)
              const filePath = `${currentPath}/${item}`.replace(/\/\//g, '/');
              script += `touch "${filePath}"\n`;
            }
          } else if (line.includes('    └──') || line.includes('    ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 서브 디렉토리
              const subDir = item.replace('/', '');
              const dirPath = `${currentPath}/src/${subDir}`.replace(/\/\//g, '/');
              script += `mkdir -p "${dirPath}"\n`;
            } 
          } else if (line.includes('        └──') || line.includes('        ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            // gitkeep 파일 등은 불필요하므로 생략
          }
        }
        
        script += '\necho "디렉토리 구조 생성 완료!"\n';
        
          return {
          content: script,
          filename: `${name}_create_structure.sh`
        };
      } 
      else if (scriptType === 'batch') {
        // 배치 파일(.bat) 생성 - Windows용
        script = '@echo off\n';
        script += 'rem 이 배치 파일은 디렉토리 구조를 자동으로 생성합니다.\n';
        script += `rem 생성일: ${new Date().toLocaleDateString()}\n\n`;
        
        let currentPath = '';
        for (const line of lines) {
          if (!line.trim()) continue;
          
          // 디렉토리 추출
          if (line.includes('📁')) {
            const dirName = line.replace('📁', '').trim();
            script += `rem 메인 폴더 생성\n`;
            script += `mkdir "%CD%\\${dirName}"\n`;
            currentPath = dirName;
          } else if (line.includes('└──') || line.includes('├──')) {
            const item = line.replace(/[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 디렉토리
              const dirPath = `${currentPath}\\${item.slice(0, -1)}`;
              script += `mkdir "%CD%\\${dirPath}"\n`;
            } else if (item !== '.gitkeep') {
              // 파일 (단, .gitkeep은 제외)
              const filePath = `${currentPath}\\${item}`;
              script += `type nul > "%CD%\\${filePath}"\n`;
            }
          } else if (line.includes('    └──') || line.includes('    ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            if (item.endsWith('/')) {
              // 서브 디렉토리
              const subDir = item.replace('/', '');
              const dirPath = `${currentPath}\\src\\${subDir}`;
              script += `mkdir "%CD%\\${dirPath}"\n`;
            } 
          } else if (line.includes('        └──') || line.includes('        ├──')) {
            const item = line.replace(/\s+[└├]──\s+/, '').trim();
            // gitkeep 파일 등은 불필요하므로 생략
          }
        }
        
        script += '\necho 디렉토리 구조 생성 완료!\n';
        script += 'pause\n';
        
        return {
          content: script,
          filename: `${name}_create_structure.bat`
        };
      }
      
      return null;
    },
    
    // 실제 파일 다운로드 실행
    downloadFile(content, filename) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    },
    
    // 카테고리 이름 가져오기 함수
    getCategoryNameByEname(categoryEname) {
      const category = instrumentalData.themes.find(cat => cat.categoryEname === categoryEname);
      return category ? category.category : '카테고리 없음';
    },
    
    // 테마 이름 가져오기 함수
    getThemeNameByEname(themeEname, categoryEname) {
      // 카테고리를 먼저 찾음
      const category = instrumentalData.themes.find(cat => cat.categoryEname === categoryEname);
      if (!category) return '테마 없음';
      
      // 해당 카테고리에서 테마를 찾음
      const theme = category.items.find(item => item.ename.toLowerCase() === themeEname);
      return theme ? theme.name : '테마 없음';
    },
    
    // 인스트루멘탈 리스트에 곡 추가
    addInstrumentalToList() {
      if (!this.instrumental.name) {
        alert('앨범 제목을 입력해주세요.');
        return;
      }
      
      if (!this.instrumental.themeCategory || !this.instrumental.theme) {
        alert('테마 카테고리와 테마를 선택해주세요.');
        return;
      }
      
      // 임시 데이터 저장
      this.tempInstrumentalData = {
        name: this.instrumental.name,
        themeCategory: this.instrumental.themeCategory,
        theme: this.instrumental.theme,
        westernInstruments: [...this.instrumental.westernInstruments],
        koreanInstruments: [...this.instrumental.koreanInstruments],
        japaneseInstruments: [...this.instrumental.japaneseInstruments],
        hasLyrics: this.instrumental.hasLyrics,
        specialFirstTrack: this.instrumental.specialFirstTrack
      };
      
      // 테마/카테고리 질문 표시
      this.showCategoryThemeQuestion = true;
    },
    
    // 테마/카테고리 질문 응답 처리
    answerCategoryThemeQuestion(useSameThemeCategory) {
      this.showCategoryThemeQuestion = false;
      
      if (!this.tempInstrumentalData) return;
      
      if (useSameThemeCategory) {
        // 트랙 수 설정 대화상자 표시
        const trackCount = prompt("트랙 수를 입력하세요 (1-20):", "1");
        if (trackCount !== null) {
          const parsedTrackCount = parseInt(trackCount, 10);
          if (!isNaN(parsedTrackCount) && parsedTrackCount >= 1 && parsedTrackCount <= 20) {
            this.tempInstrumentalData.trackCount = parsedTrackCount;
          } else {
            alert("유효한 트랙 수가 아닙니다. 기본값 1로 설정됩니다.");
            this.tempInstrumentalData.trackCount = 1;
          }
        } else {
          this.tempInstrumentalData.trackCount = 1;
        }
      } else {
        // 트랙 수 사용하지 않음
        this.tempInstrumentalData.trackCount = null;
      }
      
      // 선택된 테마 카테고리 정보 찾기
      const selectedCategory = instrumentalData.themes.find(cat => cat.categoryEname === this.instrumental.themeCategory);
      const selectedTheme = selectedCategory?.items.find(theme => theme.ename.toLowerCase() === this.instrumental.theme);
      
      // 파일명 생성
      const instrumentsText = this.getInstrumentsText(this.tempInstrumentalData);
      const themeText = this.instrumental.theme ? `_${this.instrumental.theme}` : '';
      const filename = `${this.tempInstrumentalData.name}${instrumentsText}${themeText}.md`;
      
      // 생성된 곡 목록에 추가
      this.instrumental.createdSongs.push({
        name: this.tempInstrumentalData.name,
        themeCategoryEname: this.instrumental.themeCategory,
        theme: this.instrumental.theme,
        filename: filename,
        westernInstruments: this.tempInstrumentalData.westernInstruments,
        koreanInstruments: this.tempInstrumentalData.koreanInstruments,
        japaneseInstruments: this.tempInstrumentalData.japaneseInstruments,
        hasLyrics: this.tempInstrumentalData.hasLyrics,
        specialFirstTrack: this.tempInstrumentalData.specialFirstTrack,
        trackCount: this.tempInstrumentalData.trackCount
      });
      
      // 입력 필드 초기화
      this.resetInstrumentalForm();
      
      // 임시 데이터 초기화
      this.tempInstrumentalData = null;
    },
    
    // 악기 목록 텍스트 생성
    getInstrumentsText(data) {
      const allInstruments = [
        ...data.westernInstruments || [],
        ...data.koreanInstruments || [],
        ...data.japaneseInstruments || []
      ];
      
      if (allInstruments.length > 0) {
        const instrumentsText = `_${allInstruments.slice(0, 3).join('-')}`;
        if (allInstruments.length > 3) {
          return instrumentsText + '-etc';
        }
        return instrumentsText;
      }
      return '';
    },
    
    // 폼 초기화
    resetInstrumentalForm() {
      this.instrumental.name = '';
      this.instrumental.themeCategory = '';
      this.instrumental.theme = '';
      this.instrumental.westernInstruments = [];
      this.instrumental.koreanInstruments = [];
      this.instrumental.japaneseInstruments = [];
      this.instrumental.hasLyrics = false;
      this.instrumental.specialFirstTrack = false;
    },
  };
}
