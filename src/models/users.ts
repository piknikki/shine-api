export class User {
    constructor(
        public uid: number,
        public name: string,
        public screenName: string,
        public password: string,
        public postsLiked: Array<string>,
        public postsSaved: Array<string>
    ) {
    }
}
