// 设计蛇的类
class Snack{
    // 获取蛇这个容器
    element: HTMLElement
    // 表示蛇头的元素
    head: HTMLElement;
    // 一个集合，会自动刷新
    bodies: HTMLCollection;
    constructor(){
        this.element = document.getElementById('snack')!;
        this.head = document.querySelector('#snack > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇头的X坐标
    get X(){
       return this.head.offsetLeft;
    }
    // 获取蛇头的YX坐标
    get Y(){
        return this.head.offsetTop;
     }

     // 设置蛇头的X坐标
     set X(value: number){
         if(this.X === value){
             return;
         }
         // x 是否合法
         if(value < 0 || value > 290){
             throw new Error('蛇撞墙了');
         }

         // 判断蛇是否掉头
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
             // 向左掉头，让蛇向右走
            if(this.X > value){
                value = this.X + 10;
            }else{
                value = this.X - 10;
            }
         }

        
           // 移动身体
        this.moveBody();
         this.head.style.left = value + 'px';
         this.ifHeadBody();
     }
     // 设置蛇头的Y坐标
     set Y(value: number){
        if(this.Y === value){
            return;
        }
         // y 是否合法
         if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }
         // 判断蛇是否掉头
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(this.Y > value){
                value = this.Y + 10;
            }else{
                value = this.Y - 10;
            }
         }
         
          // 移动身体
          this.moveBody();
        this.head.style.top = value + 'px';
        this.ifHeadBody();

    }

    addBody(){
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';

            // (this.bodies[i] as HTMLElement).style.top = (this.bodies[i-1] as HTMLElement).offsetTop + 'px';
            // (this.bodies[i] as HTMLElement).style.left = (this.bodies[i-1] as HTMLElement).offsetLeft + 'px';
        }
    }

    // 用来检查蛇头是否撞到自己
    ifHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X == bd.offsetLeft && this.Y == bd.offsetTop){
                throw new Error('游戏结束！');
            }
        }
    }

}


export default Snack;