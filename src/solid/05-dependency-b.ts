import { JsonDatabaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];
    /* private provider:JsonDatabaseService;

    constructor(provider: JsonDatabaseService) {
        this.provider = provider;
    } */

    constructor(private provider: PostProvider) {}


    async getPosts() { // esto es la inyección de dependencias
        // const jsonDB = new LocalDataBaseService(); // dependencias ocultas
        // const jsonDB = new JsonDatabaseService()
        this.posts = await this.provider.getPost();

        return this.posts;
    }
}