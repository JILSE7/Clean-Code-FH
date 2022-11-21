import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostServices } from './05-dependency-c';


// Main
(async () => {

    // Inyectando provider como dependencia
    const provider = new JsonDatabaseService();
    const myProvider = new WebApiPostServices()
    // const provider = new LocalDataBaseService();

    // const postService = new PostService(provider);
    const postService = new PostService(myProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();