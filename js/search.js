const SEARCH_DATABASE = [
    {
        words: ["武田悠馬"],
        level: 1,
        title: "生徒個人記録：武田 悠馬",
        preview: "氏名：武田 悠馬 / 学籍番号：20230412...（クリックで詳細表示）",
        target: "7a2f9k1/index.html" 
    },
    {
        words: ["teacher-08-X15J9"],
        level: 2,
        title: "教職員個人資料（秘）：HS-08",
        preview: "管理ID：teacher-08-X15J9 / 担当：特別指導...（クリックで詳細表示）",
        target: "staff/teacher-08-X15J9/index.html"
    }
    // 今後ここに title と preview を追加していきます
];

function executeSearch() {
    const inputElement = document.getElementById('searchInput');
    const input = inputElement.value.trim();
    if (!input) return;

    // どの階層にいても search_results.html へ飛ばすための計算
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p !== "");
    const repoIndex = pathParts.indexOf("privete-academy");
    const depth = pathParts.length - (repoIndex + 1) - 1;
    const prefix = "../".repeat(Math.max(0, depth));

    // 検索ワードをURLにくっつけて、結果ページへ移動
    window.location.href = prefix + "search_results.html?q=" + encodeURIComponent(input);
}

// レベル表示の更新（全ページ共通）
window.addEventListener('DOMContentLoaded', () => {
    const lv = localStorage.getItem('arg_current_level') || 0;
    const indicator = document.getElementById('level-value');
    if (indicator) indicator.innerText = "LEVEL " + lv;
});
