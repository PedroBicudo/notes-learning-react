class GithubService {
    
    constructor() {
        this.URL = "https://api.github.com/users";
    }

    async getUsers() {
        let response = await fetch(this.URL);
        
        return response.json();
    }

}

export default GithubService;