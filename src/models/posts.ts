export class Post {
    constructor(public pid: number,
                public uid: number,
                public timestamp: number,
                public title: string,
                public author: string,
                public content: string,
                public comments: Array<any>
                ) {
    }
}
