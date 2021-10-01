// 引入其他类
import Snack from "./snack";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


// 游戏的控制器，控制其他的所有类
class GameControl {
    // 定义三个属性
    snack: Snack;
    food: Food;
    scorePanel: ScorePanel;
    // 创建一个属性，记录蛇的方向
    direction: string = '';
    // 判断游戏是否结束
    isLive = true;

    constructor() {
        this.snack = new Snack();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 初始化游戏
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用 run 方法
        this.run()
    }
    /**
     *  ArrowUp
        ArrowDown
        ArrowRight
        ArrowLeft
     * 
     */
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    // 创建使蛇移动的方法
    run() {
        /**
         * 通过判断this.direction使蛇进行移动
         */
        // 获取蛇现在的坐标
        let x = this.snack.X;
        let y = this.snack.Y;
        

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y-=10;
                break;
            case "ArrowDown":
            case "Down":
                y+=10;
                break;
            case "ArrowRight":
            case "Right":
                x+=10;
                break;
            case "ArrowLeft":
            case "Left":
                x-=10;
                break;

        }
        this.checkEat(x, y);
        try{
            this.snack.X = x;
            this.snack.Y = y;
        }catch(e){
            alert(e.message);
            this.isLive = false;
        }
        
       
        // 表示如果为true则执行后面，如果为 false 则不执行后面
       this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    }

    // 定义一个检查蛇是否吃到食物的判断
    checkEat(x: number,y: number){
        if(x === this.food.X && y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snack.addBody();
        }
    }

}

export default GameControl;