// 定义表示记分牌的类
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个限制等级的变量
    maxLevel: number;
    // 设置多少分升一级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 2){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore(){
        this.scoreEle.innerText = ++this.score + '';
        // 判断多少分升一级
        if(this.score % this.upScore === 0){
            this.addLevel();
        }
    }
    addLevel(){
        if(this.level < this.maxLevel){
            this.levelEle.innerText = ++this.level + '';
        }
    }
}

// 测试代码
// const scorePanel = new ScorePanel();
// for(let i=0;i<20;i++){
//     scorePanel.addScore();
// }

export default ScorePanel;