// 定义食物类
class Food{
    element: HTMLElement;
    constructor(){
        // 后面加一个 ! 表示这个东西不可能为空
        this.element = document.getElementById('food')!;
    };

    // 定义一个获取食物 X 轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

     // 定义一个获取食物 Y 轴坐标的方法
     get Y(){
        return this.element.offsetTop;
    }

    // 定义食物位置改变的方法
    change(){
        let left = Math.round(Math.random()*29)*10;
        let top = Math.round(Math.random()*29)*10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

    }

}
// 测试代码
// const food = new Food();
// console.log(food.X,food.Y)
// food.change();

export default Food;