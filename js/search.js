const SEARCH_DATABASE = [
    {
        words: ["武田悠馬"],
        level: 1,
        target: "7a2f9k1/index.html" 
    },
    {
        words: ["teacher-08-X15J9"],
        level: 2,
        target: "staff/teacher-08-X15J9/index.html"
    }
];

function executeSearch() {
    const inputElement = document.getElementById('searchInput');
    const input = inputElement.value.trim();
    if (!input) return;

    const inputWords = input.replace(/　/g, " ").split(/\s+/);

    // --- 自動階層計算ロジック ---
    // 現在のページのパスから、ルート(index.htmlのある場所)までの戻り値を計算
    // staff/teacher-01/index.html なら "../../" になる
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p !== "");
    
    // リポジトリ名「privete-academy」が含まれている場所を探す
    const repoIndex = pathParts.indexOf("privete-academy");
    // リポジトリ名の後の階層数を数える
    const depth = pathParts.length - (repoIndex + 1) - 1;
    
    const prefix = "../".repeat(Math.max(0, depth));
    // ---------------------------

    const match = SEARCH_DATABASE.find(entry => {
        return entry.words.length === inputWords.length && 
               entry.words.every(word => inputWords.includes(word));
    });

    if (match) {
        localStorage.setItem('arg_current_level', Math.max(localStorage.getItem('arg_current_level') || 0, match.level));
        window.location.href = prefix + match.target;
    } else {
        window.location.href = prefix + "search_notfound.html?q=" + encodeURIComponent(input);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const lv = localStorage.getItem('arg_current_level') || 0;
    const indicator = document.getElementById('level-value');
    if (indicator) indicator.innerText = "LEVEL " + lv;
});
