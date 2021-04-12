export class User {
    constructor(
        public uid: number,
        public name: string,
        private password: string,
        public postsLiked: Array<string>,
        public postsSaved: Array<string>
    ) {
    }
}
