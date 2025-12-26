// 検索データベース
const SEARCH_DATABASE = [
    {
        words: ["武田悠馬"],
        level: 1,
        title: "生徒個人記録：武田 悠馬",
        preview: "学籍番号：20230412 / 状態：特別指導対象。寮生活における不審な行動の報告あり...",
        target: "7a2f9k1/index.html" 
    },
    {
        words: ["teacher-08-X15J9"],
        level: 2,
        title: "教職員個人資料（秘）：HS-08",
        preview: "管理ID：teacher-08-X15J9 / 氏名：[データ削除済] / 担当：特別指導および奉仕部運営...",
        target: "staff/teacher-08-X15J9/index.html"
    }
];

function executeSearch() {
    const inputElement = document.getElementById('searchInput');
    const input = inputElement.value.trim();
    if (!input) return;

    // 現在の階層からルートへのパスを計算（search_results.htmlを見つけるため）
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p !== "");
    const repoName = "privete-academy"; // リポジトリ名
    const repoIndex = pathParts.indexOf(repoName);
    const depth = pathParts.length - (repoIndex + 1) - 1;
    const prefix = "../".repeat(Math.max(0, depth));

    // 検索結果ページにキーワードを渡してジャンプ
    window.location.href = prefix + "search_results.html?q=" + encodeURIComponent(input);
}

// レベル表示（進捗インジケーター）の更新
window.addEventListener('DOMContentLoaded', () => {
    const lv = localStorage.getItem('arg_current_level') || 0;
    const indicator = document.getElementById('level-value');
    if (indicator) indicator.innerText = "LEVEL " + lv;
});
